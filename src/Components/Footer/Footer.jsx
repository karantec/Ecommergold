import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>

      <footer className="text-gray-600 bg-[#E9F1ED] body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <img
              src="logo.png"
              alt="Hirapanna Jewellers"
              className="w-44 h-12 mx-auto md:mx-0"
            />
            <p className="mt-4 text-sm font-bold text-gray-500">
              Lorem Ipsum is simply dummy <br /> text of the printing.
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left flex flex-row  justify-between">
            <div className="w-1/2 md:w-1/4 px-4">
              <h2 className="title-font font-medium text-[#000000] text-sm mb-3">
                Contact Us
              </h2>
              <nav className="list-none">
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">Our Blogs</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Track Your Order
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Shipping & Return
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-1/2 md:w-1/4 px-4">
              <h2 className="title-font font-medium text-[#000000] text-sm mb-3">
                About Us
              </h2>
              <nav className="list-none">
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">FAQ</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Our Products
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-1/2 md:w-1/4 px-4">
              <h2 className="title-font font-medium text-[#000000] text-sm mb-3">
                Earning
              </h2>
              <nav className="list-none">
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">Pendent</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">Rings</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">Chain</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800">Bangals</a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-5 flex flex-wrap items-center justify-between">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2023 Hirapanna Jewellery Company Limited. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-4 flex-wrap">
              <img
                src="stripe.png"
                alt="Stripe"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
              <img
                src="american.png"
                alt="American Express"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
              <img
                src="paypal.jpg"
                alt="PayPal"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
              <img
                src="visa.png"
                alt="Visa"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
              <img
                src="applepy.png"
                alt="Apple Pay"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
