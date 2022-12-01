import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Advertise from "./Advertise";

const Add = () => {
  const [adInfo, setAddInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://e-commerce-server-gamma.vercel.app/advertise")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAddInfo(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    <Loading></Loading>;
  }
  return (
    <div className="my-20 ">
      <h1 className="text-center text-2xl font-sans font-medium my-5">Here is Your Advertise of showing products</h1>
    <div className="relative flex items-center justify-center w-full    text-gray-50 ">
   

      <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
        
        {adInfo.map((ad) => (
          <Advertise key={ad._id} ad={ad}></Advertise>
        ))}
      </div>
     
    </div>
    </div>
  );
};

export default Add;
