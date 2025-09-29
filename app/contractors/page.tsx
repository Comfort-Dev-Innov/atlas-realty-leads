'use client';

import { CustomerFormDialog } from '@/components/ui/forms/CustomFormDialog';
import { TermsAndConditionsDialog } from '@/components/ui/forms/TermsAndConditionsDialog';
import { ContractorFormDialog } from '@/components/ui/forms/ContractorFormDialog';
import { usePageTransition } from '@/hooks/usePageTransition';
import ServicesContractor from '@/components/sections/contractors/Services';
import { useState } from 'react';

export default function Contractors() {
  const { navigateWithTransition } = usePageTransition();
  const [contractorFormOpen, setContractorFormOpen] = useState(false);

  return (
    <div className="bg-[#fdfdfd] overflow-x-hidden flex flex-col items-center justify-center min-h-screen pt-20">
      <CustomerFormDialog />
      <TermsAndConditionsDialog />
      <ContractorFormDialog
        open={contractorFormOpen}
        setOpen={setContractorFormOpen}
      />

      {/* Back Button */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigateWithTransition('/')}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Realtor&apos;s Home Page
        </button>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Atlas Realty Leads</span> for
            Contractors
          </h1>
          <p className="font-bold text-2xl text-gray-600 my-2 max-w-3xl mx-auto">
            Exclusive Home Service Leads. Real Homeowners. Real Projects.
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We don&apos;t just help realtors. We also connect contractors with
            motivated homeowners ready for home improvement projects.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-8 text-center">
          Why Contractors Work With Us
        </h2>
        <div className="space-y-8">
          {/* First row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Exclusive Leads
              </h3>
              <p className="text-gray-600">
                Never shared with multiple companies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pre-Screened Homeowners
              </h3>
              <p className="text-gray-600">
                We confirm interest before sending.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pay Per Lead
              </h3>
              <p className="text-gray-600">No contracts, no hidden fees.</p>
            </div>
          </div>
          {/* Second row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Full Control
              </h3>
              <p className="text-gray-600">Pause, scale, or cancel anytime.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lead Replacements
              </h3>
              <p className="text-gray-600">
                Invalid leads replaced at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesContractor />

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Get Contractor Leads Today
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join Atlas Realty Leads today and start receiving quality contractor
          leads from our network of real estate professionals.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => setContractorFormOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Become a Partner Contractor
          </button>
          <button
            onClick={() => navigateWithTransition('/')}
            className="bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </section>

      {/* Floating Back to Home Button */}
      <button
        onClick={() => navigateWithTransition('/')}
        className="hover:cursor-pointer hover:scale-105 fixed bottom-24 right-2 md:right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        aria-label="Back to Home"
      >
        <svg
          className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </button>
    </div>
  );
}
