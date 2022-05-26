import React from 'react';
import BookList from '../book-list/book-list';
import ShoppingCardTable from '../shopping-card-tabe/shopping-card-table';

const HomePage = () => {
    return (
        <div>
        <BookList/>
        <ShoppingCardTable/>
        </div>
    );
};

export default HomePage;