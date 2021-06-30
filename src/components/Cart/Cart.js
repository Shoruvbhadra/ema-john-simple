import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        price = price + product.price; 
    }
    let shipping = 10.99;
    if (price > 50) {
       shipping = 5.99;
    }else{
        shipping = 10.99;
    }
    let total = price + shipping;
    if(price === 0){
        total  = 0;
    }

    return (
        <div>
            <h2>order summary</h2>
            <p>Items ordered:{cart.length} </p>
            <p>Price: {price}</p>
            <p>Shipping Cost :{shipping}</p>
            <h3>Total :{total} </h3>
        </div>
    );
};

export default Cart;