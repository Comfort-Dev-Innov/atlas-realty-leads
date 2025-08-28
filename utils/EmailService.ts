import nodemailer from 'nodemailer';

// Email configuration interface
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Email options interface
interface EmailOptions {
  emails: string | string[];
  subject: string;
  body?: string;
  html?: string;
}

// Email service class
class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = this.createTransporter();
  }

  /**
   * Create nodemailer transporter with environment configuration
   */
  private createTransporter(): nodemailer.Transporter {
    const config: EmailConfig = {
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '',
      },
    };

    // Validate required environment variables
    if (!config.auth.user || !config.auth.pass) {
      throw new Error(
        'Email configuration is incomplete. Please set EMAIL_USER and EMAIL_PASS environment variables.'
      );
    }

    return nodemailer.createTransport(config);
  }

  /**
   * Send email to one or multiple recipients
   * @param options - Email options containing recipients, subject, body, and html
   * @returns Promise with send result
   */
  async sendEmail(options: EmailOptions): Promise<nodemailer.SentMessageInfo> {
    try {
      // Validate input
      if (
        !options.emails ||
        (Array.isArray(options.emails) && options.emails.length === 0)
      ) {
        throw new Error('At least one email recipient is required');
      }

      if (!options.subject) {
        throw new Error('Email subject is required');
      }

      if (!options.body && !options.html) {
        throw new Error('Either body or html content is required');
      }

      // Convert emails to comma-separated string if array
      const recipients = Array.isArray(options.emails)
        ? options.emails.join(', ')
        : options.emails;

      // Prepare mail options
      const mailOptions: nodemailer.SendMailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME || 'Atlas Realty Leads'}" <${
          process.env.EMAIL_USER
        }>`,
        to: recipients,
        subject: options.subject,
        text: options.body,
        html: options.html,
      };

      // Send email
      const result = await this.transporter.sendMail(mailOptions);

      console.log('Email sent successfully:', result.messageId);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  /**
   * Verify email configuration and connection
   * @returns Promise<boolean> - true if connection is successful
   */
  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('Email server connection verified successfully');
      return true;
    } catch (error) {
      console.error('Email server connection failed:', error);
      return false;
    }
  }

  /**
   * Send bulk emails (useful for newsletters, notifications, etc.)
   * @param recipients - Array of email addresses
   * @param subject - Email subject
   * @param body - Plain text body (optional)
   * @param html - HTML body (optional)
   * @returns Promise with results array
   */
  async sendBulkEmails(
    recipients: string[],
    subject: string,
    body?: string,
    html?: string
  ): Promise<nodemailer.SentMessageInfo[]> {
    const results: nodemailer.SentMessageInfo[] = [];

    for (const email of recipients) {
      try {
        const result = await this.sendEmail({
          emails: email,
          subject,
          body,
          html,
        });
        results.push(result);
      } catch (error) {
        console.error(`Failed to send email to ${email}:`, error);
        // Continue with other emails even if one fails
      }
    }

    return results;
  }
}

// Create singleton instance
const emailService = new EmailService();

// Export the service instance and utility functions
export default emailService;

/**
 * Utility function to send email - simplified interface
 * @param emails - Single email or array of emails
 * @param subject - Email subject
 * @param body - Plain text body (optional)
 * @param html - HTML body (optional)
 * @returns Promise with send result
 */
export const sendEmail = async (
  emails: string | string[],
  subject: string,
  body?: string,
  html?: string
): Promise<nodemailer.SentMessageInfo> => {
  return emailService.sendEmail({ emails, subject, body, html });
};

/**
 * Utility function to verify email connection
 * @returns Promise<boolean>
 */
export const verifyEmailConnection = async (): Promise<boolean> => {
  return emailService.verifyConnection();
};

/**
 * Utility function to send bulk emails
 * @param recipients - Array of email addresses
 * @param subject - Email subject
 * @param body - Plain text body (optional)
 * @param html - HTML body (optional)
 * @returns Promise with results array
 */
export const sendBulkEmails = async (
  recipients: string[],
  subject: string,
  body?: string,
  html?: string
): Promise<nodemailer.SentMessageInfo[]> => {
  return emailService.sendBulkEmails(recipients, subject, body, html);
};

// Export types for external use
export type { EmailOptions, EmailConfig };
