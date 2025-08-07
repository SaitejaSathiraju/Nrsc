import { NextRequest, NextResponse } from 'next/server';
import { getDisasters, getDisastersByType } from '../../../lib/portalDatabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const active = searchParams.get('active') === 'true';
    const type = searchParams.get('type');

    let disasters;
    if (type) {
      disasters = await getDisastersByType(type, limit);
    } else {
      disasters = await getDisasters(limit, active);
    }

    return NextResponse.json({
      success: true,
      data: disasters,
      total: disasters.length,
      page: 1,
      limit
    });

  } catch (error) {
    console.error('Error fetching disasters:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch disasters',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
