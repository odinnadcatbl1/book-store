import React, {useEffect} from "react";
import BookListItem from '../book-list-item/book-list-item'
import { connect } from "react-redux";

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

const mapStateToProps = ({books}) => {
    return {books};
};

export default connect(mapStateToProps)(BookList);