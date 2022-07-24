// import { useQuery } from "react-query";

// export const getProduct = async () => {
//   const res = await fetch(
//     "https://apricot-cupcake-77322.herokuapp.com/product/B00UV6I8QQ"
//   );
//   return res.json();
// };

// const GetProduct = () => {
//   const { data, error, isError, isLoading } = useQuery(["product"], getProduct);
//   if (isLoading) return <h1>Loading...</h1>;
//   if (isError) return <h1>Error : {error.message} , Try again !</h1>;
//   console.log("into the component", data);
//   return (
//     <>
//       <h1>{data.id}</h1>
//     </>
//   );
// };

const Product = () => {
  return <div>this is product page</div>;
};

export default Product;
