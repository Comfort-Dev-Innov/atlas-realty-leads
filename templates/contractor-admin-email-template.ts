//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ContractorAdminEmailTemplate(contractor_data: any) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>New Contractor Partnership Application - Atlas Realty Leads</title>
    <style>
      /* Reset styles */
      body,
      table,
      td,
      p,
      a,
      li,
      blockquote {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        outline: none;
        text-decoration: none;
      }

      /* Base styles */
      body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: #f5f5f5;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #333333;
      }

      table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      .email-wrapper {
        width: 100%;
        background-color: #f5f5f5;
        padding: 20px 0;
      }

      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .header-table {
        width: 100%;
        background-color: #0066cc;
        color: white;
      }

      .header-cell {
        padding: 30px 20px;
        text-align: center;
      }

      .header-title {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
        color: white;
      }

      .header-subtitle {
        font-size: 14px;
        margin: 5px 0 0 0;
        color: #e6f3ff;
      }

      .content-table {
        width: 100%;
        background-color: #ffffff;
      }

      .content-cell {
        padding: 30px;
      }

      .alert-section {
        background-color: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 25px;
        text-align: center;
      }

      .alert-icon {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .alert-title {
        font-size: 18px;
        font-weight: bold;
        color: #856404;
        margin-bottom: 5px;
      }

      .alert-message {
        font-size: 14px;
        color: #856404;
      }

      .info-section {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        border-left: 4px solid #0066cc;
      }

      .info-title {
        font-size: 18px;
        font-weight: bold;
        color: #0066cc;
        margin-bottom: 15px;
      }

      .info-table {
        width: 100%;
        border-collapse: collapse;
      }

      .info-row {
        border-bottom: 1px solid #e9ecef;
      }

      .info-row:last-child {
        border-bottom: none;
      }

      .info-label {
        font-weight: bold;
        font-size: 14px;
        color: #495057;
        padding: 8px 12px 8px 0;
        width: 35%;
        vertical-align: top;
      }

      .info-value {
        font-size: 14px;
        color: #333333;
        padding: 8px 0;
        vertical-align: top;
        word-break: break-word;
      }

      .priority-high {
        background-color: #f8d7da;
        border-color: #f5c6cb;
        color: #721c24;
      }

      .priority-medium {
        background-color: #fff3cd;
        border-color: #ffeaa7;
        color: #856404;
      }

      .priority-low {
        background-color: #d1ecf1;
        border-color: #bee5eb;
        color: #0c5460;
      }

      .action-buttons {
        text-align: center;
        margin: 30px 0;
      }

      .action-button {
        display: inline-block;
        padding: 12px 24px;
        margin: 0 10px 10px 0;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;
      }

      .btn-approve {
        background-color: #28a745;
        color: white !important;
      }

      .btn-review {
        background-color: #ffc107;
        color: #212529 !important;
      }

      .btn-contact {
        background-color: #17a2b8;
        color: white !important;
      }

      .timestamp {
        font-size: 12px;
        color: #6c757d;
        text-align: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e9ecef;
      }

      .footer-table {
        width: 100%;
        background-color: #f8f9fa;
      }

      .footer-cell {
        padding: 20px;
        text-align: center;
        font-size: 12px;
        color: #666666;
      }

      /* Mobile styles */
      @media only screen and (max-width: 600px) {
        .email-wrapper {
          padding: 10px !important;
        }

        .email-container {
          border-radius: 8px !important;
          margin: 0 !important;
        }

        .content-cell {
          padding: 20px !important;
        }

        .header-cell {
          padding: 20px 15px !important;
        }

        .info-section {
          padding: 15px !important;
          margin: 15px 0 !important;
        }

        .info-label {
          width: 100% !important;
          display: block !important;
          margin-bottom: 5px !important;
          border-bottom: 1px solid #e9ecef !important;
          padding-bottom: 5px !important;
        }

        .info-value {
          width: 100% !important;
          display: block !important;
          padding-left: 0 !important;
          padding-top: 0 !important;
        }

        .action-button {
          display: block !important;
          margin: 10px 0 !important;
          text-align: center !important;
        }

        .header-title {
          font-size: 20px !important;
        }
      }
    </style>
  </head>
  <body>
    <table
      role="presentation"
      class="email-wrapper"
      cellpadding="0"
      cellspacing="0"
    >
      <tr>
        <td>
          <table
            role="presentation"
            class="email-container"
            cellpadding="0"
            cellspacing="0"
          >
            <!-- Header -->
            <tr>
              <td>
                <table
                  role="presentation"
                  class="header-table"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td class="header-cell">
                      <h1 class="header-title">🔨 New Contractor Application</h1>
                      <p class="header-subtitle">Atlas Realty Leads - Partner Network</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Main Content -->
            <tr>
              <td>
                <table
                  role="presentation"
                  class="content-table"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td class="content-cell">
                      <!-- Alert Section -->
                      <div class="alert-section priority-medium">
                        <div class="alert-icon">📋</div>
                        <div class="alert-title">New Contractor Partnership Application</div>
                        <div class="alert-message">
                          A new contractor has submitted an application to join your partner network.
                          Please review the details below and take appropriate action.
                        </div>
                      </div>

                      <!-- Contractor Information -->
                      <div class="info-section">
                        <div class="info-title">👤 Contractor Information</div>
                        <table role="presentation" class="info-table" cellpadding="0" cellspacing="0">
                          <tr class="info-row">
                            <td class="info-label">Business Name:</td>
                            <td class="info-value">${
                              contractor_data.business_name || 'Not provided'
                            }</td>
                          </tr>
                          <tr class="info-row">
                            <td class="info-label">Contact Person:</td>
                            <td class="info-value">
                              ${contractor_data.first_name}${
    contractor_data.middle_name ? ' ' + contractor_data.middle_name : ''
  } ${contractor_data.last_name}
                            </td>
                          </tr>
                          <tr class="info-row">
                            <td class="info-label">Email Address:</td>
                            <td class="info-value">
                              <a href="mailto:${
                                contractor_data.email
                              }" style="color: #0066cc;">${
    contractor_data.email
  }</a>
                            </td>
                          </tr>
                          <tr class="info-row">
                            <td class="info-label">Phone Number:</td>
                            <td class="info-value">
                              <a href="tel:${
                                contractor_data.phone_number
                              }" style="color: #0066cc;">${
    contractor_data.phone_number
  }</a>
                            </td>
                          </tr>
                          <tr class="info-row">
                            <td class="info-label">Years in Business:</td>
                            <td class="info-value">${
                              contractor_data.years_experience || 'Not provided'
                            }</td>
                          </tr>
                        </table>
                      </div>

                      <!-- Service Information -->
                      <div class="info-section">
                        <div class="info-title">🛠️ Service Information</div>
                        <table role="presentation" class="info-table" cellpadding="0" cellspacing="0">
                          <tr class="info-row">
                            <td class="info-label">Services Offered:</td>
                            <td class="info-value">${
                              contractor_data.services_offered || 'Not provided'
                            }</td>
                          </tr>
                          <tr class="info-row">
                            <td class="info-label">Primary ZIP Code:</td>
                            <td class="info-value">${
                              contractor_data.zip_code || 'Not provided'
                            }</td>
                          </tr>
                          <tr class="info-row">
                            <td class="info-label">Service Areas:</td>
                            <td class="info-value">${
                              contractor_data.service_areas || 'Not provided'
                            }</td>
                          </tr>
                        </table>
                      </div>


                      <!-- Additional Information -->
                      ${
                        contractor_data.additional_info
                          ? `
                      <div class="info-section">
                        <div class="info-title">📝 Additional Information</div>
                        <div style="padding: 10px 0; line-height: 1.6; color: #333333;">
                          ${contractor_data.additional_info}
                        </div>
                      </div>
                      `
                          : ''
                      }

                      <!-- Action Buttons -->
                      <div class="action-buttons">
                        <a href="mailto:${
                          contractor_data.email
                        }?subject=Atlas%20Realty%20Leads%20-%20Partnership%20Approved" 
                           class="action-button btn-approve">✅ Approve Partnership</a>
                        <a href="mailto:${
                          contractor_data.email
                        }?subject=Atlas%20Realty%20Leads%20-%20Application%20Under%20Review" 
                           class="action-button btn-review">📋 Request More Info</a>
                        <a href="tel:${contractor_data.phone_number}" 
                           class="action-button btn-contact">📞 Call Contractor</a>
                      </div>

                      <!-- Timestamp -->
                      <div class="timestamp">
                        Application received: ${new Date().toLocaleString(
                          'en-US',
                          {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZoneName: 'short',
                          }
                        )}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td>
                <table
                  role="presentation"
                  class="footer-table"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td class="footer-cell">
                      <div>Atlas Realty Leads - Admin Panel</div>
                      <div style="margin-top: 5px;">
                        <a href="${
                          contractor_data.company_website
                        }" style="color: #0066cc; text-decoration: none;">
                          ${contractor_data.company_website}
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}
