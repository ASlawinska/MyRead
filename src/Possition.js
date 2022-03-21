import React, {Component} from 'react';
import Book from './Book'

class Possition extends Component {

    render() {
        const {books, shelf, move} = this.props;
        const booksShelf = books.filter(book => book.shelf === shelf.key);

        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {booksShelf.map(book => (
                    <Book key={book.id} book={book} shelf={shelf.key} move={move} />
                ))}
                </ol>
            </div>
            </div>
        )
    }
}
export default Possition