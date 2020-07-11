import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { data, total, removeFromCart, addQuantity, subtractQuantity } = useContext(GlobalContext);

    useEffect(() => {
        localStorage.setItem('cartData', JSON.stringify(data));
        localStorage.setItem('totalAmount', JSON.stringify(total));
        // console.log(JSON.parse(localStorage.getItem('cartData')));
        localStorage.removeItem('cartData');
        localStorage.removeItem('totalAmount');
    }, [])
    return (
        <div>
            <h1 style={{ "textAlign": "center" }}>Your Cart</h1>
            <ul style={{ "marginTop": "10px" }}>
                {data.length ? (data.map((shoe) => {
                    return (
                        <li key={shoe.id} style={{ "border": "3px solid black", "padding": "10px", "marginTop": "10px", "marginBottom": "10px" }}>
                            <Link to={`/${shoe.id}`} >
                                <h1>{shoe.name}</h1>
                                <img src={shoe.img} alt={shoe.name} />
                            </Link>
                            <p>{shoe.desc}</p>
                            <p style={{ "textAlign": "center" }}><b>Price:</b> {shoe.changedPrice}$</p>
                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <button style={{ "height": "25px", "display": "flex", "justifyContent": "center" }} onClick={() => addQuantity(shoe.id)}>+</button>
                                <span><b>Quantity:</b> {shoe.quantity}</span>
                                <button style={{ "height": "25px", "display": "flex", "justifyContent": "center" }} onClick={() => subtractQuantity(shoe.id)}>-</button>
                            </div>

                            <button style={{ "backgroundColor": "rgba(250,0,0,0.5)", "color": "black", "height": "25px" }} onClick={() => removeFromCart(shoe.id)}>Remove Item From Cart</button>
                        </li>
                    )
                })) : <p>There are no products in cart</p>}
            </ul>
            <p style={{ "textAlign": "center" }}><b>Total Amount:</b> {total ? total : 0}$</p>
        </div>
    )
}