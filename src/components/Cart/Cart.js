import React from 'react';
import './Cart.css';

const Cart = (props) => {

    // font awesome icon 
    const personIcon = <i className="fas fa-user-tie"></i>;
    const personIconCheck = <i class="fas fa-user-check"></i>;


    // destructuring 
    const { cart } = props || {};

    // reduce the sum
    const totalReducer = (preValue, currentValue) => preValue + currentValue.salary
    const totalSalary = cart.reduce(totalReducer, 0)

    return (
        <div className=" cart-container mt-5 bg-dark text-white rounded me-5  py-5 ps-2">
            <h1 className="text-center cart-item">Cart Item</h1>
            <hr />
            <h4 className="text-center">{personIcon} Person Added: {cart.length}</h4>
            <h5 className="text-center">Total Amount: ${totalSalary}</h5>
            <hr />
            <ul className="person-name">
                {
                    cart.map(person => <li><h3>{personIconCheck} {person.name}</h3></li>)
                }
            </ul>
        </div>
    );
};

export default Cart;