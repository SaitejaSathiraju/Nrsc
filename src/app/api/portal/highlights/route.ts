import { NextRequest, NextResponse } from 'next/server';
import { getHighlights, getHighlightsByCategory } from '../../../lib/portalDatabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const featured = searchParams.get('featured') === 'true';
    const category = searchParams.get('category');

    let highlights;
    if (category) {
      highlights = await getHighlightsByCategory(category, limit);
    } else {
      highlights = await getHighlights(limit, featured);
    }

    return NextResponse.json({
      success: true,
      data: highlights,
      total: highlights.length,
      page: 1,
      limit
    });

  } catch (error) {
    console.error('Error fetching highlights:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch highlights',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
