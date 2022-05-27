
const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [
        {
            id: 1,
            name: 'book1',
            count: 3,
            total: 150
        },
        {
            id: 2,
            name: 'book2',
            count: 4,
            total: 120
        }
    ],
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
    }
    return state;
};

export default reducer;