import React from "react";

import { Link } from "react-router-dom";

const AllProduct = ({ product, setSecondHandProduct }) => {
  const {
    brand,
    model,
    description,
    sellerName,
    contact,
    storage,
    // features,
    time,
    sellingPrice,
    buyingPrice,
    img,
    Location,
    Authenticity,
  } = product;
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
            <strong className="mr-1">Storage : </strong> {storage}
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
            <span className="text-red-500">$</span> {sellingPrice}{" "}
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
