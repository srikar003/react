import Book from './Book';
import React from 'react';

class Library extends React.Component {
    render() {
        const books=this.props.books;
        return (
            <div>
                {books.map(
                    (book, i) => {
                        return <Book key={i} author={book.author} title={book.title} pages={book.pages} />
                    }
                )}
            </div>
        )
    }
}

export default Library;