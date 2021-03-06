import React, {useEffect} from "react";
import BookListItem from '../book-list-item/book-list-item'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withBookstoreService from '../hoc/with-bookstore-service';
import {bookAddedToCard, fetchBooks} from '../../actions';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './book-list.css';

const BookList = ({books, onAddedToCard}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book} 
                                onAddedToCard={()=>onAddedToCard(book.id)}/>
                            </li>
                    );
                })
            }
        </ul>
    );
};

const BookListContainer = (props) => {

        useEffect(
            ()=>{ props.fetchBooks() }, []                    
        );
    
        const {books, loading, error, onAddedToCard} = props;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }

        return <BookList books={books} onAddedToCard={onAddedToCard}/>
};

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return {books, loading, error};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps; // ownProps - получает свойства от компонента выше по иерархии (здесь от withBookstoreService в connect и далее)
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCard: bookAddedToCard
        // fetchBooks: dispatch(fetchBooks(bookstoreService)()), // использование thunkmiddleware позволило использовать bindactionacreator
        // onAddedToCard: (id) => dispatch(bookAddedToCard(id))
    }, dispatch);
};

export default withBookstoreService()
    (connect(mapStateToProps, mapDispatchToProps)(BookListContainer));