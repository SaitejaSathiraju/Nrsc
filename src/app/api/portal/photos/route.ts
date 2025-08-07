import { NextRequest, NextResponse } from 'next/server';
import { getPhotos, getPhotosByCategory } from '../../../lib/portalDatabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const featured = searchParams.get('featured') === 'true';
    const category = searchParams.get('category');

    let photos;
    if (category) {
      photos = await getPhotosByCategory(category, limit);
    } else {
      photos = await getPhotos(limit, featured);
    }

    return NextResponse.json({
      success: true,
      data: photos,
      total: photos.length,
      page: 1,
      limit
    });

  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch photos',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
