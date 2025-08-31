//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AdminEmailTemplate(customer_data: any) {
  return `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>New Customer Form Submission - Atlas Realty Leads</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
        line-height: 1.6;
      }

      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }

      .header {
        background: linear-gradient(135deg, #8cabff 0%, #092987 100%);
        padding: 30px 20px;
        text-align: center;
        color: white;
      }

      .logo-container {
        margin-bottom: 15px;
      }

      .header img {
        width: 60px;
        height: 60px;
        border-radius: 12px;
        background: white;
        padding: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .header-title {
        font-size: 24px;
        font-weight: bold;
        margin: 15px 0 5px;
        color: white;
      }

      .header-subtitle {
        font-size: 14px;
        opacity: 0.9;
        color: white;
      }

      .content {
        padding: 40px 30px;
        text-align: center;
      }

      .notification-badge {
        display: inline-block;
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(238, 90, 36, 0.3);
      }

      .timestamp {
        font-size: 18px;
        color: #333333;
        margin-bottom: 30px;
        font-weight: 600;
      }

      .customer-highlight {
        color: #667eea;
        font-weight: bold;
      }

      .info-section {
        background: linear-gradient(135deg, #f8f9ff 0%, #f0f4f8 100%);
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 30px;
        margin: 30px 0;
        text-align: left;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }

      .info-title {
        font-size: 18px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }

      .info-icon {
        font-size: 20px;
      }

      .info-item {
        font-size: 15px;
        color: #444444;
        margin: 12px 0;
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #e8eef3;
      }

      .info-item:last-child {
        border-bottom: none;
      }

      .info-label {
        font-weight: 600;
        min-width: 150px;
        color: #2c3e50;
      }

      .info-value {
        flex: 1;
        text-align: right;
        color: #34495e;
        font-weight: 500;
      }

      .action-required {
        background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
        border-radius: 12px;
        padding: 20px;
        margin: 25px 0;
        text-align: center;
        border: 2px solid #ff6b9d;
      }

      .action-title {
        font-size: 16px;
        font-weight: bold;
        color: #c44569;
        margin-bottom: 8px;
      }

      .action-description {
        font-size: 14px;
        color: #000000;
        font-style: italic;
      }

      .footer {
        background-color: #f8f9fa;
        padding: 30px 20px;
        text-align: center;
        font-size: 12px;
        color: #666666;
      }

      .footer-link {
        color: #0066cc;
        text-decoration: none;
      }

      /* Mobile responsive */
      @media only screen and (max-width: 600px) {
        .email-container {
          margin: 10px;
          border-radius: 8px;
        }

        .content {
          padding: 30px 20px;
        }

        .info-item {
          flex-direction: column;
        }

        .info-value {
          text-align: left;
          margin-top: 2px;
        }

        .step {
          flex-direction: column;
          text-align: center;
        }

        .step-icon {
          margin: 0 auto 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header -->
      <div class="header">
        <div class="logo-container">
          <img
            src="https://i.ibb.co/sJF50wjK/Img.png"
            alt="Data Genie Logo"
            class="logo"
          />
        </div>
        <div class="header-title">Atlas Realty Leads</div>
        <div class="header-subtitle">Admin Notification System</div>
      </div>

      <!-- Main Content -->
      <div class="content">
        <!-- Notification Badge -->
        <div class="notification-badge">🔔 New Submission Alert</div>

        <!-- Timestamp -->
        <div class="timestamp">
          New Customer Form Submission Received at ${(() => {
            try {
              const date = customer_data.submission_date
                ? new Date(customer_data.submission_date)
                : new Date();
              return isNaN(date.getTime())
                ? new Date().toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                  })
                : date.toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                  });
            } catch (error) {
              console.error(error);
              return new Date().toLocaleString('en-US', {
                timeZone: 'America/New_York',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              });
            }
          })()}
        </div>

        <!-- Quick Summary -->
        <div style="font-size: 16px; color: #555; margin-bottom: 20px; line-height: 1.5;">
          A new customer inquiry has been submitted by 
          <span class="customer-highlight">${customer_data.first_name} ${
    customer_data.last_name
  }</span>. 
          Please review the details below and follow up accordingly.
        </div>

        <!-- Customer Information Summary -->
        <div class="info-section">
          <div class="info-title">
            <span class="info-icon">📋</span>
            Customer Submission Details
          </div>
          <div class="info-item">
            <span class="info-label">First Name:</span>
            <span class="info-value">${customer_data.first_name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Middle Name:</span>
            <span class="info-value">${customer_data.middle_name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Last Name:</span>
            <span class="info-value">${customer_data.last_name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Email Address:</span>
            <span class="info-value">${customer_data.email}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Phone Number:</span>
            <span class="info-value">${customer_data.phone_number}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Target Zip Code:</span>
            <span class="info-value">${customer_data.zip_code}</span>
          </div>
        </div>

        <!-- Action Required -->
        <div class="action-required">
          <div class="action-title">⚡ Action Required</div>
          <div class="action-description">
            Please review this submission and follow up with the customer within 24-48 hours.
          </div>
        </div>

        <div style="margin-top: 20px; font-size: 14px; color: #666666; font-style: italic;">
          This is an automated notification from your Atlas Realty Leads system.
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <div style="margin-bottom: 10px">
          <a href="${customer_data.company_website}" class="footer-link"
            >${customer_data.company_website}</a
          >
        </div>
        <div>© 2025 Atlas Realty Leads. All rights reserved.</div>
      </div>
    </div>
  </body>
</html>

  `;
}
