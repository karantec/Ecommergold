import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection1 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg border-2 border-orange-400"
            alt="hero"
            src="About2.png"
          />
        </div>

        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
         
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          History of Noorani Company
           
          </h2>
          <p className="mb-8 leading-relaxed text-start">
          The Indian rupee is the official currency in the Republic of India. The rupee <br/>
           is The Indian rupee is the official currency in the Republic of India. The<br/>
            rupee is The Indian rupee is the official currency in the Republic of India. <br/>
            The rupee is The Indian rupee is the official currency in the Republic of India. <br/>
            The rupee is The Indian rupee is the official currency in the Republic of India.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
