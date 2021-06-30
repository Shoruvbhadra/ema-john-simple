import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
        const {img, name, seller, price, stock} = props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="pro-info">
                <h3 className="product-name">{name}</h3> <br />
                <p>by seller: {seller}</p>
                <h4 className="price">price : ${price}</h4>
                <p className="stock">stock: {stock}</p>
                <button onClick={()=>props.handleProduct(props.product)} className="shop-btn"> <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button> 
            </div>
           
           
        </div>
    );
};

export default Product;