import React from "react";
import Layout from "./Layout/Layout";
import { useSearch } from "../context/search";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";

const Search = () => {
  const [values] = useSearch();
  const [cart, setCart] = useCart();
  console.log(values);
  return (
    <Layout title={"Search Results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {" "}
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values.results.length}`}{" "}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values.results?.map((product) => (
              <div
                key={product._id}
                className="card m-2"
                style={{ width: "18rem" }}
              >
                <img
                  src={`/api/v1/product/get-photo/${product._id}`}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    {product.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">$ {product.price}</p>

                  <button className="btn btn-primary ms-1">
                    See more details
                  </button>

                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, product]);
                      console.log("Added");
                      toast.success("Item added to cart");
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, product])
                      );
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
