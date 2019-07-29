import Book from './Book';
import React from 'react';

class Library extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open:true
        }
        this.toogleOpenedOrClosed= this.toogleOpenedOrClosed.bind(this)
    }

    toogleOpenedOrClosed(){
        this.setState({
            open:!this.state.open
        })
    }

    render() {
        const books=this.props.books;
        return (
            <div>
                <h1>Library is {this.state.open?'Opened':'Closed'}</h1>
                <button onClick={this.toogleOpenedOrClosed}>Change</button>
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