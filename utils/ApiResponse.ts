import { NextResponse } from 'next/server';
interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
  status: number;
}

export const ApiResponse = ({
  success,
  message,
  status,
  data,
}: ApiResponse): NextResponse => {
  return NextResponse.json(
    {
      success,
      message,
      data,
      status,
    },
    {
      status,
    }
  );
};
