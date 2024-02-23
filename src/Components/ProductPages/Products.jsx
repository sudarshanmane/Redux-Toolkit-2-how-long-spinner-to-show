import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllProducts, getAllProductsDesc } from "./productSlice";
import { useSelector } from "react-redux";
import "./products.css";

const Product = () => {
  const { dispatch, isLoading, setIsLoading } = useOutletContext();
  const allProductsSelector = useSelector((state) => state.products);

  //put constants here...
  const [allProducts, setAllProducts] = useState([]);
  const [allProductsDesc, setAllProductsDesc] = useState({
    allProductsDesc: [],
  });

  useEffect(() => {
    if (
      !allProductsSelector?.allProducts?.data &&
      !allProductsSelector?.allProducts?.isLoading
    ) {
      dispatch(getAllProducts());
    } else if (allProductsSelector?.allProducts?.data) {
      const allProductsData = allProductsSelector.allProducts.data.map(
        (element, index) => {
          return (
            <div className="card" key={index}>
              <div>{element.price}</div>
              <div>{element.title}</div>
            </div>
          );
        }
      );

      setAllProducts(allProductsData);
    }
    // set is loading globally for every page fetching proces
  }, [allProductsSelector?.allProducts]);

  useEffect(() => {
    if (
      !allProductsSelector?.allProductsDesc?.data &&
      !allProductsSelector?.allProductsDesc?.isLoading
    ) {
      dispatch(getAllProductsDesc());
    }
  }, [allProductsSelector?.allProductsDesc]);

  useEffect(() => {
    // set is loading globally for every page fetching
    // set is loading to false only after completion of the all data fetching process
    const checkLoading =
      allProductsSelector?.allProducts.isLoading ||
      allProductsSelector?.allProductsDesc.isLoading;
    if (checkLoading !== isLoading) {
      setIsLoading((s) => checkLoading);
    }
  }, [allProductsSelector]);

  return <div className="cards-container">{allProducts}</div>;
};

export default Product;
