import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productAction'

import Product from "./Product"

const ProductList = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err);
      });
      console.log(response.data)
    dispatch(setProducts(response.data));
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products)
  return(
      <div className="ui grid container">
        < Product />
      </div>
    )
}

export default ProductList;