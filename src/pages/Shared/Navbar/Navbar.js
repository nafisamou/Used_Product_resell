import { Link, NavLink } from "react-router-dom";
import { Button, InputGroup } from "reactstrap";
import React, { useContext } from "react";
import img from '../../../assets/resell.png'

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
      

      <li>
        {" "}
        {user?.uid ? (
          <>
           
            <Link to="/dashboard"title="Dashboard" className="font-medium text-xl">Dashboard</Link>
          
            
            <span className="lg:font-medium lg:block hidden mt-4  lg:text-xl">{user?.displayName}</span>
            <Link
              title="Logout"
              className=" font-medium text-xl
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
                className=" lg:font-medium text-xl "
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
         <div className="flex justify-center items-center"> <Link to="/" title="Mobile Dokan" className="btn btn-ghost normal-case text-xl ">
           <span><img className="w-6 h-6 mx-3" src={img} alt="" /></span> <span>Mobile Dokan</span>
          </Link></div>
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
