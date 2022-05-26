import React from "react";
import './shop-header.css'

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header">
            <a className="logo text-dark" href="#">BookStore</a>
            <div className="shopping-card">
                In the basket: {numItems} items (${total})
            </div>
        </header>
    );
};

export default ShopHeader;