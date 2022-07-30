import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from '../axiosInstance'
import ProductCard from './ProductCard'

function ProductsList() {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('/products')
        .then((res)=>{
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getProducts();
    },[])

  return (
    <Grid container>
        <Grid item xs={12} sm={4}>
            <ProductCard product={products}/>
        </Grid>
    </Grid>
  )
}

export default ProductsList