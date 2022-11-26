import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import AllProduct from "../Products/AllProducts/AllProduct";

const CategoryDetails = () => {
  const products = useLoaderData();
  const [secondHandProduct, setSecondHandProduct] = useState(null);

  // console.log(products)
  return (
    <div className="grid grid-cols-1 gap-2 ">
      {products.map((product) => (
        <AllProduct
          key={product._id}
          product={product}
          setSecondHandProduct={setSecondHandProduct}
        ></AllProduct>
      ))}

      {secondHandProduct &&
        <BookingModal
          secondHandProduct={secondHandProduct}
          setSecondHandProduct={setSecondHandProduct}
        ></BookingModal>
      }
    </div>
  );
};

export default CategoryDetails;
