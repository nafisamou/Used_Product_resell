import { Link } from "react-router-dom";
import { Button, InputGroup } from "reactstrap";
import React, { useContext } from "react";
import img from "../../../assets/resell.png";

import { ThemeContext, themes } from "../../../contexts/ThemeContext.js";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [darkMode, setDarkMode] = React.useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          aria-label="home"
          title="home"
          className="font-medium text-xl hover:bg-white hover:text-blue-700"
        >
          Home
        </Link>
      </li>

      <li>
        {" "}
        {user?.uid ? (
          <>
            <Link
              to="/dashboard"
              title="Dashboard"
              className="font-medium text-xl hover:bg-white hover:text-blue-900"
            >
              Dashboard
            </Link>

            <Link
              title="Logout"
              className="font-medium text-xl hover:bg-white hover:text-blue-700 "
              onClick={handleLogOut}
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              title="LogIn"
              className="font-medium text-xl hover:bg-white hover:text-blue-700"
            >
              Login
            </Link>
          </>
        )}
      </li>

      <li>
        <Link
          to="/blog"
          aria-label="Blog"
          title="Blog"
          className="font-medium text-xl hover:bg-white hover:text-blue-700"
        >
          Blog
        </Link>
      </li>
      <li>
        {" "}
        <Link className="font-medium text-xl hover:bg-white hover:text-blue-700">
          {user?.displayName}
        </Link>
      </li>
      <li>
        <InputGroup className="lg:block hidden hover:bg-white hover:border-none ">
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                className="bg-white border-none hover:bg-white"
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                <span className="d-lg-none  d-md-block">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" className="toggle " />
                    </label>
                  </div>
                </span>
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup>
      </li>
    </>
  );

  return (
    <div className=" mx-auto navbar flex justify-between bg-white shadow-lg">
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
            className="menu menu-compact dropdown-content mt-3 p-2 bg-white  rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <ul>
          {" "}
          <div className=" relative flex justify-center items-center mx-5">
            {" "}
         

            <Link
            to="/"
            aria-label="Mobile Dokan"
            title="Mobile Dokan"
            className="inline-flex items-center"
          >
            <img className="w-6 h-6 mr-1" src={img} alt="" />

            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Mobile Dokan
            </span>
          </Link>
          </div>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
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
