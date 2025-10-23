import "../index.css";
import { Hero } from "../const/Home";
import Stats from "../components/Stats";
import { sponsors } from "../const/Home";
import Welcome from "../components/Welcome";
import Example from "../components/Testimonials";

const Home = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div>
        <Welcome
          imageUrl={Hero.images}
          text={Hero.text.h2}
          text2={Hero.text.p}
        />
      </div>

      {/* Mission Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 mb-6">
              {Hero.para1}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-body">
              {Hero.para2}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Example />

      {/* Sponsors Section */}
      <div className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
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
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading1 mb-4">
              Our Major Sponsors
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-white/90 font-body max-w-2xl mx-auto">
              Grateful for the generous support of our partners
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.id || index}
                className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                {/* Sponsor Name */}
                <h5 className="text-lg md:text-xl font-bold text-gray-900  font-heading2 text-center group-hover:text-white group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                  {sponsor.name}
                </h5>

                {/* Decorative Element */}
                <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div>
        <Welcome imageUrl={Hero.images2} text={Hero.text.h5} />
      </div>
    </section>
  );
};

export default Home;