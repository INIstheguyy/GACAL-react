import React, { useState } from 'react';
function ContactForm() {
    // Define state variables for form fields
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any necessary form submission logic here
    };
  
    return (
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700 font-body">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border-2 border-blue-100 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 font-body transition-all duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-2 text-sm font-semibold text-gray-700 font-body">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border-2 border-blue-100 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 font-body transition-all duration-200"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700 font-body">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border-2 border-blue-100 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 font-body transition-all duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700 font-body">
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-body transition-all duration-200"
            placeholder="Leave a comment..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </form>
    );
  }
  
  export default ContactForm;
  