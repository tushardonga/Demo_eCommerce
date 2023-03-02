import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import ProductsList from "../../Components/Products/ProductsList";
import { useUser } from "../../Context/UserContext";
import { Products } from "../../Utils/data";

const Dashboard = () => {
  const { isLogin } = useUser();
  const naviagte = useNavigate();
  const [products, setProducts] = useState();
  // useEffect(() => {
  //   if (!isLogin) {
  //     naviagte("/");
  //   }
  // }, [isLogin]);

  useEffect(() => {
    const productDetials = Products;
    setProducts(productDetials);
  }, [Products]);

  return (
    <div>
      <Layout>
        <div class="mx-auto mt-[71px] sm:mt-[83px] lg:mt-[102px] w-4/5">
          <ProductsList products={products} />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
