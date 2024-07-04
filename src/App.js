import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Myorders from './Myorders';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); 

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
  
  const addToCart = (product) => {
    setCart([...cart, product]); 
    console.log(cart)
  };
  useEffect(() => {
    console.log(cart); 
  }, [cart]);
  return (
    <>
      
      <div className="product-container">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <h1>{product.title}</h1>
            <h2>{product.category}</h2>
            <h3>${product.price}</h3>
            <img src={product.image} alt={product.title} />
            <h4>{product.description}</h4>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
      <Myorders cart={cart} />
      

     
    </>

  );
}

export default App;
