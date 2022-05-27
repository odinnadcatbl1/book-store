
const initialState = {
    books: [],
    loading: true,
    error: null,
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case 'BOOKS_REQUESTED': 
            return {
                loading: true,
                books: [],
                error: null,
            };
        case 'BOOKS_ERROR':
            return {
                books: [],
                loading: false, 
                error: action.payload
            };
    }
    return state;
};

export default reducer;