import "../index.css";
import { Hero, Donates } from "../const/Donate";
import { AiOutlineCopy } from "react-icons/ai";
import { FaBitcoin, FaGift } from "react-icons/fa";
import { useState } from "react";
import Welcome from "../components/Welcome";
import GiftCardDonationForm from "../components/GiftCardDonationForm";
import btcImage from "../assets/images/new-btc.jpg";

const Donate = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const address = document.getElementById("disabled-input").value;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 5000);
        })
        .catch((error) => {
          console.error("Failed to copy to clipboard using Clipboard API:", error);
          fallbackCopyToClipboard(address);
        });
    } else {
      fallbackCopyToClipboard(address);
    }
  };

  const fallbackCopyToClipboard = (address) => {
    const el = document.createElement("textarea");
    el.value = address;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    const range = document.createRange();
    range.selectNodeContents(el);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(el);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div>
        <Welcome imageUrl={Hero.image} text={Hero.text.h2} />
      </div>

      {/* Introduction */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-body">
              {Hero.para2}
            </p>
          </div>
        </div>
      </div>

      {/* Donation Uses Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {Donates.map((donate, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 text-center mb-12">
                {donate.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {donate.outline.map((outline, idx) => (
                  <div
                    key={outline.id || idx}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-heading2 mb-4">
                      {outline.h2}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
                      {outline.p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Methods Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading1 text-center mb-12">
              You can make your donations by:
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Option 1 - Bitcoin */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <FaBitcoin className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-heading2">
                      Option 1
                    </h3>
                    <p className="text-sm text-gray-500 font-body">
                      Cryptocurrency Donation
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 font-body mb-6">
                  Make a transfer to our BTC wallet address below or scan the QR code
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-body">
                    Bitcoin Wallet Address
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      id="disabled-input"
                      aria-label="Bitcoin address"
                      className="flex-1 bg-white border-2 border-blue-200 text-gray-700 text-sm rounded-lg px-4 py-3 font-mono focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value="bc1qfs8x8v33arcg324j00v2ujddznumrhfm3c2p43"
                      disabled
                    />
                    <button
                      type="button"
                      className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-300 focus:outline-none shadow-lg hover:shadow-xl"
                      onClick={copyToClipboard}
                    >
                      <AiOutlineCopy size={20} />
                    </button>
                  </div>
                  {copied && (
                    <p className="mt-3 text-green-600 font-semibold text-sm font-body animate-fadeIn">
                      ✓ Copied to clipboard!
                    </p>
                  )}
                </div>

                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <img
                      className="w-48 h-48 object-contain"
                      src={btcImage}
                      alt="Bitcoin QR Code"
                    />
                  </div>
                </div>
              </div>

              {/* Option 2 - Gift Cards */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <FaGift className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-heading2">
                      Option 2
                    </h3>
                    <p className="text-sm text-gray-500 font-body">
                      Gift Card Donation
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 font-body mb-6">
                  Gift our children with game cards of your choice
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 font-heading2 text-center mb-2">
                    Upload your gift card
                  </h4>
                  <p className="text-sm text-gray-600 font-body text-center">
                    Upload a picture of your gift card with your device
                  </p>
                </div>

                <GiftCardDonationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;