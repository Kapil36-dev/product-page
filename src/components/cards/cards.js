import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import "./card.css";
import { useStateValue } from "../Stateprovider";
import { Link } from "react-router-dom";
import axios from "axios";

function Cards({
  age,
  imageurl,
  data_category,
  product_type,
  data,
  rating,
  new_price,
  old_price,
  about_product,
}) {
  const [{}, dispatch] = useStateValue();
  const [click, setclick] = useState(false);

  const clickhandler = () => {
    setclick(!click);
  };

  const addTocard = () => {
    const newuser = {
      data_category: data_category,
      product_type: product_type,
      new_price: new_price,
      old_price: old_price,
      imageurl: imageurl,
      rating: rating,
    };
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        data_category: data_category,
        product_type: product_type,
        new_price: new_price,
        old_price: old_price,
        imageurl: imageurl,
        rating: rating,
      },
    });
    // console.log(basket);
    axios({
      method: "post",
      url: "https://e-commerce-codesandbot.herokuapp.com/addtocart/61330a3bca1623a507108096/3",
      data: newuser,
    })
      .then((res) => {
        console.log(res);
        // history.push('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buy_now = () => {
    const item = {
      data_category: data_category,
      product_type: product_type,
      new_price: new_price,
      age: age,
      data: data,
      old_price: old_price,
      imageurl: imageurl,
      rating: rating,
    };
    dispatch({
      type: "BUY_NOW",
      item: item,
    });
    // console.log(product);
  };

  return (
    <div className="cards">
      <li className="cards-list">
        {/* <button>best seller</button> */}
        <div className="cards-list-link" data_category={data_category}>
          {/* product image section  */}
          <figure className="cards-list-picwrap" age={age} data={data}>
            <img src={imageurl} alt="Travel" className="card-list-img" />
            {click ? (
              <FavoriteIcon
                className="like-icon onclick_like_icon"
                onClick={clickhandler}
              />
            ) : (
              <FavoriteBorderIcon
                className="like-icon"
                onClick={clickhandler}
              />
            )}
          </figure>
          {/* product image section  */}
          <div className="card-list-info">
            {/* rating section  */}
            <div className="text-rating">
              <h3 className="product-card-text">{product_type}</h3>
              <div className="product-rating">
                <StarOutlinedIcon className="product-star-icon" />
                <p className="product-rating-point">{rating}</p>
              </div>
            </div>
            {/* rating section  */}
            <p>{about_product}</p>
            {/* price section  */}
            <h3 className="product-price">
              <i className="fas fa-rupee-sign new_price">{new_price}</i>
              <i className="fas fa-rupee-sign old_price">{old_price}</i>
            </h3>
            {/* price section  */}
            {/* add to cart or buy now  */}
            <div className="product-option">
              <ShoppingCartOutlinedIcon
                className="card_cart_icons"
                onClick={(e) => addTocard()}
              />
              <Link to="main-page">
                <button className="product_btn" onClick={(e) => buy_now()}>
                  Buy Now
                </button>
              </Link>
            </div>
            {/* add to cart or buy now  */}
          </div>
        </div>
      </li>
    </div>
  );
}

export default Cards;
