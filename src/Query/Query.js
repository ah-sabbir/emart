import axios from "axios";

const products = async () => {
  const { data } = await axios.get(
    "https://apricot-cupcake-77322.herokuapp.com/products"
  );
  return data;
};

const product = async (pKey) => {
  const { data } = await axios.get(
    "https://apricot-cupcake-77322.herokuapp.com/product/" + pKey
  );
  return data;
};

// const productsByCategory = async (category) => {
//   const data = products;
// };

export { products, product };
