import React, { useState, useEffect } from 'react'
import './product.css'
import Fetchdata from '../api/api';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Cards from '../cards/cards';
import { useStateValue } from '../Stateprovider';
import {getBasketTotal} from '../reducer'


function Product() {
    const [{basket}, dispatch] = useStateValue();
    const [Dailydata, setDailydata] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setDailydata(await Fetchdata());
        }
        fetchApi();
        // console.log(Dailydata);
    }, [setDailydata])

    return (
        <div className='product-container'>
            {/* product navbar  */}
            <div className='product__category'>
                <div className='products'>
                    <h3 className='category_heading'>ALL  PRODUCT</h3>
                    <div>
                        <ShoppingCartOutlinedIcon className="cart_icons" />
                        <span className="basket-length">{basket?.length}</span>
                    </div>
                </div>
                <ul className='category_options'>
                    <li>ALL</li>
                    <li>ROBOTICS</li>
                    <li>IOT</li>
                    <li>CODING</li>
                    <li>VEDIC MATHS</li>
                </ul>
            </div>
            {/* product navbar  */}
            {/* product section  */}
            <div className='product_section'>
                {/* Recommended section  */}
                <div className='recommended-section'>
                    <h3 className='recommended-heading'>Recommended Kits</h3>
                    {/* <div className='cards-item'>
                        {Dailydata.map((item) => {
                            // console.log(item);
                            return (
                                <Cards age='10+ Age'
                                    imageurl={item.image}
                                    data_category='best seller'
                                    data={item.category}
                                    product_type={item.name}
                                    rating={item.rating}
                                    new_price={item.discountedPrice}
                                    old_price={item.price}
                                    about_product='Lorem ipsum dolor sit amet consectetur.'
                                />
                            )
                        })}  
                    </div> */}
                </div>
                {/* Recommended section  */}
                {/* other section  */}
                <div className='other-section'>
                    <h3 className='other-heading'>Other Kits</h3>
                    <div className='cards-item'>
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='Robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price={2000}
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price={2000}
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://m.media-amazon.com/images/I/51oaPiE9jPL._AC_.jpg'
                            data_category='best seller'
                            data='robotics'
                            product_type='ROBOTICS'
                            rating='5.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='10+ Age'
                            imageurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSJmFQ8bTAozxuP0NqrU3C1p2KX3vZ8Ihs8a-zhb8lIufpa3KG-xWmmKnbHE&usqp=CAc'
                            data_category='best seller'
                            data='vedic math'
                            product_type='VEDIC MATH'
                            rating='4.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='8+ Age'
                            imageurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSJmFQ8bTAozxuP0NqrU3C1p2KX3vZ8Ihs8a-zhb8lIufpa3KG-xWmmKnbHE&usqp=CAc'
                            data_category='best seller'
                            data='IOT'
                            product_type='IOT'
                            rating='5.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                        <Cards age='10+ Age'
                            imageurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSJmFQ8bTAozxuP0NqrU3C1p2KX3vZ8Ihs8a-zhb8lIufpa3KG-xWmmKnbHE&usqp=CAc'
                            data_category='best seller'
                            data='vedic math'
                            product_type='VEDIC MATH'
                            rating='4.0'
                            new_price='2000'
                            old_price='3000'
                            about_product='Lorem ipsum dolor sit amet consectetur.'
                        />
                    </div>
                </div>
                {/* other section  */}  
            </div>
            {/* product section  */}
        </div>
    )
}

export default Product
