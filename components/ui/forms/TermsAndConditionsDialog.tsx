'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/base/Dialog';
import { Button } from '@/components/ui/base/Button';
import { useTermsDialogStore } from '@/stores/termsDialogStore';
import { ChevronLeft, FileText } from 'lucide-react';

export function TermsAndConditionsDialog() {
  const { open, setOpen } = useTermsDialogStore();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="max-w-4xl max-h-[80vh] overflow-y-auto"
      >
        <DialogHeader>
          <div className="flex flex-row items-center">
            <button
              className="hover:cursor-pointer text-2xl text-primary hover:text-primary-2"
              onClick={() => setOpen(false)}
            >
              <ChevronLeft className="text-primary size-6 hover:text-gray-400 transition-all duration-300" />
            </button>
            <div className="flex items-center justify-center w-full">
              <FileText className="w-6 h-6 text-primary mr-2" />
              <DialogTitle className="text-xl font-bold text-center">
                Terms and Conditions
              </DialogTitle>
            </div>
          </div>
          <DialogDescription className="w-full text-center text-gray-600">
            Atlas Realty Leads - Terms of Service
          </DialogDescription>
        </DialogHeader>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <div className="mb-6 pb-4 border-b border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Effective Date:</strong> August 18th, 2025
            </p>
          </div>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h3>
            <p className="leading-relaxed">
              By accessing or using the Atlas Realty Leads website
              (https://atlasrealtyleads.com) and related services, you agree to
              be bound by these Terms and Conditions (&quot;Terms&quot;). If you
              do not agree, do not use this website or services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              2. Services
            </h3>
            <p className="leading-relaxed">
              Atlas Realty Leads (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;) provides screened, pay-per-lead real estate
              seller leads. Pricing is $65 per lead, with no setup fees and no
              contractual commitment—services may be paused, scaled, or canceled
              at any time.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              3. Lead Quality and Replacement
            </h3>
            <ul className="space-y-2 leading-relaxed">
              <li>
                • Leads are screened for motivation, intent, and contactability.
              </li>
              <li>
                • Invalid or unreachable leads will be replaced at no extra
                cost.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              4. Use of Services
            </h3>
            <p className="leading-relaxed mb-3">You agree to:</p>
            <ul className="space-y-2 leading-relaxed">
              <li>• Use leads only for lawful purposes.</li>
              <li>• Not redistribute or resell leads.</li>
              <li>
                • Protect any leads&apos; personal information in accordance
                with applicable data privacy laws.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              5. Payment Terms
            </h3>
            <ul className="space-y-2 leading-relaxed">
              <li>• You authorize billing of $65 for each lead obtained.</li>
              <li>
                • Payments are due upon receipt or as otherwise specified in the
                ordering process.
              </li>
              <li>
                • Failure to pay may result in suspension or termination of
                services.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              6. Intellectual Property
            </h3>
            <p className="leading-relaxed">
              All website content—including text, images, graphics, and
              trademarks—is owned by Atlas Realty Leads or its licensors. You
              may not copy, modify, republish, distribute, or use any content
              without our prior written consent.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              7. Disclaimer of Warranties
            </h3>
            <p className="leading-relaxed">
              Services are provided &quot;as is&quot; and &quot;as
              available,&quot; without warranties of any kind. We expressly
              disclaim all implied warranties, including those of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              8. Limitation of Liability
            </h3>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, Atlas Realty Leads and its
              affiliates are not liable for any direct, indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of the services. In no event shall our total liability exceed the
              total amount you have paid for leads in the prior 12 months.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              9. Indemnification
            </h3>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless Atlas Realty Leads and
              its personnel from any claims arising out of your misuse of our
              services, breach of these Terms, or violation of any law.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              10. Termination
            </h3>
            <p className="leading-relaxed">
              We may suspend or terminate access to the services at our sole
              discretion—without notice or liability—for any reason, including
              breach of these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              11. Governing Law and Dispute Resolution
            </h3>
            <p className="leading-relaxed">
              These Terms are governed by the laws of the State of California.
              Any disputes will be resolved in the state or federal courts
              located in Los Angeles County, California.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              12. Changes to Terms
            </h3>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. For
              material changes, we&apos;ll provide at least 30 days notice via
              email or on the website. Continued use after updates constitutes
              acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              13. Contact Information
            </h3>
            <p className="leading-relaxed mb-4">
              For questions or concerns regarding these Terms, contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="font-medium text-gray-900 w-20">Email:</span>
                  <a
                    href="mailto:support@atlasrealtyleads.com"
                    className="text-primary hover:text-primary-2 transition-colors"
                  >
                    support@atlasrealtyleads.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-medium text-gray-900 w-20">Phone:</span>
                  <a
                    href="tel:+17869475007"
                    className="text-primary hover:text-primary-2 transition-colors"
                  >
                    +1 786-947-5007
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 w-20">
                    Address:
                  </span>
                  <span className="text-gray-700 ml-4">
                    8605 Santa Monica Blvd #439235, West Hollywood, CA 90069
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
          <Button className="px-8 py-3" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
