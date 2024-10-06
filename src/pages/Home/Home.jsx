import React from "react";
import Banner from "../../components/Banner";
import OrderOnline from "../../components/OrderOnline";

const Home = () => {
  return (
    <div>
      <div className="mb-12">
        <Banner></Banner>
      </div>
      <OrderOnline></OrderOnline>
    </div>
  );
};

export default Home;
