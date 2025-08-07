// Portal Database configuration and connection utilities
// Separate from events database to handle portal-specific data

import mysql from 'mysql2/promise';

// Portal Database configuration
const portalDbConfig = {
  host: process.env.PORTAL_DB_HOST || process.env.DB_HOST || 'localhost',
  user: process.env.PORTAL_DB_USER || process.env.DB_USER || 'root',
  password: process.env.PORTAL_DB_PASSWORD || process.env.DB_PASSWORD || '',
  database: process.env.PORTAL_DB_NAME || 'nrsc_portal',
  port: parseInt(process.env.PORTAL_DB_PORT || process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
};

// Create connection pool for portal database
let portalPool: mysql.Pool | null = null;

export async function getPortalConnection() {
  if (!portalPool) {
    portalPool = mysql.createPool(portalDbConfig);
  }
  return portalPool;
}

// Helper function to execute queries on portal database
export async function executePortalQuery<T = any>(
  query: string, 
  params: any[] = []
): Promise<T[]> {
  const connection = await getPortalConnection();
  try {
    const [rows] = await connection.execute(query, params);
    return rows as T[];
  } catch (error) {
    console.error('Portal database query error:', error);
    throw new Error(`Portal database query failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Helper function to execute a single query and get the first result
export async function executePortalQuerySingle<T = any>(
  query: string, 
  params: any[] = []
): Promise<T | null> {
  const results = await executePortalQuery<T>(query, params);
  return results.length > 0 ? results[0] : null;
}

// Helper function to execute insert/update/delete queries
export async function executePortalUpdate(
  query: string, 
  params: any[] = []
): Promise<{ affectedRows: number; insertId?: number }> {
  const connection = await getPortalConnection();
  try {
    const [result] = await connection.execute(query, params) as any;
    return {
      affectedRows: result.affectedRows,
      insertId: result.insertId
    };
  } catch (error) {
    console.error('Portal database update error:', error);
    throw new Error(`Portal database update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Portal-specific database functions

// Highlights functions
export async function getHighlights(limit: number = 10, featured: boolean = false): Promise<any[]> {
  let query = `
    SELECT * FROM earth_observation_highlights 
    WHERE is_active = TRUE
  `;
  const params: any[] = [];

  if (featured) {
    query += ' AND is_featured = TRUE';
  }

  query += ' ORDER BY priority_level DESC, created_at DESC LIMIT ?';
  params.push(limit);

  return executePortalQuery(query, params);
}

export async function getHighlightsByCategory(category: string, limit: number = 10): Promise<any[]> {
  const query = `
    SELECT * FROM earth_observation_highlights 
    WHERE category = ? AND is_active = TRUE
    ORDER BY priority_level DESC, created_at DESC
    LIMIT ?
  `;
  return executePortalQuery(query, [category, limit]);
}

// Announcements functions
export async function getAnnouncements(limit: number = 10, newOnly: boolean = false): Promise<any[]> {
  let query = `
    SELECT * FROM announcements 
    WHERE is_active = TRUE
  `;
  const params: any[] = [];

  if (newOnly) {
    query += ' AND is_new = TRUE';
  }

  query += ' ORDER BY date_published DESC, is_urgent DESC LIMIT ?';
  params.push(limit);

  return executePortalQuery(query, params);
}

export async function getAnnouncementsByType(type: string, limit: number = 10): Promise<any[]> {
  const query = `
    SELECT * FROM announcements 
    WHERE announcement_type = ? AND is_active = TRUE
    ORDER BY date_published DESC, is_urgent DESC
    LIMIT ?
  `;
  return executePortalQuery(query, [type, limit]);
}

// Disasters functions
export async function getDisasters(limit: number = 10, active: boolean = false): Promise<any[]> {
  let query = `
    SELECT * FROM disasters 
    WHERE is_active = TRUE
  `;
  const params: any[] = [];

  if (active) {
    query += ' AND status IN ("Active", "Monitoring")';
  }

  query += ' ORDER BY event_date DESC, severity_level DESC LIMIT ?';
  params.push(limit);

  return executePortalQuery(query, params);
}

export async function getDisastersByType(type: string, limit: number = 10): Promise<any[]> {
  const query = `
    SELECT * FROM disasters 
    WHERE disaster_type = ? AND is_active = TRUE
    ORDER BY event_date DESC, severity_level DESC
    LIMIT ?
  `;
  return executePortalQuery(query, [type, limit]);
}

// Photo Gallery functions
export async function getPhotos(limit: number = 10, featured: boolean = false): Promise<any[]> {
  let query = `
    SELECT pg.*, pgc.category_name 
    FROM photo_gallery pg
    LEFT JOIN photo_gallery_categories pgc ON pg.category_id = pgc.id
    WHERE pg.is_active = TRUE
  `;
  const params: any[] = [];

  if (featured) {
    query += ' AND pg.is_featured = TRUE';
  }

  query += ' ORDER BY pg.display_order ASC, pg.created_at DESC LIMIT ?';
  params.push(limit);

  return executePortalQuery(query, params);
}

export async function getPhotosByCategory(category: string, limit: number = 10): Promise<any[]> {
  const query = `
    SELECT pg.*, pgc.category_name 
    FROM photo_gallery pg
    LEFT JOIN photo_gallery_categories pgc ON pg.category_id = pgc.id
    WHERE pgc.category_name = ? AND pg.is_active = TRUE
    ORDER BY pg.display_order ASC, pg.created_at DESC
    LIMIT ?
  `;
  return executePortalQuery(query, [category, limit]);
}

// Recent Happenings functions
export async function getHappenings(limit: number = 10, featured: boolean = false): Promise<any[]> {
  let query = `
    SELECT * FROM recent_happenings 
    WHERE is_active = TRUE
  `;
  const params: any[] = [];

  if (featured) {
    query += ' AND is_featured = TRUE';
  }

  query += ' ORDER BY event_date DESC, is_featured DESC LIMIT ?';
  params.push(limit);

  return executePortalQuery(query, params);
}

export async function getHappeningsByType(type: string, limit: number = 10): Promise<any[]> {
  const query = `
    SELECT * FROM recent_happenings 
    WHERE event_type = ? AND is_active = TRUE
    ORDER BY event_date DESC, is_featured DESC
    LIMIT ?
  `;
  return executePortalQuery(query, [type, limit]);
}

// Close portal database connection (call this when shutting down the app)
export async function closePortalConnection() {
  if (portalPool) {
    await portalPool.end();
    portalPool = null;
  }
}
