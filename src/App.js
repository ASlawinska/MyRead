import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import HomeScreen from './HomeScreen'
import SearchScreen from './SearchScreen'

// add libraryshelf
const libraryshelf = [
  {key:'currentlyReading', name: 'Currently Reading'},
  {key:'wantToRead', name: 'Want to read'},
  {key:'read', name: 'Read'}
]


class App extends Component {
  state = {
    books: [],
    chooseBooks:[],

    showSearchPage: false
  }
  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books: books });
      })
      .catch(err => {
        console.log(err);
      });
  };
  move = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(error => console.log(error))
    if (shelf === "none") {
      this.setState(prevState => ({
        books: prevState.books.filter(curBook => curBook.id !== book.id)}))
      } else {
        book.shelf = shelf;
        this.setState(prevState => ({
          books: prevState.books.filter(curBook => curBook.id !== book.id).concat(book)}))
    }
  }
  choose = (query) => {
    if (query.length > 0) {
    BooksAPI.search(query).then(books => {
      if (books.error) {
        this.setState({ chooseBooks: [] });
      } else {
        this.setState({ chooseBooks: books });
      }
    });
  } else {
    this.setState({ chooseBooks: [] });
  }}

  clearInput = () => {
    this.setState({chooseBooks: []})
  }


  render() {
    const { books, chooseBooks}=this.state
    return (
      <div className="app">
        <Route exact path="/" 
        render={() => (
          <HomeScreen 
          books={books} 
          libraryshelf={libraryshelf} 
          move={this.move}
          />
        )}/>
        <Route path="/search"
          render={() => (<SearchScreen 
          books={books}
          chooseBooks={chooseBooks}
          move={this.move}
          choose={this.choose}
          clearInput={this.clearInput}/>
          )}
        />

      </div>
    )
  }
}

export default App
