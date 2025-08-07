import { NextRequest, NextResponse } from 'next/server';
import { getHappenings, getHappeningsByType } from '../../../lib/portalDatabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const featured = searchParams.get('featured') === 'true';
    const newOnly = searchParams.get('new') === 'true';
    const type = searchParams.get('type');

    let happenings;
    if (type) {
      happenings = await getHappeningsByType(type, limit);
    } else {
      happenings = await getHappenings(limit, featured);
    }

    return NextResponse.json({
      success: true,
      data: happenings,
      total: happenings.length,
      page: 1,
      limit
    });

  } catch (error) {
    console.error('Error fetching happenings:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch happenings',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
