import { useQuery } from "react-query";
import "./App.css";
import logo from "./logo.svg";
import { products } from "./Query/Query";
import { useState, useEffect } from "react";
function App() {
  const { data, error, isError, isLoading } = useQuery("products", products);

  if (isError) return <h1>Error : {error.message} , Try again !</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  // if (isError) {
  //   console.log(error.message);
  // }

  // const [Products, setProducts] = useState([]);

  // useEffect(() => {
  //   // products().then((data) => setProducts(data));
  //   data && console.log(data);
  // }, []);

  return (
    <div className="App">
      {/* {Products && console.log(Products)} */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
