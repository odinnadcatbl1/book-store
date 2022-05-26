import React, {useEffect} from "react";
import BookListItem from '../book-list-item/book-list-item'

import './book-list.css';

const BookList = (props) => {
    const {books} = props;

        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        );
                    })
                }
            </ul>
        );
   
};

export default BookList;