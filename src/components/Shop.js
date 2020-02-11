import React, { Component } from 'react';
import Cart from './Cart';
import ProductList from './ProductList';
//import ToggleableProductForm from './ToggleableProductForm.js';

class Shop extends Component {
  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart />
        </header>

        <main>
          <ProductList />

          <div className="add-htmlForm visible">
            <p><a className="button add-product-button">Add A Product</a></p>
            <h3>Add Product</h3>
            <form>
              <div className="input-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" value=""/>
              </div>

              <div className="input-group">
                <label htmlFor="product-price">Price</label>
                <input type="text" id="product-price" value=""/>
              </div>

              <div className="input-group">
                <label htmlFor="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" value=""/>
              </div>

              <div className="actions htmlForm-actions">
                <a className="button">Add</a>
                <a className="button">Cancel</a>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Shop;
