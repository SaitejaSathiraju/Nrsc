import { NextRequest, NextResponse } from 'next/server';
import { getAnnouncements, getAnnouncementsByType } from '../../../lib/portalDatabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const newOnly = searchParams.get('new') === 'true';
    const type = searchParams.get('type');

    let announcements;
    if (type) {
      announcements = await getAnnouncementsByType(type, limit);
    } else {
      announcements = await getAnnouncements(limit, newOnly);
    }

    return NextResponse.json({
      success: true,
      data: announcements,
      total: announcements.length,
      page: 1,
      limit
    });

  } catch (error) {
    console.error('Error fetching announcements:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch announcements',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
