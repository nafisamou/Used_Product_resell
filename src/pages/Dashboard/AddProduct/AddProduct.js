import React from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            brand: data.brand,
        

            category_id: data.category_id,

            model: data.model,
            description: data.description,
            sellerName: data.sellerName,
            price: data.price,
            buyingPrice: data.buyingPrice,
            Authenticity: data.Authenticity,
            condition: data.condition,
            Location: data.Location,
            contact: data.contact,
            time: data.time,
            img: imgData.data.url,
          };
          console.log(product);
          //   save product information to the database
          fetch("https://e-commerce-server-gamma.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.brand} is added successfully`);
              // setLoading(true)
              navigate("/dashboard/manageProducts");
              // refetch()
            });
        }
      });
  };

  return (
    <section className="p-6 bg-gray-300 dark:text-gray-50">
    <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit(handleAddProduct)}>
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
        
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
          <label htmlFor="brand" className="text-sm">Brand</label>
                <input
                  type="name"
                  {...register("brand", {
                    required: "Brand Name is Required",
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.brand && (
                  <p className="text-red-500">{errors.brand.message}</p>
                )}
          </div>
         
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="Model" className="text-sm">Model</label>
            <input
                  type="text"
                  {...register("model", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.model && (
                  <p className="text-red-500">{errors.model.message}</p>
                )}
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="select" className="text-sm">Select Your Category</label>
            <select 
                    {...register("category_id", {
                      required: true,
                    })}
                    className="select select-bordered  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 w-full rounded-md mt-6"
                  >
                    <option value="01" className="text-gray-900">
                      Category-1
                    </option>
                    <option value="02" className="text-gray-900">
                      Category-2
                    </option>
                    <option value="03" className="text-gray-900">
                      Category-3
                    </option>
                  </select>
          </div>
          <div className="col-span-full ">
            <label htmlFor="description" className="text-sm">Description</label>
           <input
                  type="text"
                  {...register("description", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="sellerName" className="text-sm">Seller Name</label>
            <input
                  type="name"
                  {...register("sellerName", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.sellerName && (
                  <p className="text-red-500">{errors.sellerName.message}</p>
                )}
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="price" className="text-sm">Selling Price</label>
            <input
                  type="number"
                  {...register("price", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
          </div>
          <div className="col-span-full sm:col-span-2">
          <label htmlFor="buyingPrice" className="text-sm">Buying Price</label>
          <input
                  type="number"
                  {...register("buyingPrice", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
          </div>
        </div>
      </fieldset>
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
       
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
          <label htmlFor="contact" className="text-sm">Contact</label>
        <input
                  type="contact"
                  {...register("contact", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.contact && (
                  <p className="text-red-500">{errors.contact.message}</p>
                )}
          </div>
          <div className="col-span-full sm:col-span-3">
          <label htmlFor="condition" className="text-sm">Condition</label>
            <input
                  type="text"
                  {...register("condition", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.condition && (
                  <p className="text-red-500">{errors.condition.message}</p>
                )}
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="Location" className="text-sm">Location</label>
            <input
                  type="text"
                  {...register("Location", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90"
                />
                {errors.Location && (
                  <p className="text-red-500">{errors.Location.message}</p>
                )}
          </div>
          <div className="col-span-full sm:col-span-3">
          <label htmlFor="Time" className="text-sm">Time</label>
          <input
                  type="text"
                  {...register("time", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90"
                />
                {errors.time && (
                  <p className="text-red-500">{errors.time.message}</p>
                )}
          </div>
          <div className="col-span-full sm:col-span-3">
          <label htmlFor="Authenticity" className="text-sm">Authenticity</label>
          <input
                  type="text"
                  {...register("Authenticity", {
                    required: true,
                  })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90"
                />
                {errors.Authenticity && (
                  <p className="text-red-500">{errors.Authenticity.message}</p>
                )}
          </div>
          <div className="col-span-full">
            <label htmlFor="photo" className="text-sm">Photo</label>
            <input
                  type="file"
                  {...register("img", {
                    required: "Photo is Required",
                  })}
                  className="w-full  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90"
                />
                {errors.img && (
                  <p className="text-red-500">{errors.img.message}</p>
                )}
          </div>
          <div className="col-span-full mx-auto w-1/2">
          <input 
                className="btn form-control w-full max-w-xs mt-4"
                value="Add Product"
                type="submit"
              />
          </div>
        </div>
      </fieldset>
    </form>
  </section>
  );
};

export default AddProduct;

/* 

 <div className="bg-white py-12 md:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="w-full px-5 shadow-lg mx-auto text-center">
          <div className=" p-7">
            <h2 className="text-3xl text-center font-medium font-serif py-4">
              Add A Product
            </h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
              <div className="form-control w-96 max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Brand</span>
                </label>
                <input
                  type="name"
                  {...register("brand", {
                    required: "Brand Name is Required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.brand && (
                  <p className="text-red-500">{errors.brand.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Model</span>
                </label>
                <input
                  type="text"
                  {...register("model", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.model && (
                  <p className="text-red-500">{errors.model.message}</p>
                )}
              </div>
              {
                <div className="form-control w-full max-w-xs my-2">
                  <select
                    {...register("category_id", {
                      required: true,
                    })}
                    className="select select-bordered text-gray-900 w-full max-w-xs mt-6"
                  >
                    <option value="01" className="text-gray-900">
                      Category-1
                    </option>
                    <option value="02" className="text-gray-900">
                      Category-2
                    </option>
                    <option value="03" className="text-gray-900">
                      Category-3
                    </option>
                  </select>
                </div>
              }

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  {...register("description", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="name"
                  {...register("sellerName", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.sellerName && (
                  <p className="text-red-500">{errors.sellerName.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Selling Price</span>
                </label>
                <input
                  type="number"
                  {...register("price", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Buying Price</span>
                </label>
                <input
                  type="number"
                  {...register("buyingPrice", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Contact</span>
                </label>
                <input
                  type="contact"
                  {...register("contact", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.contact && (
                  <p className="text-red-500">{errors.contact.message}</p>
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
                  <span className="label-text">time</span>
                </label>
                <input
                  type="text"
                  {...register("time", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.time && (
                  <p className="text-red-500">{errors.time.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Authenticity</span>
                </label>
                <input
                  type="text"
                  {...register("Authenticity", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.Authenticity && (
                  <p className="text-red-500">{errors.Authenticity.message}</p>
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
                className="btn form-control w-full max-w-xs mt-4"
                value="Add Product"
                type="submit"
              />
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.unsplash.com/photo-1589062612200-0cc1f7f78fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgwfHxwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.unsplash.com/photo-1566492625401-af879a7559f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMzfHxwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

*/