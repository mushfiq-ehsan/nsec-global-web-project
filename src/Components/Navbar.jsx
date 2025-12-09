import React, { useState, useEffect } from "react";
import { GrWorkshop } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LuPlane } from "react-icons/lu";
import { MdPermContactCalendar } from "react-icons/md";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Nav item component
  const navItem = (to, icon, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md transition 
        hover:bg-gray-200
        ${isActive ? "border-b-2 border-[#9b1a1a] text-[#9b1a1a]" : ""}`
      }
    >
      {icon} {label}
    </NavLink>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md backdrop-blur-lg bg-opacity-90">
      <div className="navbar md:px-20">

        {/* LEFT SECTION */}
        <div className="navbar-start relative">

          {/* Mobile menu button */}
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile dropdown */}
          {open && (
            <div className="absolute top-12 left-0 bg-base-100 w-60 rounded-xl shadow-lg p-3 z-[999]">
              {navItem("/", <IoHomeOutline />, "Home")}
              {navItem("/about", <IoMdPeople />, "About")}
              {navItem("/services", <GrWorkshop />, "Services")}
              {navItem("/study-destinations", <LuPlane />, "Destinations")}
              {navItem("/contact", <MdPermContactCalendar />, "Contact Us")}
            </div>
          )}

          {/* Logo */}
          <a>
            <img className="w-32 md:w-40" src="/NSEC Logo.png" alt="logo" />
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-4">
            {navItem("/", <IoHomeOutline />, "Home")}
            {navItem("/about", <IoMdPeople />, "About")}
            {navItem("/services", <GrWorkshop />, "Services")}
            {navItem("/study-destinations", <LuPlane />, "Destinations")}
            {navItem("/contact", <MdPermContactCalendar />, "Contact Us")}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <div className="navbar-end">
          <button className="btn btn-sm md:btn-md bg-[#9b1a1a] hover:bg-[#7f1515] text-white rounded-md">
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
