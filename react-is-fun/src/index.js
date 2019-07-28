import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library';

const bookList = [
    { author: 'j.k. rowling', title: 'harry potter', pages: '456' },
    { author: 'balaguruswamy', title: 'basics of c', pages: '345' }
]

ReactDOM.render(
    <Library books={bookList} />, document.getElementById('root')
)
