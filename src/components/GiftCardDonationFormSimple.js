import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

/**
 * Alternative Simple Form using Formspree
 * This is a simpler alternative that doesn't require EmailJS setup
 * 
 * To use this:
 * 1. Go to https://formspree.io/ and create a free account
 * 2. Create a new form and get your form endpoint
 * 3. Replace "YOUR_FORMSPREE_ENDPOINT" below with your actual endpoint
 * 4. Import this component instead of GiftCardDonationForm in Donate.js
 */

const GiftCardDonationFormSimple = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(e.target);

    try {
      // Replace with your Formspree endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your gift card has been submitted successfully. We'll contact you soon.",
        });
        e.target.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message:
          "Failed to submit your gift card. Please try again or contact us directly at matchinggift1@gmail.com",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-semibold text-gray-700 font-body"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jenna Grey"
            className="bg-gray-50 border-2 border-blue-100 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 font-body"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-gray-700 font-body"
          >
            Your email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jennagrey24@gmail.com"
            className="bg-gray-50 border-2 border-blue-100 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 font-body"
            required
          />
        </div>

        {/* Front Card Upload */}
        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700 font-body"
            htmlFor="front_card"
          >
            Upload front of card <span className="text-red-500">*</span>
          </label>
          <input
            className="block w-full text-sm text-gray-900 border-2 border-blue-100 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            id="front_card"
            name="front_card"
            type="file"
            accept="image/*"
            required
          />
        </div>

        {/* Back Card Upload */}
        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700 font-body"
            htmlFor="back_card"
          >
            Upload back of card <span className="text-red-500">*</span>
          </label>
          <input
            className="block w-full text-sm text-gray-900 border-2 border-blue-100 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            id="back_card"
            name="back_card"
            type="file"
            accept="image/*"
            required
          />
        </div>

        {/* Status Messages */}
        {status.message && (
          <div
            className={`p-4 rounded-lg flex items-center space-x-3 ${
              status.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {status.type === "success" ? (
              <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
            ) : (
              <FaExclamationCircle className="text-red-600 text-xl flex-shrink-0" />
            )}
            <p className="text-sm font-body">{status.message}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Gift Card"
          )}
        </button>

        {/* Help Text */}
        <p className="text-xs text-gray-500 font-body text-center">
          Maximum file size: 10MB per image. Accepted formats: JPEG, PNG, GIF
        </p>
      </div>
    </form>
  );
};

export default GiftCardDonationFormSimple;