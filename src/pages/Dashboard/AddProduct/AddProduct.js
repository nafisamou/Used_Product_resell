import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const AddProduct = () => {
  // const {setLoading} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const[loading, setLoading] = useState(true)
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  //   console.log(imageHostKey);
  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          //   console.log(imgData.data.url);
          const product = {
            brand: data.name,
            email: data.email,
            condition: data.condition,
            Location: data.Location,
            img: imgData.data.url,
          };
          //   save product information to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/manageProducts");
                setLoading(false)
            });
        }
      });
  };

    if(loading){
  <Loading></Loading>
  }

  return (
    <div className="flex  items-center px-2">
      {" "}
      <div className=" w-96 py-5 shadow-lg mx-10 my-10 ">
        <div className=" p-7">
          <h2 className="text-4xl text-center">Add A Product</h2>
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Condition</span>
              </label>
              <input
                type="text"
                {...register("condition", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.condition && (
                <p className="text-red-500">{errors.condition.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("Location", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.Location && (
                <p className="text-red-500">{errors.Location.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                {...register("img", {
                  required: "Photo is Required",
                })}
                className="input input-bordered w-full max-w-xs py-2"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
            <input
              className="btn w-full mt-4"
              value="Add Product"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

/**
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. mongodb (database)
 */

export default AddProduct;
