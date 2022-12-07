import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyCart = ({ booking }) => {
  const { user } = useContext(AuthContext);
  const { brand, img, phone, location, price, Buyer } = booking;
  const handleWishList = (booking) => {
    const dbWishlist = { ...booking };
    dbWishlist.email = user?.email;
    dbWishlist.color = "red";
    delete dbWishlist._id;

    fetch(`https://e-commerce-server-gamma.vercel.app/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dbWishlist),
    })
      .then((res) => res.json())
      .then((result) => {
        // setFill(true);
        toast.success(
          `Your Product ${brand} is successfully added to your favorite list`
        );
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className=" px-6 py-4 rounded bg-gray-100 shadow-lg">
      <ul className="flex flex-col divide-y divide-gray-800">
        <li className="flex flex-col py-6 sm:flex-row  sm:justify-between my-2">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
              src={img}
              alt="Polaroid camera"
            />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    {brand}
                  </h3>
                  <p className="text-sm dark:text-gray-400">{Buyer}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">{price} $</p>
                  <p className="text-sm line-through dark:text-gray-600">
                    30000 $
                  </p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
               
                <button
                  onClick={() => handleWishList(booking)}
                  className={"flex items-center  py-1 space-x-1 "}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={booking.color ? booking.color : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <span>Add to favorites</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="space-y-1 text-right">
        {booking?.price && !booking?.paid && (
          <Link
            to={`/dashboard/payment/${booking._id}`}
            className="btn btn-xs btn-success text-white"
          >
            Pay
          </Link>
        )}
        {booking.paid && (
          <button className="btn btn-xs text-white  bg-green-600">Paid</button>
        )}
        <p className="text-sm text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4 my-4 ">
        <button
          type="button"
          className="lg:px-5 py-2 border rounded-md border-teal-900 bg-gray-100 flex mx-2"
        >
          <strong className="sr-only sm:not-sr-only lg:px-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-1 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </strong>{" "}
          <span className="px-2">{phone}</span>
        </button>
        <button
          type="button"
          className="lg:px-5 py-2 border rounded-md bg-gray-100 text-gray-900 border-rose-900 flex mx-2"
        >
          <strong className="sr-only sm:not-sr-only">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-1 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </strong>
         <span className="px-2"> {location}</span>
        </button>
      </div>
    </div>
  );
};

export default MyCart;
