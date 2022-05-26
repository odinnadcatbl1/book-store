import React, {useEffect} from "react";
import BookListItem from '../book-list-item/book-list-item'
import { connect } from "react-redux";
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded} from '../../actions';
import Spinner from '../spinner/spinner'

import './book-list.css';

const BookList = (props) => {
    const {books, loading} = props;

        useEffect(()=>{
            const {bookstoreService, booksLoaded} = props;
            bookstoreService.getBooks()
                .then((data)=> {booksLoaded(data)});
            }, []                    
        );
        
        if (loading) {
            return <Spinner/>;
        }
        return (
            <ul className="book-list">
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

const mapStateToProps = ({books, loading}) => {
    return {books, loading};
};

const mapDispatchToProps = {
    booksLoaded
};

export default withBookstoreService()
    (connect(mapStateToProps, mapDispatchToProps)(BookList));