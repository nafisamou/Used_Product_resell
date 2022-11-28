import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
// import toast from "react-hot-toast";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user)
  // const [users, setUsers] = useState([]);
  const url = `https://e-commerce-server-gamma.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("token")}`,
        // },
      });
      const data = await res.json();
      return data;
    },
  });
  //   console.log(bookings);

  return (
    <div>
      <h1 className="text-3xl">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full my-7">
          <thead>
            <tr>
              <th></th>
              <th>Brand</th>
              <th>Picture</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.brand}</td>
                <td>
                  {" "}
                  <div className="avatar">
                    <div className="rounded w-16 h-16">
                      {booking?.img && (
                        <img
                          src={booking.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      )}
                    </div>
                  </div>
                </td>
                <td>{booking?.phone}</td>
                <td>{booking?.location}</td>
                <td>{booking?.price && <p>${booking.price}</p>}</td>
                <td>
                  {booking?.price && !booking?.paid && (
                    <Link
                      to={`/dashboard/payment/${booking._id}`}
                      className="btn btn-xs btn-success text-white"
                    >
                      Pay
                    </Link>
                  )}
                  {booking.paid && (
                    <button className="btn btn-xs text-white  bg-green-600">
                      Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
