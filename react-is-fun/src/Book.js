import React from 'react';

const Book = ({ title, author, pages })=> {
        return (
            <section>
                <h1>{title}</h1>
                <h5>{author}</h5>
                <h6>{pages}</h6>
            </section>
        )
}

export default Book;