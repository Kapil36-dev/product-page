import React,{useState} from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined'
import './card.css'
import { useStateValue } from '../Stateprovider';


function Cards({ age, imageurl, data_category, product_type, data, rating, new_price, old_price, about_product }) {
    const [{product}, dispatch] = useStateValue();
    const [click, setclick] = useState(false);

    const clickhandler = ()=>{
        setclick(!click);
    }

    const addTocard = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                data_category: data_category,
                product_type: product_type,
                new_price: new_price,
                old_price: old_price,
                imageurl: imageurl,
                rating: rating,
            }
        })
        // console.log(basket);
    }


    const buy_now = () => {
        const data={
            data_category: data_category,
            product_type: product_type,
            new_price: new_price,
            old_price: old_price,
            imageurl: imageurl,
            rating: rating,
        }
        dispatch({
            type: 'BUY_NOW',
            item:data
        })
        console.log(product);
    }


    return (
        <li className="cards-list">
            {/* <button>best seller</button> */}
            <div className="cards-list-link" data_category={data_category} >
                <figure className="cards-list-picwrap" age={age} data={data}>
                    <img src={imageurl} alt="Travel" className='card-list-img'/>
                    {click?<FavoriteIcon className='like-icon onclick_like_icon' onClick={clickhandler}/>:<FavoriteBorderIcon className='like-icon' onClick={clickhandler}/>}
                </figure>
                <div className="card-list-info" >
                    <div className='text-rating'>
                        <h3 className='product-card-text'>{product_type}</h3>
                        <div className='product-rating'>
                            <StarOutlinedIcon className='product-star-icon' />
                            <p className='product-rating-point'>{rating}</p>
                        </div>
                    </div>
                    <p>{about_product}</p>
                    <h3 className='product-price'>
                        <i className="fas fa-rupee-sign new_price">{new_price}</i>
                        <i className="fas fa-rupee-sign old_price">{old_price}</i>
                    </h3>
                    <div className='product-option'>
                        <ShoppingCartOutlinedIcon className="card_cart_icons" onClick={(e) => addTocard()} />
                        <button className='product_btn' onClick={(e)=>buy_now()}>Buy Now</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Cards
