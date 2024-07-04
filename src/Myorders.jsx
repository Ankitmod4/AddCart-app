// Myorders.js
import React from 'react';

const Myorders = ({ cart }) => {
  // Ensure cart is defined and not empty before mapping
  if (!cart ) {
    return <div>Your cart is empty.</div>;
  } 

  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div>{item.title}</div>
            <div>${item.price}</div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Myorders;
