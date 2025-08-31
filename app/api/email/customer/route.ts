import { sendEmail } from '@/utils/EmailService';
import CustomerEmailTemplate from '@/templates/customer-email-template';
import AdminEmailTemplate from '@/templates/admin-email-template';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { customer_name, contact_email, customer_data } = await request.json();

  const emailTemplate = CustomerEmailTemplate(
    customer_data.submission_date,
    customer_data.first_name,
    customer_data.middle_name,
    customer_data.last_name,
    customer_data.email,
    customer_data.phone_number,
    customer_data.zip_code,
    customer_data.company_website
  );

  const adminEmailTemplate = AdminEmailTemplate(
    customer_data.submission_date,
    customer_data.first_name,
    customer_data.middle_name,
    customer_data.last_name,
    customer_data.email,
    customer_data.phone_number,
    customer_data.zip_code,
    customer_data.company_website
  );

  if (!customer_name || !contact_email || !customer_data) {
    return new Response(
      JSON.stringify({
        message: 'You have not filled out the form correctly',
        success: false,
      }),
      { status: 400 }
    );
  }

  try {
    const email = await sendEmail(
      emailTemplate,
      'Thank you for inquiring about our services',
      contact_email
    );

    const adminEmail = await sendEmail(
      adminEmailTemplate,
      'New Customer Form Submission Received',
      process.env.ADMIN_EMAIL || 'noreply.datagenie@gmail.com'
    );

    if (adminEmail.success) {
      console.log('Notified Admin of new customer form submission');
    } else {
      console.error(
        'Failed to notify Admin of new customer form submission',
        customer_name,
        contact_email,
        customer_data
      );
    }

    if (email.success) {
      return new Response(
        JSON.stringify({
          message: 'Email sent',
          success: true,
        }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          message: 'Failed to send email',
          error: email.error,
          success: false,
        }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: 'Failed to send email',
        error: error,
        success: false,
      }),
      { status: 500 }
    );
  }
}
