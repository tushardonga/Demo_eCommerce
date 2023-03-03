import React from "react";
import Layout from "../../Components/Layout";
import ProductsList from "../../Components/Products/ProductsList";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <div className="mx-auto my-[71px] sm:mt-[83px] lg:mt-[102px] w-4/5">
          <ProductsList />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
