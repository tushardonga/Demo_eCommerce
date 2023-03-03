import React from "react";
import Layout from "../../Components/Layout";
import AddProduct from "../../Components/Products/Add/AddProduct";

const Create = () => {
  return (
    <Layout>
      <div className="my-[71px] sm:mt-[83px] lg:mt-[102px]">
        <div className="flex items-center justify-center bg-white  border-b border-gray-200">
          <h1 className="text-2xl font-bold">Add Product</h1>
        </div>
        <AddProduct />
      </div>
    </Layout>
  );
};

export default Create;
