import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmatonModal";

import Loading from "../../Shared/Loading/Loading";

const ManageProducts = () => {
  // useTitle("Add Service");
  const [deletingProduct, setDeletingProduct] = useState(null);
  const closeModal = () => {
    setDeletingProduct(null);
  };

  // Loading Product's Data
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/products",
            // {
            //   headers: {
            //     authorization: `bearer ${localStorage.getItem("token")}`,
            //   },
            // }
        );
        const data = await res.json();
        return data;
      } catch (error) {
        toast.error(error);
      }
    },
  });

  // Deleting:
  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Product ${product.brand} deleted successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl py-10">
        Manage products:-{products?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Brand</th>
              {/* <th>Model</th> */}
              <th>Name</th>
              <th>Selling Price</th>
              <th>Buying Price</th>
              <th>Condition</th>
              <th>Location</th>
              <th>Post</th>
              {/* <th>Contact</th> */}
              {/* <th>Authenticity</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{product.brand}</td>
                  {/* <td>{product.model}</td> */}
                  <td>{product.sellerName}</td>
                  <td>{product.price}</td>
                  <td>{product.buyingPrice}</td>
                  <td>{product.condition}</td>
                  <td>{product.Location}</td>
                  <td>{product.time}</td>
                  {/* <td>{product.contact}</td> */}
                  {/* <td>{product.Authenticity}</td> */}
                  <td>
                    <label
                      onClick={() => setDeletingProduct(product)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error text-white"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you once delete ${deletingProduct.name}. It can't be undone.`}
          closeModal={closeModal}
          successAction={handleDeleteProduct}
          modalData={deletingProduct}
          successButtonName="Delete"
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageProducts;
