import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productsSlice";

function Home() {
  const list = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          margin: "10px 0px 0px 140px",
          gap: "30px",
        }}
      >
        {list.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                width: "25%",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                height: "500px",
              }}
            >
              <img
                src={product.image}
                style={{ width: "80%", height: "60%", marginTop: "20px" }}
              />
              <h4>₹{product.price}</h4>
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
