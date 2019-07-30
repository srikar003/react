// import Book from './Book';
import React from 'react';
import ProductList from './ProductList';

class Library extends React.Component {

    state = {
        open: true,
        loading: false,
        data: [],
    }

    

    toogleOpenedOrClosed = () => {
        this.setState((prevState) => {
            return { open: !prevState.open }
        })
    }

    render() {
        // const books = this.props.books;
        return (
            <div>
                {/* <h1>Library is {this.state.open ? 'Opened' : 'Closed'}</h1>
                <button onClick={this.toogleOpenedOrClosed}>Change</button>
                {books.map(
                    (book, i) => {
                        return <Book key={i} author={book.author} title={book.title} pages={book.pages} />
                    }
                )} */}
                <ProductList data={this.state.data} loading={this.state.loading}></ProductList>
            </div>
        )
    }
}

export default Library;