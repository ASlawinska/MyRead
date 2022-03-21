import React, { Component } from "react";
import {Link} from "react-router-dom"
// import SearchInput from './SearchInput'
import Book from './Book'

class SearchScreen extends Component {
    state= {
        value: ''
    }
    handleChange = e => {
        const inputValue = e.target.value;
        this.setState({
            value: inputValue},
            () => {this.props.choose(inputValue)})
    }

    render() {
        const {books, chooseBooks, move, choose, clearInput} = this.props;
        const actualization = chooseBooks.map(book => {
            books.map( actual => {
                if (actual.id === book.id) {
                    book.shelf = actual.shelf;
                }
                return actual;
            });
            return book;
        });
        return(
            <div className="search-books">
                <div className="search-books-bar">
                <Link to={'/'} className="close-search" onClick={clearInput}>Close</Link>
                <div className="search-books-input-wrapper">
                <input
                    type="text"
                    value={this.state.value}
                    placeholder="Search by title or author"
                    onChange={this.handleChange} choose={choose}></input>
                </div>
                </div>


                <div className="search-books-results">
                <ol className="books-grid">
                    {actualization.map(book => (
                    <Book
                    key={book.id}
                    book={book}
                    shelf={book.shelf ? book.shelf : 'none'}
                    move={move}
                    />
                    ))}
                </ol>
                {this.state.value !== 0 && chooseBooks === [] && <h1>No results</h1>}
            </div>
            </div>
        )
    }
}
export default SearchScreen