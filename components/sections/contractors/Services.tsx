'use client';
import React from 'react';

export default function ServicesContractor() {
  return (
    <>
      {/* Services Section */}
      <section className="w-full bg-blue-800 py-16 rounded-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Who We Help</h2>
            <p className="text-xl text-white">
              We generate exclusive leads for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Roofing Contractors',
              'Solar Installers',
              'HVAC Companies',
              'Pest Control',
              'Fencing',
              'Remodeling & Renovation',
              'Windows & Doors',
              'Decks & Outdoor Projects',
              'Pressure Washing',
              '…and more!',
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
