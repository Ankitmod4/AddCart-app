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

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(cartItem => cartItem.id === product.id);
    if (existingProduct) {
      setCart(cart.map(cartItem =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    document.getElementById(`quantity-${product.id}`).value = 1;
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
            <img src={product.image} alt={product.title} style={{ width:"400px",height:"300px" }} />
            <h4>{product.description} </h4>
            <div>
              <label htmlFor={`quantity-${product.id}`}>Quantity: </label>
              <input
                type="number"
                id={`quantity-${product.id}`}
                min="1"
                defaultValue="1"
                style={{ width: '50px', marginRight: '10px' }}
              />
              <button onClick={() => {
                const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value, 10);
                addToCart(product, quantity);
              }} className='button'>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
