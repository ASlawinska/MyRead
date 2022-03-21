import React, { Component } from "react";
import AddButton from "./AddButton";
import Possition from "./Possition";

class HomeScreen extends Component {

    render() {
        const { libraryshelf, books, move } = this.props;
        return(
            <div className="list-books">
            <div className="list-books-title">
                <h1>My Library</h1>
            </div>
            <div className="list-books-content">
                {libraryshelf.map(shelf => (
                    <Possition key={shelf.key} shelf={shelf} books={books} move={move}/>
                ))}
            </div>
            <AddButton />
        </div>
        )
    }
}
export default HomeScreen