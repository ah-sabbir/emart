import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import ProductCard from "../../components/ProductCard/ProductCard";
import SideBar from "../../components/SideBar/SideBar";
import products from "../../Query/ProductsQuery";
import "./Home.style.css";

const Home = () => {
  const [Products, setProducts] = useState([]);
  const {
    data: productData,
    error,
    isError,
    isLoading,
  } = useQuery(["products"], products);

  useMemo(() => {
    setProducts(productData);
  }, [productData]);

  return (
    <div className="container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="card-container">
        {Products &&
          Products.map((product, index) => {
            return product && <ProductCard key={index} Product={product} />;
          })}
      </div>
    </div>
  );
};

export default Home;
