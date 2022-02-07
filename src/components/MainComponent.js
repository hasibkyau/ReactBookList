import React from "react";
import { Component } from "react/cjs/react.production.min";
import bookList from "../assets/books";
import "../styleSheet/style.css"
import CardBook from "./Representational/CardBook";
class MainComponent extends Component{
    state = {
        books: bookList,
        toggle: true,
    }

    updateBookName(event, book){
        console.log(book.id);
        const books = [...this.state.books];
        books[book.id - 1].bookName = event.target.value;
        this.setState({
            books : books
        })
        console.log(books);
    }
    deleteBook=(book, index)=>{
        console.log("Deleted");
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books : books
        })
    }
    toggleBook=()=>{
        console.log(this.state.toggle);
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render(){
        //console.log(this.state.books.map());
        let books = null;
        if(this.state.toggle){
            books = this.state.books.map((book, index) => {
                return(
                    <CardBook bookName={book.bookName}
                    writer = {book.writer}
                    id = {book.id}
                    nameChange = {(event) => this.updateBookName(event, book)}
                    deleteBook = {(book)=>this.deleteBook(book, index)}
                    />       
                );
              })
        }

        return(
            <div>
                <h1>bookList</h1>
                <button onClick={this.toggleBook}>ToggleBook</button>
                {books}        
            </div>
            )
    }
}

export default MainComponent;