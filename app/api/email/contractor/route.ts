import { sendEmail } from '@/utils/EmailService';
import ContractorEmailTemplate from '@/templates/contractor-admin-email-template';
import ContractorAdminEmailTemplate from '@/templates/contractor-admin-email-template';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { contractor_name, contact_email, contractor_data } =
    await request.json();
  const contractor_data_json = JSON.parse(contractor_data);

  const emailTemplate = ContractorEmailTemplate({
    ...contractor_data_json,
    company_website: process.env.COMPANY_WEBSITE || '',
  });

  const adminEmailTemplate = ContractorAdminEmailTemplate({
    ...contractor_data_json,
    company_website: process.env.COMPANY_WEBSITE || '',
  });

  if (!contractor_name || !contact_email || !contractor_data_json) {
    return new Response(
      JSON.stringify({
        message: 'You have not filled out the form correctly',
        success: false,
      }),
      { status: 400 }
    );
  }

  console.log('contractor data', contractor_data_json);

  try {
    const email = await sendEmail(
      contractor_data_json.email,
      'Welcome to Atlas Realty Leads - Contractor Partnership',
      '',
      emailTemplate
    );

    const adminEmail = await sendEmail(
      process.env.ADMIN_EMAIL || '',
      'New Contractor Partnership Application Received',
      '',
      adminEmailTemplate
    );

    console.log('Admin email result', adminEmail);
    if (adminEmail.accepted.length > 0) {
      console.log('Notified Admin of new contractor application');
    } else {
      console.error(
        'Failed to notify Admin of new contractor application',
        contractor_name,
        contact_email,
        contractor_data_json
      );
    }

    console.log('Contractor email result', email);

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
