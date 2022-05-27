import React, {useEffect} from "react";
import BookListItem from '../book-list-item/book-list-item'
import { connect } from "react-redux";
import withBookstoreService from '../hoc/with-bookstore-service';
import {fetchBooks} from '../../actions';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './book-list.css';

const BookList = (props) => {

        useEffect(
            ()=>{ props.fetchBooks() }, []                    
        );
    
        const {books, loading, error} = props;

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

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps; // ownProps - получает свойства от компонента выше по иерархии (здесь от withBookstoreService в connect и далее)
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    };
};

export default withBookstoreService()
    (connect(mapStateToProps, mapDispatchToProps)(BookList));