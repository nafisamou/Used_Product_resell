import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { brand, category_id, img } = category;
  return (
    <div>
      {/*  <figure>
          <img className="object-center object-cover" src={img} alt="/" />
        </figure>
        
        <div className="card-body">
         <div className="flex justify-between items-center"> <h2 className="card-title text-xl">{brand}</h2>
          <Link to={`/categories/${category_id}`}>
            <button><FaArrowRight className="ml-3"></FaArrowRight></button>
          </Link></div>
        </div> */}

      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto  card h-64 my-12 py-4 shadow-lg bg-white">
        <div className="flex flex-col items-center justify-center  max-w-sm mx-auto ">
          <figure >
            <img className="object-center object-cover h-1/2" src={img} alt="/" />
          </figure>

          <div className="w-56 mt-10 overflow-hidden  rounded-lg  md:w-64 bg-gray-500">
            <h3 className="py-2 font-bold tracking-wide text-center bg-gradient-to-br  text-gray-200 uppercase ">
              {brand}
            </h3>

            <div className="flex items-center bg-white shadow-lg justify-between px-3 py-2 text-gray-700 ">
              <span className="font-bold  ">{category_id}</span>
              <Link to={`/categories/${category_id}`}>
                <button>
                  <FaArrowRight className="ml-3"></FaArrowRight>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
