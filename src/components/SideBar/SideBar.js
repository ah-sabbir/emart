import { MenuItem } from "@mui/material";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import products from "../../Query/ProductsQuery";
import "./SideBar.style.css";

const SideBar = () => {
  const {
    data: productsData,
    error,
    isError,
    isLoading,
  } = useQuery(["category"], products);

  const [category, setCategory] = useState([]);

  useMemo(() => {
    if (productsData) {
      setCategory([...new Set(productsData.map((item) => item.category))]);
    }
  }, [productsData]);

  if (isError) return <>Error Loading...</>;
  if (isLoading) return <>Loading...</>;

  return (
    <div className="side-bar">
      <div>
        {category.map((item, index) => {
          return <MenuItem key={index}>{item}</MenuItem>;
        })}
      </div>
    </div>
  );
};

export default SideBar;
