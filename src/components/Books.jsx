import { useState,useEffect } from "react";
import BookJSON from "./Books.json";


function Books(){

    const [leftSideBooks,setLeftSideBooks] = useState([]);
    const [rightSideBooks,setRightSideBooks] = useState([]);
    // const [resest,setReset] = useState(false);

    useEffect(function(){
        let allBooks = []
        BookJSON.forEach((book) => {
            if (book.Fav == "Y") {
                allBooks.push(<li  key={book.Title}>{book.Title}-{book.Author}</li>)
            }
        })
            


        const lenBooks = Math.ceil(allBooks.length / 2)

        setLeftSideBooks(allBooks.slice(0,lenBooks))
        setRightSideBooks(allBooks.slice(lenBooks))
    }
    ,[])

    return <div className="book-list-container">
        <h2>Here's a list of my favourite books in case you're curious.</h2>
        <ul>
            {/* {BookJSON.map((book) => <li className={book.Fav == "Y" && "favorite"} key={book.Title}>{book.Title}-{book.Author}</li>)} */}
            <div className="leftBooks">{leftSideBooks}</div>
            <div className="rightBooks">{rightSideBooks}</div>
            
        </ul>
    </div>
}


export default Books