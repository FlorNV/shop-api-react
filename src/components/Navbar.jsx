import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart3, BsListTask, BsHeadphones } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeLink = "text-black bg-indigo-400/10";
  const noActiveLink = "text-black hover:text-indigo-400";
  const link = " rounded-md px-2 py-1 font-semibold mt-2 lg:mt-0";

  return (
    <nav className="bg-white border-b-2 p-4">
      <div className="flex flex-wrap items-center space-x-4 lg:space-x-10">
        <div className="text-2xl font-bold text-indigo-400">
          <Link to="/">ShopApp</Link>
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 bg-indigo-400/10 rounded-md focus:outline-none focus:bg-indigo-400/20"
          />
        </div>
        <div
          className="lg:hidden cursor-pointer text-black hover:text-indigo-400"
          onClick={() => setOpen(!open)}
        >
          {!open ? <FaBars /> : <FaTimes />}
        </div>
        <div
          className={`w-full lg:flex lg:w-auto flex flex-col lg:flex-row lg:flex-[2] justify-between ${
            !open ? "hidden" : ""
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? activeLink : noActiveLink) + link
              }
            >
              <HiOutlineHome className="inline text-2xl align-top mr-4 lg:hidden" />
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                (isActive ? activeLink : noActiveLink) + link
              }
            >
              <BsListTask className="inline text-2xl align-top mr-4 lg:hidden" />
              Categories
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                (isActive ? activeLink : noActiveLink) + link
              }
            >
              <BsHeadphones className="inline text-2xl align-top mr-4 lg:hidden" />
              Help
            </NavLink>
          </div>
          <div className="flex flex-wrap items-center order-first lg:order-last">
            <p className="lg:hidden w-full text-sm mr-2 my-4 text-center text-black">
              <span className="font-bold">Welcome. </span>
              <span className="">
                Sign into your account to see your orders, favorites, etc.
              </span>
            </p>
            <NavLink
              to="/login"
              className="flex-auto text-center bg-indigo-400/10 font-semibold hover:bg-indigo-400/20 transition-colors duration-200 rounded-md 
              px-6 py-2 mr-4"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="flex-auto bg-indigo-400 text-center text-white font-semibold hover:bg-indigo-400/80 transition-colors duration-200 rounded-md px-6 py-2 mr-4"
            >
              Register
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                (isActive ? activeLink : noActiveLink) + " px-2 py-2 text-xl"
              }
            >
              <BsCart3 />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
