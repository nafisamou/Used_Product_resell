import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmatonModal";

const ManageProductCart = ({ product, refetch, isLoading }) => {
  const {
    sellerName,
    brand,
    time,
    Location,
    price,
    buyingPrice,
    description,
    condition,
    _id,
    img,
  } = product;
  const [deletingProduct, setDeletingProduct] = useState(null);
  const closeModal = () => {
    setDeletingProduct(null);
  };

  // Deleting:
  const handleDeleteProduct = (product) => {
    fetch(
      `https://e-commerce-server-gamma.vercel.app/products/${product._id}`,
      {
        method: "DELETE",
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("token")}`,
        // },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Product ${product.brand} deleted successfully`);

          refetch();
        }
      });
  };

  const handleMakeAdvertise = () => {
    const addedProduct = {
      img: img,
      sellerName: sellerName,
      brand: brand,
      price: price,

      description: description,
    };
    console.log(addedProduct);

    fetch("https://e-commerce-server-gamma.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Advertised");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <article className="flex bg-white transition shadow-lg py-4 ">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{time}</span>
          </time>
        </div>

        <div className=" sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={img}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <Link href="#">
              <h3 className="font-bold uppercase text-gray-900">{brand}</h3>
            </Link>

            <p className="">
              <strong className="mr-1">Selling Price: </strong>
              <span className="text-red-500">$</span> {price}{" "}
            </p>
            <p className="">
              <strong className="mr-1">Buying Price: </strong>
              <span className="text-red-500">$</span> {buyingPrice}{" "}
            </p>

            <p>
              <strong className="mr-1">Condition :</strong> {condition}
            </p>
            <p>
              <strong className="mr-1">Location :</strong> {Location}
            </p>
          </div>

          <div className="flex  justify-end items-center mx-2">
            <label
              onClick={() => setDeletingProduct(product)}
              htmlFor="confirmation-modal"
              className="btn btn-xs btn-error text-white mx-8"
            >
              Delete
            </label>
            <button
              onClick={() => handleMakeAdvertise(_id)}
              className="btn btn-ghost btn-xs bg-red-300 mx-2"
            >
              POST Ad!
            </button>
          </div>
        </div>
      </article>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you once delete ${deletingProduct.brand}. It can't be undone.`}
          closeModal={closeModal}
          successAction={handleDeleteProduct}
          modalData={deletingProduct}
          successButtonName="Delete"
        ></ConfirmationModal>
      )}
    </>
  );
};

export default ManageProductCart;
