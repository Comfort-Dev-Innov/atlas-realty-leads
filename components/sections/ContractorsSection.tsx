'use client';
import { usePageTransition } from '@/hooks/usePageTransition';

const ContractorsSection = () => {
  const { navigateWithTransition } = usePageTransition();

  const contractorBenefits = [
    {
      icon: '🏠',
      title: 'Home Renovations',
      description: 'Kitchen & bathroom remodels',
    },
    {
      icon: '🔧',
      title: 'Repairs & Maintenance',
      description: 'Plumbing, electrical, HVAC',
    },
    {
      icon: '🎨',
      title: 'Aesthetic Improvements',
      description: 'Painting, flooring, landscaping',
    },
    {
      icon: '⚡',
      title: 'Quick Turnaround',
      description: 'Fast project connections',
    },
  ];

  return (
    <>
      {/* Enhanced Contractor Section */}
      <section className="w-full relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-xy"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-indigo-200 rounded-full opacity-35 animate-pulse delay-700"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            {/* Main Headline with Animation */}
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                Contractors Welcome! 🔨
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8 animate-width-expand"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              We also provide{' '}
              <span className="font-semibold text-blue-600">
                high-quality leads
              </span>{' '}
              for
              <span className="font-semibold text-purple-600">
                {' '}
                Home Service Contractors.
              </span>{' '}
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contractorBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            {/* <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-xl animate-fade-in-up delay-500">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                    500+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Active Contractors
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                    $2M+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Projects Connected
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                    98%
                  </div>
                  <div className="text-gray-600 font-medium">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </div> */}

            {/* CTA Button with Enhanced Design */}
            <div className="relative">
              <button
                onClick={() => navigateWithTransition('/contractors')}
                className="group cursor-pointer relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden animate-fade-in-up delay-700"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Shimmer Effect */}
                <div className=" absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <span className="relative z-10 flex items-center">
                  <span className="mr-3 text-2xl group-hover:animate-bounce">
                    🚀
                  </span>
                  Join Our Contractor Network
                  <svg
                    className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>

              {/* Floating particles around button */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-ping delay-500"></div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70 animate-fade-in-up delay-1000">
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">
                  Free replacements for invalid leads{' '}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Flat rate per lead</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes width-expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-width-expand {
          animation: width-expand 1.2s ease-out 0.5s forwards;
          width: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
};

export default ContractorsSection;
