import { Button, Grid } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
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
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [user, setUser] = useState({});
  // const [isOpen, setOpen] = useState(false);
  const {
    data: productData,
    error,
    isError,
    isLoading,
  } = useQuery(["products"], products);
  useEffect(() => {
    const usr = JSON.parse(localStorage.getItem("emart-user"));
    if (usr) {
      setIsAuthenticate(true);
      setUser({ ...usr });
    }
  }, []);

  useMemo(() => {
    setProducts(productData);
    productData &&
      setCategory([...new Set(productData.map((item) => item.category))]);
  }, [productData]);

  if (isLoading) return <Loader open={true} />;
  if (isError) return <h1>Something went wrong for : {error}</h1>;

  return (
    <>
      <Header user={user} isAuthenticate={isAuthenticate} />
      <Grid container style={classes.container}>
        <SideBar category={category} />
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item style={classes.cardContainer}>
            {/* {console.log(isOpen)} */}
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
