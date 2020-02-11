import React, { Component } from 'react';
import Cart from './Cart.js';
//import ProductsList from './ProductsList.js';
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
          <div className="product-listing">
            <h2>Products</h2>
            <div className="product">
              <div className="product-details">
                <h3>Amazon Kindle E-reader</h3>
                <p className="price">$79.99</p>
                <p className="quantity">5 left in stock</p>
                <div className="actions product-actions">
                  <a className="button add-to-cart">Add to Cart</a>
                  <a className="button edit">Edit</a>
                </div>
                <a className="delete-button"><span>X</span></a>
              </div>
            </div>

            <div className="product">
              <div className="product-details">
                <h3>Apple 10.5-Inch iPad Pro</h3>
                <p className="price">$649.99</p>
                <p className="quantity">2 left in stock</p>
                <div className="actions product-actions">
                  <a className="button add-to-cart">Add to Cart</a>
                  <a className="button edit">Edit</a>
                </div>
                <a className="delete-button"><span>X</span></a>
              </div>
            </div>

            <div className="product">
              <div className="product-details">
                <h3>Yamaha Portable Keyboard</h3>
                <p className="price">$155.99</p>
                <p className="quantity">0 left in stock</p>
                <div className="actions product-actions">
                  <a className="button add-to-cart disabled">Add to Cart</a>
                  <a className="button edit">Edit</a>
                </div>
                <a className="delete-button"><span>X</span></a>
              </div>
            </div>
          </div>

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
