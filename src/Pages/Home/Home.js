import { Grid } from "@mui/material";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import ProductCard from "../../components/ProductCard/ProductCard";
import SideBar from "../../components/SideBar/SideBar";
import products from "../../Query/ProductsQuery";
import "./Home.style.css";
const classes = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  cardContainer: {
    width: "100%",
    display: "grid",
    flexDirection: "row",
    justifyContent: "center",
    gridTemplateColumns: "repeat(auto-fill,minmax(320px,auto))",
  },
  item: {
    padding: "10px",
  },
};

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
    <Grid container style={classes.container}>
      <SideBar />
      <Grid item style={classes.cardContainer}>
        {/* {Products && console.log(Products)} */}
        {Products &&
          Products.map((product, index) => {
            return product && <ProductCard key={index} Product={product} />;
          })}
      </Grid>
    </Grid>
  );
};

export default Home;
