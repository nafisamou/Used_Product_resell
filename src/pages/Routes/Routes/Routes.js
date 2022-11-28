import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import CategoryDetails from "../../Categories/CategoryDetails";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Dashboard/AllSeller/AllSeller";
import AllUser from "../../Dashboard/AllUser/AllUser";
import ManageProducts from "../../Dashboard/ManageProducts/ManageProducts";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import Payment from "../../Dashboard/Payment/Payment";
import ReportedItems from "../../Dashboard/ReportedItems/ReportedItems";

import Home from "../../Home/Home/Home";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Advertisement from "../../Seller/Advertisement/Advertisement";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";


import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/advertisement",
        element: <Advertisement></Advertisement>,
      },

      {
        path: "/categories/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(
            `https://e-commerce-server-gamma.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
   
       <PrivateRoute>
          <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allUser",
        element: (
       
           <AdminRoute> <AllUser></AllUser></AdminRoute>
        ),
      },
      {
        path: "/dashboard/allSeller",
        element: (
       
           <AdminRoute> <AllSeller></AllSeller></AdminRoute>
        ),
      },
      {
        path: "/dashboard/allBuyer",
        element: (
       
           <AdminRoute> <AllBuyer></AllBuyer></AdminRoute>
        ),
      },
      {
        path: "/dashboard/reports",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
     
          <AddProduct></AddProduct>
     
        ),
      },
      {
        path: "/dashboard/manageProducts",
        element: (
          <ManageProducts></ManageProducts>
          
        
      
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(
            `https://e-commerce-server-gamma.vercel.app/bookings/${params.id}`
          ),
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
