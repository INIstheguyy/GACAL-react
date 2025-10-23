import "../index.css";
import { Hero } from "../const/About";
import { Link } from "react-router-dom";
import { values } from "../const/About";
import { reasons } from "../const/About";
import Welcome from "../components/Welcome";

const About = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div>
        <Welcome imageUrl={Hero.images} text={Hero.text.h2} />
      </div>

      {/* Mission Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 mb-6">
              {Hero.para1}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-body mb-10">
              {Hero.para2}
            </p>
            <Link to="/donate">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {values.map((value, index) => (
            <div key={value.id || index}>
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading1 mb-6">
                  Our Values
                </h2>
                <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-heading2 mb-8">
                  {value.title}
                </h3>
              </div>

              {/* Image */}
              <div className="flex justify-center mb-12">
                <div className="relative max-w-3xl">
                  <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-3"></div>
                  <img
                    className="relative rounded-3xl shadow-2xl object-cover w-full"
                    src={value.image}
                    alt="Our Values"
                  />
                </div>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {value.outlines.map((outline, idx) => (
                  <div
                    key={outline.id || idx}
                    className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold font-heading2">
                      {outline.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reasons Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 text-center mb-12">
                  {reason.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-12"></div>

                <div className="space-y-8">
                  {reason.outline.map((outline, idx) => (
                    <div
                      key={outline.id || idx}
                      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {outline.id}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-heading2 flex-1">
                          {outline.h5}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body pl-14">
                        {outline.p}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;