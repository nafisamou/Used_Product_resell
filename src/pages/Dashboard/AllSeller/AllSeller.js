import React from "react";
import { useQuery } from "@tanstack/react-query";
const AllSeller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://e-commerce-server-gamma.vercel.app/users/seller"
      );
      const data = await res.json();
      console.log(data);
      refetch()
      return data;
    },
});

  return <div>

  
    <div>
      <h2 className="text-3xl my-3 font-serif text-center">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>;
};

export default AllSeller;
