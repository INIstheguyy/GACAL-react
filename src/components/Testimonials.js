import React, { useState } from "react";
import { testimonials } from "../const/Home";
import { ChevronLeft, ChevronRight } from "react-feather";
import { FaQuoteLeft } from "react-icons/fa";

export default function Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 mb-4">
            Stories of Hope
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 font-body max-w-2xl mx-auto">
            Hear from those whose lives we've touched
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>

            <div className="flex items-center justify-between p-6 md:p-8 lg:p-12">
              {/* Previous Button */}
              <button
                onClick={previousSlide}
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Testimonial Content */}
              <div className="flex-1 px-4 md:px-8 lg:px-12">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                    <FaQuoteLeft className="text-blue-600 text-2xl" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="mb-8">
                  <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-center font-body">
                    "{testimonials[currentSlide].p}"
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 font-heading2 mb-2">
                    {testimonials[currentSlide].h5}
                  </h4>
                  {testimonials[currentSlide].position && (
                    <p className="text-gray-500 font-body">
                      {testimonials[currentSlide].position}
                    </p>
                  )}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-gradient-to-r from-blue-600 to-blue-800 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}