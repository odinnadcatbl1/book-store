import React from "react";

import './book-list-item.css'

const BookListItem = ({book, onAddedToCard}) => {
    const {title, author, price, image} = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={image} alt="cover"/>
            </div>
            <div className="book-details">
                <span href="#" className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button 
                    onClick={onAddedToCard}
                    className="btn btn-info add-to-card">
                    Add to card
                </button>
            </div>
        </div>
    );
};

export default BookListItem;