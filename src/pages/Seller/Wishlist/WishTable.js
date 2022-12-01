import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyCart from "../../Dashboard/MyCart/MyCart";



const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://e-commerce-server-gamma.vercel.app/wishlist?email=${user?.email}&&limit=3`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-5">Featured Product</h2>
      <p className="w-2/3 mx-auto  mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400 text-center">
        Your Wishlist
      </p>
      <div className="grid gap-4  mx-auto items-center justify-center">
        {data.map((product) => (
          <MyCart product={product} key={product._id} />
         
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
