import React from 'react';

class Book extends React.Component {
    render() {
        const { title, author, pages } = this.props;
        return (
            <section>
                <h1>{title}</h1>
                <h5>{author}</h5>
                <h6>{pages}</h6>
            </section>
        )
    }
}

export default Book;