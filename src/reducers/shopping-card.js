
const updateCardItems = (cardItems, item, idx) => {
    
    if (item.count === 0) {
        return [
            ...cardItems.slice(0, idx),
            ...cardItems.slice(idx+1),
        ];
    }
    
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

const updateCardItem = (book, item={}, quantity) => {
    const {id=book.id, count=0, title=book.title, price=0} = item;
    return {
        id, 
        title,
        count: count + quantity,
        price: +price + quantity*(+book.price)
    };
};

const updateOrder = (state, bookId, quantity) => {

    const {bookList: {books}, shoppingCard: {cardItems}} = state;

    const book = books.find(({id})=> id === bookId);
    const itemIndex = cardItems.findIndex(({id}) => id === bookId);
    const item = cardItems[itemIndex];
    const newItem = updateCardItem(book, item, quantity);

    return {
        orderTotal: 0,
        cardItems: updateCardItems(cardItems, newItem, itemIndex)
    };
};

const updateShoppingCard = (state, action) => {

    if (state === undefined) {
        return {
            cardItems: [],
            orderTotal: 0,
        };
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CARD':
            return updateOrder(state, action.payload,1);

        case 'BOOK_REMOVED_FROM_CARD': 
            return updateOrder(state, action.payload,-1);

        case 'ALL_BOOKS_REMOVED_FROM_CARD':
            const item = state.shoppingCard.cardItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        default: 
            return state.shoppingCard;
    }
};

export default updateShoppingCard;