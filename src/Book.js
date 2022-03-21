import React, {Component} from 'react';


class Book extends Component{
    state={
        value: this.props.shelf
    }
    handleChange = e => {
        const {value} = e.target;
        this.setState({value});
        this.props.move(this.props.book, value)
        console.log(value)

    }
    render() {
        const {book} =this.props;

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: ""})`}}>
                        </div>
                        <div className="book-shelf-changer">
                            <select onChange={this.handleChange} value={this.state.value}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors[0] : "No author"}</div>
                </div>
            </li>
    
)}}
export default Book 