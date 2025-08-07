# Database Setup Guide for NRSC Events System

## 🗄️ Database Setup

### 1. Install MySQL Dependencies

```bash
npm install mysql2
```

### 2. Environment Variables

Create a `.env.local` file in your project root:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=nrsc_events
DB_PORT=3306

# Next.js Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# API Configuration
API_BASE_URL=http://localhost:3000/api
```

### 3. Database Setup

1. **Create the database:**
   ```sql
   CREATE DATABASE nrsc_events;
   ```

2. **Run the schema:**
   ```bash
   mysql -u root -p nrsc_events < database_schema.sql
   ```

3. **Verify the setup:**
   ```sql
   USE nrsc_events;
   SHOW TABLES;
   SELECT * FROM upcoming_events;
   ```

## 🚀 API Endpoints

### GET /api/events
Fetches upcoming events from the database.

**Query Parameters:**
- `limit` (number): Number of events to return (default: 10)
- `featured` (boolean): Filter featured events only
- `withCategories` (boolean): Include category information

**Example:**
```bash
curl "http://localhost:3000/api/events?limit=5&featured=true"
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "event_title": "Satellite Technology Workshop",
      "event_type": "Workshop",
      "start_date": "2025-01-15",
      "end_date": "2025-01-17",
      "venue": "NRSC Auditorium",
      "event_status": "Upcoming",
      "priority_level": "High",
      "is_featured": true
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 5
}
```

## 📊 Database Schema Overview

### Main Tables

1. **`upcoming_events`** - Core events table
   - 25+ fields including title, dates, venue, contact info
   - Status tracking (Upcoming, Ongoing, Completed, etc.)
   - Priority levels (Low, Medium, High, Critical)
   - Registration management
   - Featured/public flags

2. **`event_categories`** - Event categorization
   - Category names and descriptions
   - Color codes for UI
   - Active/inactive status

3. **`event_category_relations`** - Many-to-many relationships
   - Links events to categories
   - Supports multiple categories per event

### Views

1. **`upcoming_events_with_categories`** - Events with category info
2. **`featured_events`** - Featured upcoming events

### Stored Procedures

1. **`GetUpcomingEventsByType`** - Filter by event type
2. **`GetEventsByDateRange`** - Filter by date range

## 🔧 Database Functions

### Core Functions
- `getUpcomingEvents(limit)` - Get upcoming events
- `getFeaturedEvents(limit)` - Get featured events
- `getEventsByType(type, limit)` - Filter by type
- `getEventById(id)` - Get single event
- `searchEvents(term, limit)` - Search events
- `getEventsByDateRange(start, end)` - Date range filter

### Admin Functions
- `createEvent(eventData)` - Create new event
- `updateEvent(id, eventData)` - Update event
- `deleteEvent(id)` - Delete event

### Category Functions
- `getEventCategories()` - Get all categories
- `getEventsWithCategories(limit)` - Events with category info

## 🎯 Frontend Integration

### Custom Hook Usage

```typescript
import { useEvents } from '@/app/hooks/useEvents';

function MyComponent() {
  const { events, loading, error, refetch } = useEvents({
    limit: 5,
    featured: true
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>{event.event_title}</div>
      ))}
    </div>
  );
}
```

### API Response Types

```typescript
interface EventsApiResponse {
  success: boolean;
  data: UpcomingEvent[];
  total: number;
  page: number;
  limit: number;
}
```

## 🛠️ Development Workflow

### 1. Database Changes
1. Update `database_schema.sql`
2. Run schema changes on your database
3. Update TypeScript interfaces in `src/app/types/events.ts`
4. Update database functions in `src/app/lib/database.ts`

### 2. API Changes
1. Update API route in `src/app/api/events/route.ts`
2. Test with curl or Postman
3. Update frontend hooks if needed

### 3. Frontend Changes
1. Update components to use new data structure
2. Test loading and error states
3. Verify responsive design

## 🔍 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check environment variables
   - Verify MySQL is running
   - Test connection manually

2. **API 500 Errors**
   - Check server logs
   - Verify database schema
   - Test database functions directly

3. **Type Errors**
   - Update TypeScript interfaces
   - Check data structure matches
   - Verify API response format

### Debug Commands

```bash
# Test database connection
mysql -u root -p -e "USE nrsc_events; SELECT COUNT(*) FROM upcoming_events;"

# Test API endpoint
curl "http://localhost:3000/api/events?limit=1"

# Check environment variables
node -e "console.log(process.env.DB_HOST)"
```

## 📈 Performance Optimization

### Database Indexes
- `idx_start_date` - For date-based queries
- `idx_event_status` - For status filtering
- `idx_event_type` - For type filtering
- `idx_is_featured` - For featured events
- `idx_is_public` - For public visibility

### Query Optimization
- Use LIMIT clauses
- Implement pagination
- Cache frequently accessed data
- Use connection pooling

## 🔐 Security Considerations

### Database Security
- Use environment variables for credentials
- Implement proper user permissions
- Regular database backups
- Input validation and sanitization

### API Security
- Rate limiting
- Input validation
- Authentication for admin endpoints
- CORS configuration

## 📝 Next Steps

1. **Set up the database** using the schema
2. **Configure environment variables**
3. **Install dependencies** (`npm install mysql2`)
4. **Test the API endpoints**
5. **Verify frontend integration**
6. **Add authentication** for admin features
7. **Implement caching** for better performance
8. **Add monitoring** and logging

## 🎉 Success!

Once everything is set up, your events will be fetched from the database instead of hardcoded data. The system supports:

- ✅ Real-time database queries
- ✅ Loading and error states
- ✅ Type-safe data handling
- ✅ Scalable architecture
- ✅ Admin functions ready
- ✅ Search and filtering
- ✅ Category management
