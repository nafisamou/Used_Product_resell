
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import CategoryDetails from "../../Categories/CategoryDetails";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
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
import BuyerRoute from "../BuyerRoute.js/BuyerRoute";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
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
        loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
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
        path: "/dashboard",
        element:<BuyerRoute> <MyOrders></MyOrders></BuyerRoute>,
      },
      {
        path: "/dashboard/allUser",
        element: (
       
            
            // <AdminRoute></AdminRoute>
            <AllUser></AllUser>
        
        ),
      },
      {
        path: "/dashboard/reports",
        element: (
       
            
            <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
        
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          
         <SellerRoute><AddProduct></AddProduct> </SellerRoute>
        ),
      },
      {
        path: "/dashboard/manageProducts",
        element: (
         
          //  <SellerRoute> </SellerRoute>
           <ManageProducts></ManageProducts>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/bookings/${params.id}`
          ),
        element: <Payment></Payment>,
      },
    ],
  }, 
]);

export default router;
