import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myorders from './Myorders';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  
  <Routes> 
          
    
    
          <Route path='/myorders' element={<Myorders />} />
         <Route path='/' element={<App />} />
          </Routes>
        </BrowserRouter>
);


reportWebVitals();
