import React, { useContext } from 'react';
import shoes from "../../shoes.json";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

export const Home = () => {
  const { addToCart } = useContext(GlobalContext);
  return (
    <div>
      <h1 style={{ "textAlign": "center" }}>Here You Can Find The List Of Shoes Which We Sell</h1>
      <ul style={{ "marginTop": "10px" }}>
        {Object.entries(shoes).map(([shoe, { name, img, desc, price }]) => {
          return (
            <li key={shoe} style={{ "border": "3px solid black", "padding": "10px", "marginTop": "10px", "marginBottom": "10px" }}>
              <Link to={`${shoe}`} >
                <h1>{name}</h1>
                <img src={img} alt={name} />
              </Link>
              <p>{desc}</p>
              <p style={{ "textAlign": "center" }}><b>Price:</b> {price}$</p>
              <button style={{ "backgroundColor": "grey", "color": "white", "height": "25px" }} onClick={() => addToCart(shoe)}>Add To Cart</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}