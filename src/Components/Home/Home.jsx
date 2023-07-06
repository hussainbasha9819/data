import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Load";
import "./Home.css";
const Home = () => {
  const [products, Setproducts] = useState([]);
  const [Load, SetLoad] = useState(false);
  const fatchData = async () => {
    SetLoad(true);
    await Axios.get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        Setproducts(res.data.products);
      })
      .catch((error) => console.log(error));
    SetLoad(false);
  };
  useEffect(() => {
    fatchData();
  }, []);
  return (
    <>
      {Load ? (
        <Loader />
      ) : (
        <div className="Home">
          {products.map((ele) => (
            <Card img={ele.thumbnail} title={ele.title} price={ele.price} />
          ))}
        </div>
      )}
    </>
  );
};
export default Home;
