import React from 'react';
import EditableProduct from './EditableProduct';

const ProductList = () => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <EditableProduct />
      <EditableProduct />
      <EditableProduct />
    </div>
  );
};

export default ProductList;
