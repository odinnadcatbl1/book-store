import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {
    const books = [            {id: 1,
        title: 'Python',
        author: 'Mark Lythz'},
        {id: 2,
        title: 'Gogol',
        author: 'Mertvie dushy'}]
    return (
        <BookList books={books}/>
    );
};

export default HomePage;