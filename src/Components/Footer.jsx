import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
         <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <img className='w-40' src="/public/NSEC Logo 2.png" alt="" />
          <p className="mt-3 text-sm leading-6 text-gray-200">
            Building futures, not just applications.  
            Your trusted partner for international education and career success.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaWhatsapp className="hover:text-gray-300 cursor-pointer" />
            
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Study Destinations</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">University Selection</li>
            <li className="hover:text-white cursor-pointer">Visa Assistance</li>
            <li className="hover:text-white cursor-pointer">Documentation Support</li>
            <li className="hover:text-white cursor-pointer">Career Planning</li>
            <li className="hover:text-white cursor-pointer">Scholarship Guidance</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-2">
              <IoLocationSharp className="text-lg mt-1" />
              <span>
                4 Chowdhury Para, DIT Rd  
                Dhaka 1219, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />+880 1865821580
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> nsecglobal@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 mt-10 pt-4 flex justify-between text-xs text-gray-300 max-w-7xl mx-auto">
        <p>© 2025 NSEC Global. All rights reserved.</p>
        <p>Powered by Readify</p>
      </div>
    </footer>
    );
};

export default Footer;