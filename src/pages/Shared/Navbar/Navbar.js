import { Link, NavLink } from "react-router-dom";
import { Button, InputGroup } from "reactstrap";
import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";

import { ThemeContext, themes } from "../../../contexts/ThemeContext.js";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [darkMode, setDarkMode] = React.useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink
          to="/"
          aria-label="home"
          title="home"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-xl"
          }
        >
          Home
        </NavLink>
      </li>
      <li>{/* <Link to="/advertisement">Advertisement</Link> */}</li>

      <li>
        {" "}
        {user?.uid ? (
          <>
            <Link to="/advertisement"title="Advertisement" className="font-medium text-xl">Advertisement</Link>
            <Link to="/addProducts" title="Add Products" className="font-medium text-xl">Add Products</Link>
            <li className="lg:font-medium lg:text-[17px] lg:block hidden mt-3">{user?.displayName}</li>
            <Link
              title="Logout"
              className="btn btn-link font-medium
       "
              onClick={handleLogOut}
            >
              <span className="lg:my-4 lg:font-medium"> Log Out</span>
            </Link>
          </>
        ) : (
          <>
            <span className="">
              <Link
                to="/login"
                title="LogIn"
                className=" lg:font-medium btn btn-link"
              >
                Login
              </Link>
            </span>
          </>
        )}
      </li>

      <li>
        <Link
          to="/blog"
          aria-label="Blog"
          title="Blog"
          className="lg:font-medium lg:text-xl"
        >
          Blog
        </Link>
      </li>
      <li>
        <InputGroup className="lg:block hidden">
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                <span className="d-lg-none d-md-block">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                      />
                    </label>
                  </div>
                </span>
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <ul>
          {" "}
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Resale
          </Link>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
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
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
