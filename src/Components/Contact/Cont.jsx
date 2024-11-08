import React from "react";

function ContactUs() {
  return (
    <div className="flex  min-h-screen bg-white p-6 space-x-10">
      {/* Left Section - Image */}
      <div className="ml-20 mt-4" style={{ height: "700px", width: "550px" }}>
        <img
          src="contactgold.png"
          alt="Contact Background"
          className="h-full w-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Form */}
      <div className="bg-white rounded-lg p-20" style={{ width: "" }}>
        <div className="flex space-x-24 mb-6">
        <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="email"
              className="mt-4 block w-full focus:outline-none border-b border-gray-500 underline-offset-8"
  
  style={{ borderBottomColor: '#8D8D8D' }}
            />
          </div>
          <div className="w-1/2 ml-10">
            <label className="block  text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="mt-4 block w-full focus:outline-none border-b border-gray-500 underline-offset-8"
  placeholder="Deo"
  style={{ borderBottomColor: '#8D8D8D' }}
            />
          </div>
        </div>
        <div className="flex space-x-24 mb-6">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-4 block w-full focus:outline-none border-b border-gray-500 underline-offset-8"
         
            style={{ borderBottomColor: '#8D8D8D' }}
            />
          </div>

          <div className="w-1/2 ">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-4 block w-full focus:outline-none border-b border-gray-500 underline-offset-8"
              placeholder="+1 012 3456 789"
              style={{ borderBottomColor: '#8D8D8D' }}
            />
          </div>
        </div>
        <div className="mb-6"  style={{  width: "36rem" }}>
          <label className="block text-sm font-medium text-gray-700">
            Select Subject?
          </label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-1">General Inquiry</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="text-orange-500 ml-4 focus:ring-orange-500"
              />
              <span className="ml-1">General Enquiry</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-1">General Enquiry</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-1">General Enquiry</span>
            </label>
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            className="mt-2 block w-full focus:outline-none border-b border-gray-500 underline-offset-8"
            placeholder="Write your message.."
            
          ></textarea>
        </div>
        <div className="flex justify-end">
  <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition">
    Send Message
  </button>
  
</div>
<img src="lettersend.png" className="ml-36"/>
      </div>
    </div>
  );
}

export default ContactUs;
