import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from "./StateProvider";
//import { user } from 'firebase-functions/auth';
//import { user } from 'firebase/compat/auth';

function Checkout() {
    // eslint-disable-next-line
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://wpadvancedads.com/wp-content/uploads/2015/08/728x90.png" 
                    alt=""
                />
                <div>
                    {/* <h3>Hello, {user?.email}</h3> */}
                    <h3>Hello, {}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                        
                        {basket.map (item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
