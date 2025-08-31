import { sendEmail } from '@/utils/EmailService';
import CustomerEmailTemplate from '@/templates/customer-email-template';
import AdminEmailTemplate from '@/templates/admin-email-template';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { customer_name, contact_email, customer_data } = await request.json();
  const customer_data_json = JSON.parse(customer_data);

  const emailTemplate = CustomerEmailTemplate({
    ...customer_data_json,
    company_website: process.env.COMPANY_WEBSITE || '',
  });

  const adminEmailTemplate = AdminEmailTemplate({
    ...customer_data_json,
    company_website: process.env.COMPANY_WEBSITE || '',
  });

  if (!customer_name || !contact_email || !customer_data_json) {
    return new Response(
      JSON.stringify({
        message: 'You have not filled out the form correctly',
        success: false,
      }),
      { status: 400 }
    );
  }

  console.log('customer data', customer_data_json);

  try {
    const email = await sendEmail(
      contact_email,
      'Thank you for inquiring about our services',
      '',
      emailTemplate
    );

    const adminEmail = await sendEmail(
      process.env.ADMIN_EMAIL || '',
      'New Customer Form Submission Received',
      '',
      adminEmailTemplate
    );

    console.log('Admin email result', adminEmail);
    if (adminEmail.accepted.length > 0) {
      console.log('Notified Admin of new customer form submission');
    } else {
      console.error(
        'Failed to notify Admin of new customer form submission',
        customer_name,
        contact_email,
        customer_data_json
      );
    }

    console.log('Customer email result', email);

    if (email.accepted.length > 0) {
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
