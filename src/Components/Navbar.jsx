import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {

 const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2 transition-all  duration-10 ${
            isActive
              ? " border-b-2 border-[#c67033]"
              : ""
          }`
        }
        to="/"
      >
        {" "}
        <div className="flex items-center gap-1">
          {" "}
          <IoHomeOutline />
          Home{" "}
        </div>{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2  transition-all  duration-10 ${
            isActive
              ? " border-b-2 border-[#c67033]"
              : ""
          }`
        }
        to="/about"
      >
        {" "}
        <div className="flex items-center gap-1">
          <RiServiceLine />About{" "}
        </div>{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2  transition-all  duration-10 ${
            isActive
              ? " border-b-2 border-[#c67033]"
              : ""
          }`
        }
        to="/services"
      >
        {" "}
        <div className="flex items-center gap-1">
          <RiServiceLine />Services{" "}
        </div>{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2  transition-all  duration-10 ${
            isActive
              ? " border-b-2 border-[#c67033]"
              : ""
          }`
        }
        to="/study-destinations"
      >
        {" "}
        <div className="flex items-center gap-1">
          <RiServiceLine />Study Destinations{" "}
        </div>{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2  transition-all  duration-10 ${
            isActive
              ? " border-b-2 border-[#c67033]"
              : ""
          }`
        }
        to="/contact"
      >
        {" "}
        <div className="flex items-center gap-1">
          <RiServiceLine />Contact{" "}
        </div>{" "}
      </NavLink>
    </>
  );


  return (
    <div className="shadow-sm bg-base-100 sticky z-50">
      <div className="navbar md:px-20">
        
        {/* Left Section */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 shadow z-[999]"
            >
              {link}
            </ul>
          </div>

          {/* Logo */}
          <a className="text-xl">
            <img className="w-32 md:w-40" src="/NSEC Logo.png" alt="logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  xl:pl-90 space-x-1">
            {link}
          </ul>
        </div>

        {/* Right Button */}
        <div className="navbar-end">
          <a className="btn btn-sm md:btn-md bg-[#323db8] text-white">
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
