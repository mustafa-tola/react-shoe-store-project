import React, { useEffect, useContext, createContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import {Home} from "./components/Home/Home";
import {Cart} from "./components/Cart/Cart";
import {ShoeDetail} from "./components/ShoeDetail/ShoeDetail";
import {About} from "./components/About/About";
import {NotFound} from "./components/NotFound/NotFound";

function App() {

  return (
    <GlobalProvider>
      <Router>
        <nav>
          <Link to="/" style={{ "float": "left" }}>Mustafa's Shoes</Link>
          <Link to="cart" style={{ "float": "right" }}>Cart</Link>
          <Link to="about" style={{ "float": "right" }}>About</Link>
          <Link to="/" style={{ "float": "right" }}>Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":shoe" element={<ShoeDetail />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}



export default App;
