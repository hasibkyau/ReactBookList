import React from "react";
import "../../styleSheet/style.css"
 
const CardBook = (props) => {
    return(
        <div className="Book">
            <button onClick={props.deleteBook}>Delete</button>
            <h1>{props.bookName}</h1>
            <h2>{props.writer}</h2>
            <input type="text" onChange={props.nameChange}/>
        </div>
      
    );
}

export default CardBook;