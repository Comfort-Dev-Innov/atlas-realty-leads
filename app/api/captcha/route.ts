import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
  const { token } = await request.json();
  console.log('SECRET_KEY', SECRET_KEY);
  console.log('token', token);

  const formData = `secret=${SECRET_KEY}&response=${token}`;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log('response', response.data);

    if (response.data?.success && response.data?.score > 0.5) {
      return NextResponse.json({
        success: true,
        message: 'Captcha verified',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Captcha verification failed',
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to verify captcha', success: false },
      { status: 500 }
    );
  }
}
