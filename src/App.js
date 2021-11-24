import './App.css';
import React from "react";
import { Header } from './components/Header';
import {Routes,Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import { Home } from './components/Home';
import { MyCart } from './components/MyCart';

export default function App() {
 
  return (
   <Router>
     <Header/>
     <div className="App">
        <Routes>
          
          <Route path="/cart" element={<MyCart/>}/>
          <Route exact path="/" element={<Home/>}/>
        
        </Routes>
  </div>
   </Router>
  
  );
}



