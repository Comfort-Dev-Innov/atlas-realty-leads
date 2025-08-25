import { ApiResponse } from '@/utils/ApiResponse';

export async function GET() {
  return ApiResponse({
    message: 'Atlas Realty Leads, Site Active!',
    success: true,
    status: 200,
    data: {
      message: 'Atlas Realty Leads, Site Active!',
    },
  });
}
