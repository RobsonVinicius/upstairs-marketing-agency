import React from 'react';
import { InfoSection } from '../../components';
import { ProductsObjOne, ProductsObjTwo, ProductsObjThree } from './Products.data.js'


const Products = () => {
  return (
    <>
      <InfoSection {...ProductsObjOne } />      
      <InfoSection {...ProductsObjTwo } />
      <InfoSection {...ProductsObjThree } />
    </>
  )
}

export default Products;
