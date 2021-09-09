import React from 'react'
import './product.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Cards from '../cards/cards';
import {useStateValue} from '../Stateprovider';

function Product() {
    const [{ basket,product}, dispatch] = useStateValue();
    return (
        <div className='product_container'>
            <div className='product_category'>
                <div className='products'>
                    <h3 className='category_heading'>ALL  PRODUCT</h3>
                    <div>
                        <ShoppingCartOutlinedIcon className="cart_icons"/>
                        <span>{basket?.length}</span>
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
            <div className='product_section'>
                <div className='recommended-section'>
                    <h3 className='recommended-heading'>Recommended Kits</h3>
                    <div className='cards-item'>
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
                    </div>
                </div>
                <div className='other-section'>
                    <h3 className='other-heading'>Other Kits</h3>
                    <div className='cards-item'>
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
                             imageurl='https://www.webhosting.uk.com/blog/wp-content/uploads/2017/09/The-Internet-of-Things-Benefits-and-Challenges-of-IoT-for-Business-SOCIA....png'
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
            </div>
        </div>
    )
}

export default Product
