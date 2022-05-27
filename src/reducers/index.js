
const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [],
    orderTotal: 270,
};

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_REQUEST': 
            return {
                ...state,
                loading: true,
                books: [],
                error: null,
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false, 
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CARD':
            const bookId = action.payload;
            const book = state.books.find((book)=> book.id === bookId);
            const newItem = {
                id: bookId,
                name: book.title,
                count: 1,
                price: book.price
            }
            return {
                ...state,
                cardItems: [
                    ...state.cardItems,
                    newItem
                ]
            };
    }
    return state;
};

export default reducer;