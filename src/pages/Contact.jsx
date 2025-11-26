import { FiMail, FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PiMapPinLight } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";

export default function Contact() {
  return (
    <div className="w-full">
      {/* Top Gradient Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Ready to start your study abroad journey? Contact our expert counselors
          for personalized guidance and support.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20 py-14 bg-base-200">

        {/* Phone */}
        <div className="card bg-base-100 shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-blue-100 p-4">
              <FiPhone className="text-blue-600 text-3xl" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-gray-600">+880 1865821580</p>
        </div>

        {/* Email */}
        <div className="card bg-base-100 shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-green-100 p-4">
              <HiOutlineMail className="text-green-600 text-3xl" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-gray-600">nsecglobal@gmail.com</p>
        </div>

        {/* Address */}
        <div className="card bg-base-100 shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-purple-100 p-4">
              <PiMapPinLight className="text-purple-600 text-3xl" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-1">Address</h3>
          <p className="text-gray-600">
            4 Chowdhury Para, DIT Rd Dhaka 1219, Bangladesh
          </p>
        </div>

        {/* Working Hours */}
        <div className="card bg-base-100 shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-orange-100 p-4">
              <LuClock3 className="text-orange-600 text-3xl" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
          <p className="text-gray-600">Sat - Thu: 10:00 AM - 6:30 PM</p>
        </div>
      </div>


    <div className="w-full px-6 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE – FORM */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our counselors will get back to you within 24 hours.
          </p>

          <form className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="font-medium">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Phone + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium">Phone Number *</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="font-medium">Preferred Country *</label>
                <select className="select select-bordered w-full">
                  <option disabled selected>Select a country</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="font-medium">Message</label>
              <textarea
                className="textarea textarea-bordered w-full h-32"
                placeholder="Tell us about your study abroad goals..."
                maxLength={500}
              ></textarea>
              <p className="text-gray-400 text-sm">0/500 characters</p>
            </div>

            {/* Button */}
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white w-full">
              Send Message ✈
            </button>
          </form>
        </div>

        {/* RIGHT SIDE – MAP + OFFICES */}
        <div>

          {/* MAP */}
          <div className="w-full h-78 rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.199984700589!2d90.4164045!3d23.7563503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29f0a50632380783%3A0xacead44da94f5e6b!2sNSEC%20Global!5e0!3m2!1sen!2sus!4v1732380000000"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* OFFICE LIST */}
          <div className="mt-6 space-y-6 ">

            {/* Dhaka Office */}
            <div className="bg-base-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3">Dhaka Office</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex gap-2 items-start">
                  <PiMapPinLight className="text-xl" />
                  4 Chowdhury Para, DIT Rd Dhaka 1219, Bangladesh
                </p>
                <p className="flex gap-2 items-center">
                  <FiPhone /> +880 1865821580
                </p>
                <p className="flex gap-2 items-center">
                  <FiMail /> nsecglobal@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}
