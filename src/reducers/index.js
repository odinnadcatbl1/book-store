
const initialState = {
    books: [
        {id: 1,
        title: 'Python',
        author: 'Mark Lythz'},
        {id: 2,
        title: 'Gogol',
        author: 'Mertvie dushy'}
    ]
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
    }
    return state;
};

export default reducer;