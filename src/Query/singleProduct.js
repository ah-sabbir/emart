import axios from "axios";

const product = async () => {
  const { data } = await axios.get(
    "https://apricot-cupcake-77322.herokuapp.com/product/B00UV6I8QQ"
  );
  return data;
};

export default product;
