import { Button, Grid } from "@mui/material";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";
import SideBar from "../../components/SideBar/SideBar";
import products from "../../Query/ProductsQuery";

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
  Loader: {},
};

const Home = () => {
  const [Products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [counter, setCounter] = useState(10);
  const [pageNum, setPageNum] = useState(1);

  // const [isOpen, setOpen] = useState(false);
  const {
    data: productData,
    error,
    isError,
    isLoading,
  } = useQuery(["products"], products);

  useMemo(() => {
    setProducts(productData);
    productData &&
      setCategory([...new Set(productData.map((item) => item.category))]);
  }, [productData]);

  if (isLoading) return <Loader open={true} />;

  return (
    <>
      <Header />
      <Grid container style={classes.container}>
        {/* <Loader open={isOpen} /> */}
        <SideBar category={category} />
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item style={classes.cardContainer}>
            {/* {console.log(isOpen)} */}
            {/* {Products && console.log(Products)} */}

            {Products &&
              Products.slice(pageNum, counter).map((product, index) => {
                return product && <ProductCard key={index} Product={product} />;
              })}
          </Grid>
          <Button
            onClick={() => {
              setCounter(counter + 10);
              setPageNum(pageNum + 10);
            }}
          >
            Load more...
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
