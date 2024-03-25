import React, { useState } from "react";
import "./BookSearch.scss";

interface Book {
  author: string;
  title: string;
  country: string;
  language: string;
  year: string;
  pages: string;
}

interface BookSearchProps {
  books: Book[];
}

const BookSearch: React.FC<BookSearchProps> = (props) => {
  const [searchData, setSearchData] = useState({
    author: "",
    title: "",
    country: "",
    language: "",
    year: "",
    pages: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  // const filteredBooks = props.books.filter(book: Book => {
  const filteredBooks = props.books.filter((book: Book) => {
    if (!Object.values(searchData).some((value) => value !== "")) {
      return true;
    }

    return Object.entries(searchData as Book).every(
      ([key, value]: [string, any]) => {
        // console.log(key, value)
        if (book.hasOwnProperty(key)) {
          let book_val_lower = (book as any)[key]
            .toString()
            .trim()
            .toLowerCase();
          let search_val_lower = value.trim().toLowerCase();
          if ((searchData as any)[key] !== "") {
            if (
              typeof (book as any)[key] === "number" &&
              // !book_val_lower.includes(search_val_lower)
              !book_val_lower.startsWith(search_val_lower)
            ) {
              return false;
            }
            if (!book_val_lower.includes(search_val_lower)) {
              return false;
            }
          }
        }
        return true;
      }
    );
  });

  return (
    <div className="BookSearch-div">
      <form>
        <div
          className="InputGroup"
          // style={{ display: "flex", flexDirection: "column", width: "42%" }}
        >
          <input
            data-testid="author"
            name="author"
            value={searchData.author}
            onChange={handleInputChange}
            placeholder="Author"
          />
          <input
            data-testid="title"
            name="title"
            value={searchData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            data-testid="country"
            name="country"
            value={searchData.country}
            onChange={handleInputChange}
            placeholder="Country"
          />
          <input
            data-testid="language"
            name="language"
            value={searchData.language}
            onChange={handleInputChange}
            placeholder="Language"
          />
          <input
            data-testid="year"
            name="year"
            value={searchData.year}
            onChange={handleInputChange}
            placeholder="Year"
          />
        </div>
      </form>
      {filteredBooks.map((book, index) => (
        <div
          key={index}
          data-testid="book"
          className="book-result"
        >
          <div className="book-content-div">
            <span className="book-content book-content-left">Author: </span>
            <span className="book-content book-content-right">
              {book.author}
            </span>
          </div>
          <div className="book-content-div">
            <span className="book-content book-content-left">Country: </span>
            <span className="book-content book-content-right">
              {book.country}
            </span>
          </div>
          <div className="book-content-div">
            <span className="book-content book-content-left">Language: </span>
            <span className="book-content book-content-right">
              {book.language}
            </span>
          </div>
          <div className="book-content-div">
            <span className="book-content book-content-left">Pages: </span>
            <span className="book-content book-content-right">
              {book.pages}
            </span>
          </div>
          <div className="book-content-div">
            <span className="book-content book-content-left">Title: </span>
            <span className="book-content book-content-right">
              {book.title}
            </span>
          </div>
          <div className="book-content-div">
            <span className="book-content book-content-left">Year: </span>
            <span className="book-content book-content-right">{book.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookSearch;
