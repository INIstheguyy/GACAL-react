import "../index.css";
import { Hero, contactUs } from "../const/Contact";
import ContactForm from "../components/ComtatForm";
import Welcome from "../components/Welcome";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div>
        <Welcome imageUrl={Hero.image} text={Hero.text.h2} />
      </div>

      {/* Contact Content Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 mb-4">
                {contactUs.h2}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-6"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 font-heading2 mb-8">
                {contactUs.h5}
              </h3>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Information */}
              <div className="space-y-8">
                {/* Info Cards */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body mb-6">
                    {contactUs.p1}
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
                    {contactUs.p2}
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                        <HiMail className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 font-body">
                          Email
                        </h4>
                        <p className="text-lg font-semibold text-gray-900 font-heading2">
                          info@getachildalife.org
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                        <HiPhone className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 font-body">
                          Phone
                        </h4>
                        <p className="text-lg font-semibold text-gray-900 font-heading2">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                        <HiLocationMarker className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 font-body">
                          Location
                        </h4>
                        <p className="text-lg font-semibold text-gray-900 font-heading2">
                          Groveland, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl">
                  <h4 className="text-xl font-bold font-heading2 mb-3">
                    Emergency Hotline
                  </h4>
                  <p className="text-sm font-body mb-2 text-blue-100">
                    National Child Abuse Hotline
                  </p>
                  <p className="text-2xl font-bold font-heading2">
                    1-800-4-A-CHILD
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 font-heading1 mb-6">
                  Send us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;