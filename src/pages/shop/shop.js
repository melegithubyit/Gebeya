import React from 'react'
import './shop.css'
import { PRODUCTS } from '../../products'
import Product from './product'

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Welcome to Melakeselam's Shop</h1>
        <div className="box">
          <p className="para">
            Welcome to our online store, where your shopping experience becomes
            extraordinary. Explore our vast collection of high-quality products
            that are carefully curated to cater to your needs. From stylish
            fashion pieces to cutting-edge electronics, we have it all. Our
            commitment to excellence ensures that every item we offer is crafted
            with precision and attention to detail. Immerse yourself in a
            seamless shopping journey, where convenience meets satisfaction.
          </p>
        </div>
      </div>
      <div className="parent">
        <div className="minibar"></div>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
      <div className="space"></div>
      <div className="footer">
        <p>&copy;MelakeselamShop Copyright 2023</p>
      </div>
    </div>
  );
}

export default Shop
