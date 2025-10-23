import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const GiftCardDonationForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [frontCard, setFrontCard] = useState(null);
  const [backCard, setBackCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setStatus({
          type: "error",
          message: "File size should be less than 5MB",
        });
        return;
      }

      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        setStatus({
          type: "error",
          message: "Please upload only image files (JPEG, PNG, GIF)",
        });
        return;
      }

      if (type === "front") {
        setFrontCard(file);
      } else {
        setBackCard(file);
      }
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Validate form
    if (!formData.name || !formData.email || !frontCard || !backCard) {
      setStatus({
        type: "error",
        message: "Please fill all fields and upload both card images",
      });
      setLoading(false);
      return;
    }

    try {
      // Convert files to base64
      const frontCardBase64 = await fileToBase64(frontCard);
      const backCardBase64 = await fileToBase64(backCard);

      // EmailJS configuration
      // IMPORTANT: Replace these with your actual EmailJS credentials
      const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
      const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
      const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "matchinggift1@gmail.com",
        message: `Gift card donation from ${formData.name}`,
        front_card: frontCardBase64,
        back_card: backCardBase64,
        front_card_name: frontCard.name,
        back_card_name: backCard.name,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: "success",
        message:
          "Thank you! Your gift card has been submitted successfully. We'll contact you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "" });
      setFrontCard(null);
      setBackCard(null);
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message:
          "Failed to submit your gift card. Please try again or contact us directly at matchinggift1@gmail.com",
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper function to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
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
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
            placeholder="jennagrey24@gmail.com"
            className="bg-gray-50 border-2 border-blue-100 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 font-body"
            required
          />
        </div>

        {/* Front Card Upload */}
        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700 font-body"
            htmlFor="front_input"
          >
            Upload front of card <span className="text-red-500">*</span>
          </label>
          <input
            className="block w-full text-sm text-gray-900 border-2 border-blue-100 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            id="front_input"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "front")}
            required
          />
          {frontCard && (
            <p className="mt-1 text-sm text-green-600 font-body">
              ✓ {frontCard.name}
            </p>
          )}
        </div>

        {/* Back Card Upload */}
        <div>
          <label
            className="block mb-2 text-sm font-semibold text-gray-700 font-body"
            htmlFor="back_input"
          >
            Upload back of card <span className="text-red-500">*</span>
          </label>
          <input
            className="block w-full text-sm text-gray-900 border-2 border-blue-100 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            id="back_input"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "back")}
            required
          />
          {backCard && (
            <p className="mt-1 text-sm text-green-600 font-body">
              ✓ {backCard.name}
            </p>
          )}
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
          Maximum file size: 5MB per image. Accepted formats: JPEG, PNG, GIF
        </p>
      </div>
    </form>
  );
};

export default GiftCardDonationForm;