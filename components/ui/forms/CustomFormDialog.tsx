'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/base/Dialog';
import { Button } from '@/components/ui/base/Button';
import { useFormDialogStore } from '@/stores/formDialogStore';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/base/Input';
import { Spinner } from '@/components/ui/base/Spinner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export function CustomerFormDialog() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    open,
    setOpen,
    data,
    setFormData,
    isLoading,
    setIsLoading,
    error,
    setError,
    success,
    setSuccess,
    errorMessage,
    setErrorMessage,
    reset,
  } = useFormDialogStore();

  const onConfirm = async () => {
    setIsLoading(true);
    setError(false);
    setSuccess(false);
    setErrorMessage('');

    if (
      !data.first_name ||
      !data.last_name ||
      !data.email ||
      !data.phone_number ||
      !data.zip_code
    ) {
      setIsLoading(false);
      setError(true);
      setSuccess(false);
      setErrorMessage('Please fill out all fields.');
      return;
    }
    try {
      const token = await executeRecaptcha?.('customerForm');
      console.log('Recaptcha response:', token);

      const captcha_response = await fetch('/api/captcha', {
        method: 'POST',
        body: JSON.stringify({
          token: token,
        }),
      });

      const captcha_data = await captcha_response.json();

      if (captcha_data.success) {
        const email_response = await fetch('/api/email/customer', {
          method: 'POST',
          body: JSON.stringify({
            customer_name: `${data.first_name} ${data.middle_name} ${data.last_name}`,
            contact_email: data.email,
            customer_data: JSON.stringify(data),
          }),
        });

        if (email_response.ok) {
          setIsLoading(false);
          setSuccess(true);
          setErrorMessage('');
          setError(false);
        } else {
          setIsLoading(false);
          setError(true);
          setSuccess(false);
          setErrorMessage(
            (await email_response.json()).message ||
              'Something went wrong. Please try again.'
          );
        }
      } else {
        setIsLoading(false);
        setError(true);
        setSuccess(false);
        setErrorMessage(
          errorMessage || 'Captcha verification failed. Please try again.'
        );
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong. Please try again.');
      setIsLoading(false);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <Recaptcha onVerify={'customerform'} /> */}
      <DialogContent showCloseButton={false} disableOutsideClick={true}>
        <DialogHeader>
          <div className="flex flex-row items-center">
            {!isLoading && !error && !success && (
              <button
                className=" hover:cursor-pointer text-2xl text-primary hover:text-primary-2"
                onClick={() => setOpen(false)}
              >
                <ChevronLeft className="text-primary size-6 hover:text-gray-400 transition-all duration-300" />
              </button>
            )}
            <DialogTitle className="w-full text-lg font-bold text-center">
              {isLoading ? 'Loading...' : 'Customer Form'}
            </DialogTitle>
          </div>
          {!isLoading && !error && !success ? (
            <>
              <DialogDescription className="w-full text-center">
                Great! Let us get to know you first!
              </DialogDescription>
            </>
          ) : null}
        </DialogHeader>

        {/* Form */}
        {isLoading && (
          <div className="flex flex-col items-center">
            <Spinner />
          </div>
        )}
        {!isLoading && !error && !success && (
          <div className="flex flex-col items-center">
            <Input
              value={data.first_name}
              onChange={(e) =>
                setFormData({ ...data, first_name: e.target.value })
              }
              type="text"
              placeholder="First Name"
              required
            />
            <Input
              value={data.middle_name}
              onChange={(e) =>
                setFormData({ ...data, middle_name: e.target.value })
              }
              type="text"
              placeholder="Middle Name (Optional)"
            />
            <Input
              value={data.last_name}
              onChange={(e) =>
                setFormData({ ...data, last_name: e.target.value })
              }
              type="text"
              placeholder="Last Name"
              required
            />
            <Input
              value={data.zip_code}
              onChange={(e) =>
                setFormData({ ...data, zip_code: e.target.value })
              }
              type="text"
              placeholder="Zip Code"
              required
            />
            <Input
              value={data.email}
              onChange={(e) =>
                setFormData({ ...data, email: e.target.value.trim() })
              }
              type="text"
              placeholder="Email"
              required
            />
            <Input
              value={data.phone_number}
              onChange={(e) =>
                setFormData({ ...data, phone_number: e.target.value })
              }
              type="text"
              placeholder="Phone Number"
              required
            />

            <p className="text-xs text-text-secondary text-center mt-8">
              By submitting you agree to the{' '}
              <a href={process.env.NEXT_PUBLIC_TERMS_AND_CONDITIONS_URL}>
                <span className="text-primary hover:text-primary-2">
                  Terms and Conditions of Atlas Realty Leads.
                </span>
              </a>
            </p>
            <Button
              className="mt-8 w-1/4 p-5 justify-self-center"
              onClick={onConfirm}
            >
              Confirm
            </Button>
          </div>
        )}

        {!isLoading && error && (
          <div className="flex flex-col items-center">
            <p className="text-text-primary text-center">{errorMessage}</p>

            <Button
              className="mt-8 w-1/4 p-5 justify-self-center"
              onClick={() => {
                setError(false);
                setSuccess(false);
                setErrorMessage('');
              }}
            >
              Try Again
            </Button>
          </div>
        )}

        {!isLoading && success && !error && (
          <div className="flex flex-col items-center">
            <CheckCircle
              className="text-green-600 text-center text-lg font-bold"
              size={80}
            />
            <p className="text-green-600 text-center text-lg font-bold">
              Success!
            </p>

            <p className="text-text-primary text-center text-sm">
              Our representative will contact you via the contact provided. A
              copy of your response will be sent via email
            </p>

            <Button
              className="mt-8 w-1/4 p-5 justify-self-center"
              onClick={() => {
                setOpen(false);
                reset();
              }}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
