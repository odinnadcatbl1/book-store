const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const BookAddedToCard = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CARD',
        payload: bookId
    };
};


const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data)=> {dispatch(booksLoaded(data))})
        .catch((error)=> {dispatch(booksError(error))});
};

export {
    fetchBooks,
    BookAddedToCard
};