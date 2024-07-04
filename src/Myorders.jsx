// Myorders.js
import React from 'react';
import './Myorder.css'
const Myorders = ({ cart,remove}) => {

  
  return (
    <div>
      <h2>My Orders</h2>
      <ul className='product-container'>
        {cart.map((item, index) => (
          <li key={index}>
            <div>{item.title}</div>
            <img src={item.image} width={100} alt="" />
            <div>${item.price}</div>
            <button className='buttonone' onClick={ ()=>remove(item)}>Remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Myorders;
