import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllProduct = ({ product, setSecondHandProduct }) => {
  const { user } = useContext(AuthContext);
  const [fill, setFill] = useState(false);
  const {
    brand,
    model,
    description,
    sellerName,
    contact,
    time,
    price,
    buyingPrice,
    img,
    Location,
    Authenticity,
  } = product;

  const handleWishList = (product) => {
    const dbWishlist = { ...product };
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
        setFill(true);
        toast.success("added successfully");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="m-6">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
            <span>post</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{time}</span>
          </time>
        </div>
        <figure>
          <img
            className="w-[400px] object-center h-[500px] "
            src={img}
            alt="/"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p>
            <strong className="mr-1">Model : </strong> {model}
          </p>

          <p>
            <strong>Description : </strong>
            {description}
          </p>
          <p>
            <strong className="mr-1">Seller Name:</strong> {sellerName}
          </p>
          <p className="">
            <strong className="mr-1">Selling Price: </strong>
            <span className="text-red-500">$</span> {price}{" "}
          </p>
          <p className="">
            <strong className="mr-1">Buying Price: </strong>
            <span className="text-red-500">$</span> {buyingPrice}{" "}
          </p>

          <p>
            <strong className="mr-1">Location :</strong> {Location}
          </p>
          <p>
            <strong className="mr-1">Contact No:</strong> {contact}
          </p>

          <div className="flex">
            <p>
              <strong className="mr-1">Authenticity:</strong> {Authenticity}
            </p>
            <button
              onClick={() => handleWishList(product)}
              className={"w-8 text-center mr-2 "}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={product.color ? product.color : "none"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <label
              htmlFor="booking-modal"
              className="btn  text-white"
              onClick={() => setSecondHandProduct(product)}
            >
              <span className="mx-2">Book</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
