import React, {useEffect} from "react";
import BookListItem from '../book-list-item/book-list-item'
import { connect } from "react-redux";
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded, booksRequested, booksError} from '../../actions';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './book-list.css';

const BookList = (props) => {
    const {books, loading, error} = props;

        useEffect(()=>{
            const {bookstoreService, booksLoaded, booksRequested, booksError} = props;
            booksRequested();
            bookstoreService.getBooks()
                .then((data)=> {booksLoaded(data)})
                .catch((error)=> {booksError(error)});
            }, []                    
        );
    
        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
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

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = {
    booksLoaded, 
    booksRequested,
    booksError,
};

export default withBookstoreService()
    (connect(mapStateToProps, mapDispatchToProps)(BookList));