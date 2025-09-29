'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/base/Dialog';
import { Button } from '@/components/ui/base/Button';
import { ChevronLeft, CheckCircle, Hammer } from 'lucide-react';
import { Input } from '@/components/ui/base/Input';
import { Spinner } from '@/components/ui/base/Spinner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useState } from 'react';

interface ContractorFormData {
  first_name: string;
  middle_name?: string;
  last_name: string;
  email: string;
  phone_number: string;
  business_name?: string;
  zip_code: string;
  service_areas?: string;
  services_offered?: string;
  years_experience?: string;
  business_address?: string;
  website?: string;
  desired_leads?: string;
  additional_info?: string;
  submission_date?: string;
}

interface ContractorFormDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ContractorFormDialog({
  open,
  setOpen,
}: ContractorFormDialogProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState<ContractorFormData>({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    business_name: '',
    zip_code: '',
    service_areas: '',
    services_offered: '',
    years_experience: '',
    business_address: '',
    website: '',
    desired_leads: '',
    additional_info: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const reset = () => {
    setFormData({
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      business_name: '',
      zip_code: '',
      service_areas: '',
      services_offered: '',
      years_experience: '',
      business_address: '',
      website: '',
      desired_leads: '',
      additional_info: '',
    });
    setIsLoading(false);
    setError(false);
    setSuccess(false);
    setErrorMessage('');
  };

  const onConfirm = async () => {
    setIsLoading(true);
    setError(false);
    setSuccess(false);
    setErrorMessage('');

    const submissionData = {
      ...formData,
      submission_date: new Date().toISOString(),
    };

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone_number ||
      !formData.zip_code
    ) {
      setIsLoading(false);
      setError(true);
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      if (!executeRecaptcha) {
        setIsLoading(false);
        setError(true);
        setErrorMessage('ReCAPTCHA not available. Please try again.');
        return;
      }

      const recaptchaToken = await executeRecaptcha('contractor_form_submit');

      const captchaResponse = await fetch('/api/captcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: recaptchaToken }),
      });

      const captchaResult = await captchaResponse.json();

      if (!captchaResult.success) {
        setIsLoading(false);
        setError(true);
        setErrorMessage('ReCAPTCHA verification failed. Please try again.');
        return;
      }

      const response = await fetch('/api/email/contractor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contractor_name: `${formData.first_name} ${formData.last_name}`,
          contact_email: formData.email,
          contractor_data: JSON.stringify(submissionData),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setError(false);
      } else {
        setError(true);
        setErrorMessage(
          result.message || 'Failed to submit application. Please try again.'
        );
      }
    } catch (error) {
      console.error('Error submitting contractor form:', error);
      setError(true);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const onClose = () => {
    setOpen(false);
    setTimeout(() => {
      reset();
    }, 300);
  };

  const updateFormData = (field: keyof ContractorFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (success) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              Application Submitted!
            </DialogTitle>
            <DialogDescription className="text-center py-4">
              Thank you for your interest in becoming a contractor partner!
              We&apos;ve received your application and will review it shortly.
              You should receive a confirmation email within the next few
              minutes.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Hammer className="h-5 w-5 text-blue-600" />
            Contractor Partnership Application
          </DialogTitle>
          <DialogDescription>
            Join our network of trusted contractors and start receiving
            exclusive leads. Fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <Input
                  value={formData.first_name}
                  onChange={(e) => updateFormData('first_name', e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <Input
                  value={formData.last_name}
                  onChange={(e) => updateFormData('last_name', e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <Input
                type="tel"
                value={formData.phone_number}
                onChange={(e) => updateFormData('phone_number', e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Business Information
            </h3>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Business Name
              </label>
              <Input
                value={formData.business_name || ''}
                onChange={(e) =>
                  updateFormData('business_name', e.target.value)
                }
                placeholder="Enter your business name"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Years in Business
              </label>
              <Input
                value={formData.years_experience || ''}
                onChange={(e) =>
                  updateFormData('years_experience', e.target.value)
                }
                placeholder="e.g., 5 years"
              />
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Service Information
            </h3>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Primary ZIP Code *
              </label>
              <Input
                value={formData.zip_code}
                onChange={(e) => updateFormData('zip_code', e.target.value)}
                placeholder="Enter your primary service ZIP code"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Service Areas
              </label>
              <Input
                value={formData.service_areas || ''}
                onChange={(e) =>
                  updateFormData('service_areas', e.target.value)
                }
                placeholder="e.g., Miami-Dade County, Broward County"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Services Offered
              </label>
              <Input
                value={formData.services_offered || ''}
                onChange={(e) =>
                  updateFormData('services_offered', e.target.value)
                }
                placeholder="e.g., Kitchen Remodeling, Bathroom Renovation, Flooring"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Additional Information (Optional)
            </h3>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Tell us more about your business
              </label>
              <textarea
                value={formData.additional_info || ''}
                onChange={(e) =>
                  updateFormData('additional_info', e.target.value)
                }
                placeholder="Share any additional information about your experience, specializations, or what makes your business unique..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-600 text-sm">{errorMessage}</p>
            </div>
          )}
        </div>

        <DialogFooter className="border-t py-4 bg-white w-full">
          <div className="flex justify-between w-full items-center">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex items-center gap-2 py-6"
            >
              <ChevronLeft className="h-4 w-4" />
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 py-6"
            >
              {isLoading && <Spinner />}
              Submit Application
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
