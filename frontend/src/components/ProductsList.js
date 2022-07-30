import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "../axiosInstance";
import ProductCard from "./ProductCard";
import {productList} from "../redux/productData"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";

function ProductsList() {
  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productData.value);
  console.log(products)

  const getProducts = () => {
    axios
      .get("/products")
      .then((res) => {
        dispatch(productList(res.data.products))
        //setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
      <Grid container>
        {products.map((data, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <ProductCard product={data} />
          </Grid>
        ))}
      </Grid>
  );
}

export default ProductsList;
