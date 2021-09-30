import React from "react";
import './prodect-buy-now.css';
// import {Link} from 'react-router-dom';
import {useStateValue} from '../Stateprovider';
import { getBasketTotal } from "../reducer";

function Product_buy_now() {
  const [{basket, product}, dispatch] = useStateValue();
  const value = getBasketTotal(basket)
  console.log(value);

  return (
    <>
      <div className="product_container">
        <div className="product_image">
          <img src={product.imageurl} alt="image not found" />
        </div>
        <div className="product_details">
          <div className="product_category">
            <span className="product_category_details_left">{product.data}</span>
            <span className="product_category_details_right">{product.age}</span>
          </div>
          <div className="product_details_heading">
            <div className="product_title">
            <div className="product_name">
              {product.product_type}
            </div>
            <div className="rating">
              ⭐ <small>{product.rating}</small>
            </div>
            </div>
            <div className="product_info">
              The Best Starter Kit to make Robotics.
            </div>
          </div>
         

          <div className="product_details_options">
            <div className="about_product">{product.data}</div>
            <div className="about_product">100+ MODALS</div>
            <div className="about_product">35+ PARTS</div>
          </div>
          <div className="product_price">
            <div>
               &#8377; &nbsp;
              <span className="product_current_price">{product.new_price}/-</span>
            </div>

            <div>
              <span className="product_mrp">M.R.P:-</span>
              <span className="product_real_price">&#8377; {product.old_price}/- </span>
            </div>
          </div>

          <div className="product_details_buttons">
            <div className="product_details_button">
            
              <button className="product_buy_button">
              {/* <Link to=""> */}
              BUY NOW
              {/* </Link> */}
              </button>
            </div>
            <div className="product_details_button">
          
              <button className="product_addtocart_button">
                <i className="fa fa-shopping-cart fa-lg"></i> ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_buy_now;