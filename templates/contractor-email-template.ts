//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ContractorEmailTemplate(contractor_data: any) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Welcome to Atlas Realty Leads - Contractor Partnership</title>
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
        background-color: #ffffff;
        border-bottom: 1px solid #e0e0e0;
      }

      .header-cell {
        padding: 40px 20px 20px;
        text-align: center;
      }

      .logo {
        max-width: 200px;
        height: auto;
        display: block;
        margin: 0 auto;
      }

      .content-table {
        width: 100%;
        background-color: #ffffff;
      }

      .content-cell {
        padding: 40px 30px;
        text-align: center;
      }

      .greeting {
        font-size: 18px;
        color: #333333;
        margin-bottom: 20px;
        text-align: center;
      }

      .contractor-name {
        color: #0066cc;
        font-weight: bold;
        font-style: italic;
      }

      .main-message {
        font-size: 16px;
        color: #333333;
        margin-bottom: 30px;
        line-height: 1.6;
        text-align: center;
      }

      .company-name {
        color: #0066cc;
        font-weight: bold;
      }

      .info-section {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 25px;
        margin: 25px 0;
      }

      .info-title {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 15px;
        text-align: center;
      }

      .info-table {
        width: 100%;
        margin-top: 15px;
      }

      .info-row {
        margin-bottom: 8px;
      }

      .info-label {
        font-weight: bold;
        font-size: 14px;
        color: #555555;
        width: 40%;
        padding: 4px 0;
        vertical-align: top;
      }

      .info-value {
        font-size: 14px;
        color: #555555;
        padding: 4px 0;
        text-align: right;
        vertical-align: top;
      }

      .next-steps-title {
        font-size: 24px;
        font-weight: bold;
        color: #0066cc;
        margin: 30px 0 20px;
        text-align: center;
      }

      .steps-table {
        width: 100%;
        margin: 20px 0;
      }

      .step-row {
        background-color: #f8f9fa;
        border-radius: 8px;
        margin-bottom: 20px;
      }

      .step-cell {
        padding: 15px;
        border-radius: 8px;
        background-color: #f8f9fa;
      }

      .step-icon-cell {
        width: 60px;
        text-align: center;
        vertical-align: top;
        padding-right: 15px;
      }

      .step-icon {
        width: 40px;
        height: 40px;
        background-color: #0066cc;
        border-radius: 50%;
        color: white;
        font-weight: bold;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        margin: 0 auto;
      }

      .step-content-cell {
        vertical-align: top;
      }

      .step-title {
        font-weight: bold;
        color: #333333;
        font-size: 16px;
        margin-bottom: 5px;
      }

      .step-description {
        color: #666666;
        font-size: 14px;
        line-height: 1.5;
      }

      .benefits-section {
        background-color: #e8f4ff;
        border-radius: 8px;
        padding: 25px;
        margin: 25px 0;
        border-left: 4px solid #0066cc;
      }

      .benefits-title {
        font-size: 18px;
        font-weight: bold;
        color: #0066cc;
        margin-bottom: 15px;
        text-align: center;
      }

      .benefit-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 14px;
        color: #333333;
      }

      .benefit-icon {
        color: #0066cc;
        font-weight: bold;
        margin-right: 10px;
        font-size: 16px;
      }

      .contact-button {
        display: inline-block;
        background-color: #0066cc;
        color: #ffffff !important;
        text-decoration: none;
        padding: 12px 30px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 16px;
        margin: 20px 0;
        text-align: center;
      }

      .footer-table {
        width: 100%;
        background-color: #f8f9fa;
      }

      .footer-cell {
        padding: 30px 20px;
        text-align: center;
        font-size: 12px;
        color: #666666;
      }

      .footer-link {
        color: #0066cc;
        text-decoration: none;
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
          padding: 30px 20px !important;
        }

        .header-cell {
          padding: 30px 15px 15px !important;
        }

        .info-section, .benefits-section {
          padding: 20px !important;
          margin: 20px 0 !important;
        }

        .info-label {
          width: 100% !important;
          display: block !important;
          margin-bottom: 2px !important;
          text-align: left;
        }

        .info-value {
          width: 100% !important;
          display: block !important;
          text-align: left !important;
          padding-left: 0 !important;
        }

        .step-icon-cell {
          width: 48px !important;
          text-align: center !important;
          padding-bottom: 10px !important;
          padding-right: 10px !important;
        }

        .step-content-cell {
          text-align: start !important;
        }

        .greeting {
          font-size: 16px !important;
        }

        .main-message {
          font-size: 15px !important;
        }

        .next-steps-title {
          font-size: 20px !important;
        }
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .email-container {
          background-color: #ffffff !important;
        }
        .content-table,
        .header-table,
        .footer-table {
          background-color: #ffffff !important;
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
                      <img
                        src="https://i.ibb.co/sJF50wjK/Img.png"
                        alt="Atlas Realty Leads Logo"
                        class="logo"
                      />
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
                      <!-- Greeting -->
                      <div class="greeting">
                        Welcome to the team,
                        <span class="contractor-name"
                          >${contractor_data.first_name}${
    contractor_data.middle_name ? ' ' + contractor_data.middle_name : ''
  } ${contractor_data.last_name}</span
                        >! 🔨
                      </div>

                      <!-- Main Message -->
                      <div class="main-message">
                        Thank you for joining
                        <span class="company-name">Atlas Realty Leads</span>
                        as a contractor partner!<br /><br />
                        We're excited to connect you with qualified homeowners
                        who need your expertise. Our platform specializes in
                        providing exclusive, pre-screened leads for home improvement
                        and repair services.
                      </div>

                      <!-- Contractor Information Summary -->
                      <div class="info-section">
                        <div class="info-title">
                          📋 Your Partnership Application
                        </div>
                        <table
                          role="presentation"
                          class="info-table"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <tr>
                            <td class="info-label">Business Name:</td>
                            <td class="info-value">
                              ${contractor_data.business_name || 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td class="info-label">Contact Person:</td>
                            <td class="info-value">
                              ${contractor_data.first_name}${
    contractor_data.middle_name ? ' ' + contractor_data.middle_name : ''
  } ${contractor_data.last_name}
                            </td>
                          </tr>
                          <tr>
                            <td class="info-label">Email Address:</td>
                            <td class="info-value">${contractor_data.email}</td>
                          </tr>
                          <tr>
                            <td class="info-label">Phone Number:</td>
                            <td class="info-value">
                              ${contractor_data.phone_number}
                            </td>
                          </tr>
                          <tr>
                            <td class="info-label">Primary ZIP Code:</td>
                            <td class="info-value">
                              ${contractor_data.zip_code || 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td class="info-label">Service Areas:</td>
                            <td class="info-value">
                              ${contractor_data.service_areas || 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td class="info-label">Services Offered:</td>
                            <td class="info-value">
                              ${contractor_data.services_offered || 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td class="info-label">Years in Business:</td>
                            <td class="info-value">
                              ${contractor_data.years_experience || 'N/A'}
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Partnership Benefits -->
                      <div class="benefits-section">
                        <div class="benefits-title">🎯 Your Partnership Benefits</div>
                        <div class="benefit-item">
                          <span class="benefit-icon">⚡</span>
                          <span>Exclusive leads - never shared with competitors</span>
                        </div>
                        <div class="benefit-item">
                          <span class="benefit-icon">✅</span>
                          <span>Pre-screened homeowners ready for projects</span>
                        </div>
                        <div class="benefit-item">
                          <span class="benefit-icon">💰</span>
                          <span>Pay per lead - no contracts or hidden fees</span>
                        </div>
                        <div class="benefit-item">
                          <span class="benefit-icon">🎛️</span>
                          <span>Full control - pause, scale, or cancel anytime</span>
                        </div>
                        <div class="benefit-item">
                          <span class="benefit-icon">🔄</span>
                          <span>Invalid leads replaced at no cost</span>
                        </div>
                      </div>

                      <!-- Next Steps -->
                      <div class="next-steps-title">What Happens Next</div>

                      <table
                        role="presentation"
                        class="steps-table"
                        cellpadding="0"
                        cellspacing="0"
                      >
                        <tr>
                          <td class="step-cell">
                            <table
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              style="width: 100%"
                            >
                              <tr>
                                <td class="step-icon-cell">
                                  <div class="step-icon">1</div>
                                </td>
                                <td class="step-content-cell">
                                  <div class="step-title">
                                    Application Review
                                  </div>
                                  <div class="step-description">
                                    Our team will review your application and verify
                                    your credentials and service areas.
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="height: 20px"></td>
                        </tr>
                        <tr>
                          <td class="step-cell">
                            <table
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              style="width: 100%"
                            >
                              <tr>
                                <td class="step-icon-cell">
                                  <div class="step-icon">2</div>
                                </td>
                                <td class="step-content-cell">
                                  <div class="step-title">
                                    Partnership Setup
                                  </div>
                                  <div class="step-description">
                                    We'll set up your contractor profile and configure
                                    your lead preferences and service areas.
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="height: 20px"></td>
                        </tr>
                        <tr>
                          <td class="step-cell">
                            <table
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              style="width: 100%"
                            >
                              <tr>
                                <td class="step-icon-cell">
                                  <div class="step-icon">3</div>
                                </td>
                                <td class="step-content-cell">
                                  <div class="step-title">
                                    Start Receiving Leads
                                  </div>
                                  <div class="step-description">
                                    Once approved, you'll start receiving qualified
                                    leads from homeowners in your service areas.
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Contact Button -->
                      <table
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        style="margin: 20px auto"
                      >
                        <tr>
                          <td style="text-align: center">
                            <a
                              href="mailto:contractors@atlasrealtyleads.com"
                              class="contact-button"
                              >Contact Our Team</a
                            >
                          </td>
                        </tr>
                      </table>

                      <div
                        style="
                          margin-top: 30px;
                          font-size: 14px;
                          color: #666666;
                          text-align: center;
                        "
                      >
                        Questions about your partnership? Our contractor support team
                        is here to help!
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
                      <div style="margin-bottom: 10px">
                        <a
                          href="${contractor_data.company_website}"
                          class="footer-link"
                          >${contractor_data.company_website}</a
                        >
                      </div>
                      <div>© 2025 Atlas Realty Leads. All rights reserved.</div>
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
