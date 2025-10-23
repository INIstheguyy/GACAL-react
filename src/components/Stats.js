import "../index.css";
import { stats } from "../const/Home";

const Stats = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 mb-4">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 font-body max-w-2xl mx-auto">
            Making a difference in children's lives, one step at a time
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id || index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Gradient Border Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div> */}

              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-md flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain"
                      src={stat.image}
                      alt={stat.p}
                    />
                  </div>
                </div>
              </div>

              {/* Stats Number */}
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-center mb-3 font-heading2">
                {stat.h2}
              </h3>

              {/* Stats Description */}
              <p className="text-gray-600 text-center text-base md:text-lg font-body leading-relaxed">
                {stat.p}
              </p>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;