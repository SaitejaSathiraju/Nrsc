// Database configuration and connection utilities
// You'll need to install: npm install mysql2

import mysql from 'mysql2/promise';

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nrsc_events',
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
};

// Create connection pool
let pool: mysql.Pool | null = null;

export async function getConnection() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

// Helper function to execute queries
export async function executeQuery<T = any>(
  query: string, 
  params: any[] = []
): Promise<T[]> {
  const connection = await getConnection();
  try {
    const [rows] = await connection.execute(query, params);
    return rows as T[];
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error(`Database query failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Helper function to execute a single query and get the first result
export async function executeQuerySingle<T = any>(
  query: string, 
  params: any[] = []
): Promise<T | null> {
  const results = await executeQuery<T>(query, params);
  return results.length > 0 ? results[0] : null;
}

// Helper function to execute insert/update/delete queries
export async function executeUpdate(
  query: string, 
  params: any[] = []
): Promise<{ affectedRows: number; insertId?: number }> {
  const connection = await getConnection();
  try {
    const [result] = await connection.execute(query, params) as any;
    return {
      affectedRows: result.affectedRows,
      insertId: result.insertId
    };
  } catch (error) {
    console.error('Database update error:', error);
    throw new Error(`Database update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Event-specific database functions
export async function getUpcomingEvents(limit: number = 10): Promise<any[]> {
  const query = `
    SELECT * FROM upcoming_events 
    WHERE event_status = 'Upcoming' 
      AND is_public = TRUE 
      AND start_date >= CURDATE()
    ORDER BY start_date ASC, priority_level DESC
    LIMIT ?
  `;
  return executeQuery(query, [limit]);
}

export async function getFeaturedEvents(limit: number = 5): Promise<any[]> {
  const query = `
    SELECT * FROM upcoming_events 
    WHERE is_featured = TRUE 
      AND event_status = 'Upcoming'
      AND is_public = TRUE 
      AND start_date >= CURDATE()
    ORDER BY start_date ASC
    LIMIT ?
  `;
  return executeQuery(query, [limit]);
}

export async function getEventsByType(eventType: string, limit: number = 10): Promise<any[]> {
  const query = `
    SELECT * FROM upcoming_events 
    WHERE event_type = ? 
      AND event_status = 'Upcoming'
      AND is_public = TRUE 
      AND start_date >= CURDATE()
    ORDER BY start_date ASC
    LIMIT ?
  `;
  return executeQuery(query, [eventType, limit]);
}

export async function getEventById(id: number): Promise<any | null> {
  const query = `
    SELECT * FROM upcoming_events 
    WHERE id = ? 
      AND is_public = TRUE
  `;
  return executeQuerySingle(query, [id]);
}

export async function searchEvents(searchTerm: string, limit: number = 10): Promise<any[]> {
  const query = `
    SELECT * FROM upcoming_events 
    WHERE (event_title LIKE ? OR event_description LIKE ? OR tags LIKE ?)
      AND event_status = 'Upcoming'
      AND is_public = TRUE 
      AND start_date >= CURDATE()
    ORDER BY start_date ASC
    LIMIT ?
  `;
  const searchPattern = `%${searchTerm}%`;
  return executeQuery(query, [searchPattern, searchPattern, searchPattern, limit]);
}

export async function getEventsByDateRange(startDate: string, endDate: string): Promise<any[]> {
  const query = `
    SELECT * FROM upcoming_events 
    WHERE start_date BETWEEN ? AND ?
      AND event_status = 'Upcoming'
      AND is_public = TRUE
    ORDER BY start_date ASC
  `;
  return executeQuery(query, [startDate, endDate]);
}

// Category functions
export async function getEventCategories(): Promise<any[]> {
  const query = `
    SELECT * FROM event_categories 
    WHERE is_active = TRUE
    ORDER BY category_name ASC
  `;
  return executeQuery(query);
}

export async function getEventsWithCategories(limit: number = 10): Promise<any[]> {
  const query = `
    SELECT 
      e.*,
      GROUP_CONCAT(c.category_name) as categories,
      GROUP_CONCAT(c.color_code) as category_colors
    FROM upcoming_events e
    LEFT JOIN event_category_relations ecr ON e.id = ecr.event_id
    LEFT JOIN event_categories c ON ecr.category_id = c.id
    WHERE e.event_status = 'Upcoming' 
      AND e.is_public = TRUE
      AND e.start_date >= CURDATE()
    GROUP BY e.id
    ORDER BY e.start_date ASC, e.priority_level DESC
    LIMIT ?
  `;
  return executeQuery(query, [limit]);
}

// Admin functions (for future use)
export async function createEvent(eventData: any): Promise<number> {
  const query = `
    INSERT INTO upcoming_events (
      event_title, event_description, event_type, start_date, end_date,
      start_time, end_time, venue, location, organizer, contact_person,
      contact_email, contact_phone, registration_required, registration_deadline,
      max_participants, priority_level, tags, image_url, external_link,
      is_featured, is_public, created_by
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  const result = await executeUpdate(query, [
    eventData.event_title,
    eventData.event_description,
    eventData.event_type,
    eventData.start_date,
    eventData.end_date,
    eventData.start_time,
    eventData.end_time,
    eventData.venue,
    eventData.location,
    eventData.organizer,
    eventData.contact_person,
    eventData.contact_email,
    eventData.contact_phone,
    eventData.registration_required,
    eventData.registration_deadline,
    eventData.max_participants,
    eventData.priority_level,
    eventData.tags,
    eventData.image_url,
    eventData.external_link,
    eventData.is_featured,
    eventData.is_public,
    eventData.created_by
  ]);
  
  return result.insertId || 0;
}

export async function updateEvent(id: number, eventData: any): Promise<boolean> {
  const query = `
    UPDATE upcoming_events SET
      event_title = ?, event_description = ?, event_type = ?, start_date = ?, end_date = ?,
      start_time = ?, end_time = ?, venue = ?, location = ?, organizer = ?, contact_person = ?,
      contact_email = ?, contact_phone = ?, registration_required = ?, registration_deadline = ?,
      max_participants = ?, priority_level = ?, tags = ?, image_url = ?, external_link = ?,
      is_featured = ?, is_public = ?, updated_by = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `;
  
  const result = await executeUpdate(query, [
    eventData.event_title,
    eventData.event_description,
    eventData.event_type,
    eventData.start_date,
    eventData.end_date,
    eventData.start_time,
    eventData.end_time,
    eventData.venue,
    eventData.location,
    eventData.organizer,
    eventData.contact_person,
    eventData.contact_email,
    eventData.contact_phone,
    eventData.registration_required,
    eventData.registration_deadline,
    eventData.max_participants,
    eventData.priority_level,
    eventData.tags,
    eventData.image_url,
    eventData.external_link,
    eventData.is_featured,
    eventData.is_public,
    eventData.updated_by,
    id
  ]);
  
  return result.affectedRows > 0;
}

export async function deleteEvent(id: number): Promise<boolean> {
  const query = `DELETE FROM upcoming_events WHERE id = ?`;
  const result = await executeUpdate(query, [id]);
  return result.affectedRows > 0;
}

// Close database connection (call this when shutting down the app)
export async function closeConnection() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
