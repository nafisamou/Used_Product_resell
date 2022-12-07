import React from "react";
import Categories from "../../Categories/Categories";
import Add from "../../Dashboard/Advertise/Add";
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Categories></Categories>
      <Add></Add>
      {/* <Article></Article> */}
      <Subscribe></Subscribe>

    </div>
  );
};

export default Home;
