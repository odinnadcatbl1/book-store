import React from "react";
import './shop-header.css';
import { Link } from "react-router-dom";

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header">
            <Link to="/">
                <div className="logo text-dark">BookStore</div>
            </Link>
            <Link to="/card">
                <div className="shopping-card">
                    In the basket: {numItems} items (${total})
                </div>
            </Link>
        </header>
    );
};

export default ShopHeader;