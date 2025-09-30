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
            <span className="text-blue-600">Atlas Leads</span> for Contractors
          </h1>
          <p className="font-bold text-2xl text-gray-600 my-2 max-w-3xl mx-auto">
            Exclusive Home Service Leads. Real Homeowners. Real Projects.
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We don&apos;t just help realtors. We also connect contractors with
            motivated homeowners ready for home improvement projects.
          </p>

          <button
            onClick={() => setContractorFormOpen(true)}
            className="cursor-pointer bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Become a Partner Contractor
          </button>
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

      {/* How It Works Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ⚙️ How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Pick Your Service Areas
            </h3>
            <p className="text-gray-600">Pick your service area ZIP codes.</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              We Connect With Homeowners
            </h3>
            <p className="text-gray-600">
              Our team connects with homeowners needing your services.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Receive Exclusive Leads
            </h3>
            <p className="text-gray-600">
              You receive real-time, exclusive leads by text & email.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">4</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Stay In Control
            </h3>
            <p className="text-gray-600">
              You&apos;re in control: pause, scale, or adjust anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            🎯 Simple, Fair Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No surprises, no contracts, no hassle. Just straightforward pricing
            that grows with your business.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative p-8 md:p-12 text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-3xl">💰</span>
              </div>

              <h3 className="text-3xl font-bold mb-4">Pay-Per-Lead Pricing</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Only pay when we deliver qualified leads to your business.
                Pricing varies by service type and project complexity.
              </p>
              {/* 
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-2xl mb-2">🏠</div>
                  <h4 className="font-semibold mb-2">Home Repairs</h4>
                  <p className="text-blue-100 text-sm">$25-$50 per lead</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-2xl mb-2">🔨</div>
                  <h4 className="font-semibold mb-2">Renovations</h4>
                  <p className="text-blue-100 text-sm">$50-$100 per lead</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-2xl mb-2">🏗️</div>
                  <h4 className="font-semibold mb-2">Major Projects</h4>
                  <p className="text-blue-100 text-sm">$100-$200 per lead</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Feature Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Zero Risk */}
          <div className="group hover:scale-105 transition-all duration-300 min-h-[300px]">
            <div className="h-full bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🛡️ Zero Risk Guarantee
              </h3>
              <p className="text-gray-600 mb-4">
                Invalid or low-quality leads? We&apos;ll replace them absolutely
                free. No questions asked.
              </p>
              <div className="inline-flex items-center text-green-600 font-semibold">
                <span className="mr-2">✅</span>
                100% Lead Quality Promise
              </div>
            </div>
          </div>

          {/* Flexibility */}
          <div className="group hover:scale-105 transition-all duration-300 min-h-[300px]">
            <div className="h-full bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎛️ Total Control
              </h3>
              <p className="text-gray-600 mb-4">
                Scale up, pause, or stop anytime. No contracts, no cancellation
                fees, no commitments.
              </p>
              <div className="inline-flex items-center text-purple-600 font-semibold">
                <span className="mr-2">⚡</span>
                Instant Changes Anytime
              </div>
            </div>
          </div>

          {/* Transparent Pricing */}
          <div className="group hover:scale-105 transition-all duration-300 min-h-[300px] ">
            <div className="h-full bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🔍 Crystal Clear Pricing
              </h3>
              <p className="text-gray-600 mb-4">
                Know exactly what you&apos;ll pay before you get each lead. No
                hidden fees, no surprises.
              </p>
              <div className="inline-flex items-center text-orange-600 font-semibold">
                <span className="mr-2">💎</span>
                Transparent & Fair Always
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-6 py-3 border border-blue-200">
            <span className="text-2xl mr-3">🚀</span>
            <span className="text-blue-800 font-semibold">
              Ready to grow your business? Start getting leads today!
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Get Contractor Leads Today
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join Atlas Realty Leads today and start receiving quality contractor
          leads from our network of real estate professionals.
        </p>
        <div className="space-x-4 space-y-4">
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
