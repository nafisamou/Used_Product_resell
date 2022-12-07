import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hook/useAdmin/useAdmin";

import useBuyer from "../../hook/useBuyer/useBuyer";
import useSeller from "../../hook/useSeller/useSeller";

import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile my-10 ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side   text-black">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            
             {isSeller && ( 
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myOrders">My Orders</Link>
                </li>

                <li>
                  <Link to="/dashboard/manageProducts">My Product</Link>
                </li>
               
              </>
             )} 
            {isBuyer && (<> 
              <li>
                  <Link to="/dashboard/myOrders">My Orders</Link>
                </li>
             
             </>)} 
             <li>
                  <Link to="/dashboard/wishlist">Wishlist</Link>
                </li>
             {isAdmin && (
             <>
              <li>
                <Link to="/dashboard/allUser">All User</Link>
              </li>
              <li>
                <Link to="/dashboard/allSeller">All Seller</Link>
              </li>
              <li>
                <Link to="/dashboard/allBuyer">All Buyer</Link>
              </li>
             
             </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
