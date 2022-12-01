import React from "react";
import { Link } from "react-router-dom";

const Advertise = ({ ad }) => {
  const { brand, sellerName, img, price, Location,description, time } = ad;
  return (
    <div className="relative flex flex-shrink-0 w-full h-[500px] sm:w-auto shadow-lg">
    <div className="max-w-lg p-4  bg-gray-200  text-gray-800 shadow-lg">
	<div className="flex justify-between pb-4  border-bottom w-full px-8 py-4 my-3 overflow-hidden rounded-lg backdrop-blur-sm bg-white/90 bg-gray-800/360">
		<div className="flex items-center">
			<Link rel="" href="#" className="mb-0 capitalize  text-gray-800 -tracking-tighter">{brand}</Link>
		</div>
		<Link rel="" href="#">{sellerName}</Link>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={img} alt="" className="block object-cover object-center  rounded-md h-72 w-auto bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>{time}</span>
			</div>
		</div>
		<div className="space-y-2">
			<Link rel="" href="#" className="block">
				<h3 className="text-xl font-semibold font-sans text-indigo-900">{description}</h3>
			</Link>
			<p className="leading-snug  text-gray-700">{price}</p>
			<p className="leading-snug  text-gray-700">{Location}</p>
		</div>
	</div>
</div>
  </div>
   
  );
};

export default Advertise;
