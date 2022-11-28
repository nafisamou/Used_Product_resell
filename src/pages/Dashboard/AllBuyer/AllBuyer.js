import React from 'react';
import { useQuery } from "@tanstack/react-query";

const AllBuyer = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
          const res = await fetch(
            "https://e-commerce-server-gamma.vercel.app/users/buyer"
          );
          const data = await res.json();
          console.log(data);
          refetch()
          return data;
        },
      });
    return (
        <div>
      <h2 className="text-3xl my-4 text-center  font-serif">All Buyer</h2>
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
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllBuyer;