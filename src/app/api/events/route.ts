import { NextRequest, NextResponse } from 'next/server';
import { UpcomingEvent } from '@/app/types/events';
import { getUpcomingEvents, getFeaturedEvents, getEventsWithCategories } from '@/app/lib/database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const featured = searchParams.get('featured') === 'true';
    const withCategories = searchParams.get('withCategories') === 'true';
    
    let events: UpcomingEvent[];
    
    if (featured) {
      events = await getFeaturedEvents(limit);
    } else if (withCategories) {
      events = await getEventsWithCategories(limit);
    } else {
      events = await getUpcomingEvents(limit);
    }
    
    return NextResponse.json({
      success: true,
      data: events,
      total: events.length,
      page: 1,
      limit: limit
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch events',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST method for creating new events (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Add authentication/authorization check
    // TODO: Validate input data
    // TODO: Insert into database using createEvent function
    
    return NextResponse.json({
      success: true,
      message: 'Event created successfully'
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create event',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
