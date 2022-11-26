import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { brand, category_id, img } = category;
  return (
    <div>
      <div className="card w-96 shadow-xl h-56 ">
        <figure>
          <img className="object-center object-cover" src={img} alt="/" />
        </figure>
        <div className="card-body">
         <div className="flex justify-between items-center"> <h2 className="card-title text-xl">{brand}</h2>
          <Link to={`/categories/${category_id}`}>
            <button><FaArrowRight className="ml-3"></FaArrowRight></button>
          </Link></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
