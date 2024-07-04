import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Myorders from './Myorders';  

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showOrders, setShowOrders] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart([...cart, product]);
    
    console.log(cart);
  };
  const removeFromCart = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart);
    
  };

  const toggleOrders = () => {
    setShowOrders(!showOrders); 
  };
 
  return (
    <>
      <header className="header">
        <button className='button' onClick={toggleOrders}>{showOrders ? 'Hide Orders' : 'Show Orders'} </button>  
      </header>
      {showOrders && <Myorders cart={cart} remove={removeFromCart} />}  
      <div className="product-container">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <h1>{product.title}</h1>
            <h2>{product.category}</h2>
            <h3>${product.price}</h3>
            <img src={product.image} alt={product.title} />
            <h4>{product.description}</h4>
            <button onClick={() => addToCart(product)} className='button'>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
