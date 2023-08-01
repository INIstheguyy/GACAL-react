import "../index.css"
import { Hero, Donates } from "../const/Donate";
import { AiOutlineCopy } from 'react-icons/ai';
import { useState } from "react";
import Welcome from "../components/Welcome";

const Donate = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const address = document.getElementById('disabled-input').value;
  
    if (navigator.clipboard) {
      // For modern browsers that support Clipboard API
      navigator.clipboard
        .writeText(address)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 5000);
        })
        .catch((error) => {
          console.error('Failed to copy to clipboard using Clipboard API:', error);
          fallbackCopyToClipboard(address);
        });
    } else {
      // Fallback for iOS and other devices
      fallbackCopyToClipboard(address);
    }
  };
  
  const fallbackCopyToClipboard = (address) => {
    const el = document.createElement('textarea');
    el.value = address;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    const range = document.createRange();
    range.selectNodeContents(el);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, 999999);
    document.execCommand('copy');
    document.body.removeChild(el);
  
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  
    return ( 
        <section>
            <div className="">
              <div>
                  <Welcome
                      imageUrl={Hero.image}
                      text={Hero.text.h2}
                  />
              </div>
                <div className="py-4">
                    <p className="text-justify font-heading3 max-w-[90vw] lg:max-w-[70vw] mx-auto leading-6 py-4  lg:leading-8 tracking-widest text-gray-600">{Hero.para2}</p>
                </div>
                <div className="">
                    {Donates.map((donate) => (
                        <div className="">
                            <p className="text-center text-lg font-semibold md:text-2xl font-heading1">{donate.title}</p>
                            <div className="max-w-[90vw] lg:max-w-[70vw] mx-auto">
                                {donate.outline.map((outline) => (
                                    <div className="shadow-lg p-4 my-4 rounded-lg text-gray-600 font-heading3">
                                        <h2 className="py-3 text-gray-800">{outline.h2}</h2>
                                        <p className="text-gray-500 text-justify px-2">{outline.p}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                <p className="text-center text-lg font-semibold md:text-2xl font-heading1">You can make your donations by:</p>
                <div className="md:flex justify-around">
                <div className="px-3 shadow-lg m-5 option1 rounded-lg">
                  <h4 className="font-head-5 py-1 font-semibold md:text-xl">Option 1</h4>
                  <p className="font-paragraph py-1 text-gray-500 text-sm md:text-base">
                    Make a transfer to our BTC wallet address below or scan the QR code below
                  </p>
                    <div>
                    <input
                      type="text"
                      id="disabled-input"
                      aria-label="disabled input"
                      className="copyAddress mb-6 bg-gray-50 border border-gray-300 border-double text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-9/12 md:w-10/12 p-2.5 cursor-not-allowed"
                      value="1DmUBDX3SYNVVceBasUoH9eKxqgAHbdkNw"
                      disabled
                    />
                    <button
                      type="button"
                      className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none "
                      onClick={copyToClipboard}
                    >
                      <AiOutlineCopy />
                    </button>
                    {copied && <p className="popUp p-5 italic font-semibold font-paragraph!">Copied to clipboard</p>}
                  </div>
                  <div className="flex justify-center pb-8">
                    <img className="w-48" src="/images/QR-code.jpg" alt="" />
                  </div>
                </div>
                <div className="px-3 shadow-lg m-5 rounded-lg">
                  <h4 className="font-head-5 py-1 font-semibold md:text-xl">Option 2</h4>
                  <p className="font-paragraph py-1 text-gray-600 text-sm md:text-base">
                    Gift our children with game cards of your choice
                  </p>
                  <div>
                    <div className="py-5 text-gray-500">
                      <h3 className="text-xl text-center">Upload your gift card</h3>
                      <h5>Upload a picture of your gift card with your device</h5>
                    </div>
                    <div>
                      <form action="mailto:matchinggift1@gmail.com" method="POST">
                        <div className="mb-6">
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Jenna Grey"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                            Your email
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="jennagrey24@gmail.com"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="front_input">
                            Upload front of card
                          </label>
                          <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none "
                            id="front_input"
                            type="file"
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="back_input">
                            Upload back of card
                          </label>
                          <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                            id="back_input"
                            type="file"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
        </section>
     );
}
 
export default Donate;