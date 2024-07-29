import { useState,useEffect } from "react";
import BookJSON from "./Books.json";
// TODO: create a CSV file with all the books you've read and have it being represented as bullet points.


function Books(){

    const [leftSideBooks,setLeftSideBooks] = useState([]);
    const [rightSideBooks,setRightSideBooks] = useState([]);
    // const [resest,setReset] = useState(false);

    useEffect(function(){
        let allBooks = []
        BookJSON.forEach((book) => 
            allBooks.push(<li className={book.Fav == "Y" ? "favorite": ""} key={book.Title}>{book.Title}-{book.Author}</li>))
        const lenBooks = Math.ceil(allBooks.length / 2)

        setLeftSideBooks(allBooks.slice(0,lenBooks))
        setRightSideBooks(allBooks.slice(lenBooks))
    }
    ,[])

    return <div className="book-list-container">
        <h2>Here's a list of the books I've read over the years, with my favorites colored in Red. Hopefully, adding to this list will keep me motivated to continue reading.</h2>
        <ul>
            {/* {BookJSON.map((book) => <li className={book.Fav == "Y" && "favorite"} key={book.Title}>{book.Title}-{book.Author}</li>)} */}
            <div className="leftBooks">{leftSideBooks}</div>
            <div className="rightBooks">{rightSideBooks}</div>
            
        </ul>
    </div>
}


export default Books