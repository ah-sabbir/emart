import axios from "axios";

const products = async () => {
  const { data } = await axios.get(
    "https://apricot-cupcake-77322.herokuapp.com/products"
  );
  return data;
};

export default products;
