
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import CategoryDetails from "../../Categories/CategoryDetails";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllUser from "../../Dashboard/AllUser/AllUser";
import ManageProducts from "../../Dashboard/ManageProducts/ManageProducts";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import Payment from "../../Dashboard/Payment/Payment";

import Home from "../../Home/Home/Home";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Advertisement from "../../Seller/Advertisement/Advertisement";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import SignUp from "../../SignUp/SignUp";
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
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allUser",
        element: (
       
            <AllUser></AllUser>
        
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
            <AddProduct></AddProduct>
          // <AdminRoute>
          // </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageProduct",
        element: (
            <ManageProducts></ManageProducts>
          // <AdminRoute>
          // </AdminRoute>
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
