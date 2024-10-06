import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const options = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="our-menu">Our Menu</Link>
      </li>
      <li>
        <Link to="our-food/salad">Our Food</Link>
      </li>

      <li>
        <Link to="/dashboard/dashboard/user/home">Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black bg-opacity-50 text-white fixed z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="font-cinzel pl-4">
          <h1 className=" text-xl font-bold">BISTRO BOSS</h1>
          <p className="text-sm tracking-[4px] uppercase font-semibold">
            Restaurant
          </p>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-3 uppercase font-bold menu-horizontal pr-4">
            {options}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
