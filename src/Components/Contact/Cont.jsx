import React from "react";

function ContactUs() {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen bg-white p-6 space-x-10">
      {/* Left Section - Image */}
      {/* <div className=" ml-20  mt-4 order-last md:order-none  " style={{ height: "600px", width: "500px" }}>
        <img
          src="contactgold.png"
          alt="Contact Background"
          className="h-full w-full  object-cover rounded-lg shadow-lg"
        />
      </div> */}

      {/* Right Section - Form */}
      <div className="bg-white rounded-lg p-10 md:p-20 w-full md:w-auto">
  <div className="md:flex md:space-x-28 mb-6">
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <label className="block text-sm font-medium text-gray-700">First Name</label>
      <input
        type="email"
        className="mt-4 block w-full focus:outline-none border-b border-gray-500"
        style={{ borderBottomColor: "#8D8D8D" }}
      />
    </div>
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium text-gray-700">Last Name</label>
      <input
        type="text"
        className="mt-4 block w-full focus:outline-none border-b border-gray-500"
        placeholder="Deo"
        style={{ borderBottomColor: "#8D8D8D" }}
      />
    </div>
  </div>

  <div className="md:flex md:space-x-28 mb-6">
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        className="mt-4 block w-full focus:outline-none border-b border-gray-500"
        style={{ borderBottomColor: "#8D8D8D" }}
      />
    </div>
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
      <input
        type="tel"
        className="mt-4 block w-full focus:outline-none border-b border-gray-500"
        placeholder="+1 012 3456 789"
        style={{ borderBottomColor: "#8D8D8D" }}
      />
    </div>
  </div>

  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700">Select Subject?</label>
    <div className="flex flex-wrap space-x-4 mt-2">
      {/* Adjusted for spacing on smaller screens */}
      <label className="flex items-center mb-2">
        <input type="radio" name="subject" className="text-orange-500 focus:ring-orange-500" />
        <span className="ml-1">General Inquiry</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="radio" name="subject" className="text-orange-500 focus:ring-orange-500" />
        <span className="ml-1">General Inquiry</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="radio" name="subject" className="text-orange-500 focus:ring-orange-500" />
        <span className="ml-1">General Inquiry</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="radio" name="subject" className="text-orange-500 focus:ring-orange-500" />
        <span className="ml-1">General Inquiry</span>
      </label>
      {/* Add other radio buttons here, each with the same structure */}
    </div>
  </div>

  <div className="mb-8">
    <label className="block text-sm font-medium text-gray-700">Message</label>
    <textarea
      className="mt-2 block w-full focus:outline-none border-b border-gray-500"
      placeholder="Write your message.."
    ></textarea>
  </div>

  <div className="flex justify-end">
    <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition">
      Send Message
    </button>
  </div>
  
  <div className="flex justify-center mt-6">
    <img src="lettersend.png" alt="Send letter illustration" className="w-1/2 md:w-auto" />
  </div>
</div>
</div>
  );
}

export default ContactUs;
