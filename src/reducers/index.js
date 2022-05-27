
const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [],
    orderTotal: 270,
}; 

const updateCardItems = (cardItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cardItems,
            item
        ];
    }

    return [
        ...cardItems.slice(0, idx),
        item,
        ...cardItems.slice(idx+1),
    ]
};

const updateCardItem = (book, item={}) => {
    const {id=book.id, count=0, title=book.title, price=0} = item;
    return {
        id, 
        title,
        count: count+1,
        price: +price + +book.price
    };
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
            const itemIndex = state.cardItems.findIndex(({id}) => id === bookId);
            const item = state.cardItems[itemIndex];
            const newItem = updateCardItem(book, item);
            return {
                    ...state,
                    cardItems: updateCardItems(state.cardItems, newItem, itemIndex)
                };
          
    } // switch
    return state;
};

export default reducer;