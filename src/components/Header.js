import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { Cart } from '../Context';

export function Header() {

    const {cart} = useContext(Cart);  /// importing context
    return (
        <div className="top-bar">
            <span>Happy shopping !!!</span>
            <ul className="nav">
                <li className="prod">
                    <Link to="/">Home</Link>
                </li>
                <li className="prod1">
                    <Link to="/cart">Cart({cart.length})</Link>
                </li>
            </ul>
        </div>
    )
}

