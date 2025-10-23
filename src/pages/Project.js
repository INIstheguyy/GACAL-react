import "../index.css";
import { Hero, Projects } from "../const/Project";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
import { FaDollarSign, FaHandHoldingHeart } from "react-icons/fa";

const Project = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div>
        <Welcome imageUrl={Hero.image} text={Hero.text.h2} />
      </div>

      {/* Introduction Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-body">
              {Hero.para1}
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {Projects.map((project, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mb-6">
                  <FaHandHoldingHeart className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 mb-6">
                  {project.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {project.outline.map((outline, idx) => (
                  <div
                    key={outline.id || idx}
                    className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaDollarSign className="text-white text-xl" />
                    </div>

                    {/* Content */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
                      {outline.p}
                    </p>

                    {/* Decorative Bottom Line */}
                    <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading1 mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 font-body mb-8 italic">
              You're welcome to send your donations
            </p>
            <Link to="/donate">
              <button className="px-8 py-4 bg-white text-blue-700 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;