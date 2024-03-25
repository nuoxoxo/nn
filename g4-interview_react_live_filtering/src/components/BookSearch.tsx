import React, { useState } from "react";

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
  
  // TODO your code here
//   console.log(props)
  
  const [searchData, setSearchData] = useState({
    author: '',
    title: '',
    country: '',
    language: '',
    year: '',
    pages: '',
  });
  
  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchData({
      ...searchData,
      [name]: value
    });
  };

  // const filteredBooks = props.books.filter(book: Book => {
  const filteredBooks = props.books.filter((book: Book) => {

    if (!Object.values(searchData).some(value => value !== '')) {
      return true
    }
    //return Object.entries()
    
    ///*
    return Object.entries((searchData as Book)).every(([key, value]: [string, any]) => {
      console.log(key, value);
      if (book.hasOwnProperty(key)) {
          let book_val_lower = (book as any)[key].toString().trim().toLowerCase();
          let search_val_lower = value.trim().toLowerCase();
          if (searchData[key] !== '') {
              if (typeof (book as any)[key] === 'number' && !book_val_lower.includes(search_val_lower)) {
                  return false;
              }
              if (!book_val_lower.includes(search_val_lower)) {
                  return false;
              }
          }
      }
      return true;
  });
    //*/
});
  
  
  return (
    <>
      <form>
      <div className='InputGroup' style={{display: 'flex', flexDirection: 'column', width:'42%'}}>
        <input data-testid="author" name="author" value={searchData.author} onChange={handleInputChange}  placeholder="author" />
        <input data-testid="title" name="title" value={searchData.title} onChange={handleInputChange}  placeholder="title" />
        <input data-testid="country" name="country" value={searchData.country} onChange={handleInputChange}  placeholder="country" />
        <input data-testid="language" name="language" value={searchData.language} onChange={handleInputChange}  placeholder="language" />
        <input data-testid="year" name="year" value={searchData.year} onChange={handleInputChange}  placeholder="year" />
      </div>
      </form>
      {filteredBooks.map((book, index) => (
        <div key={index} className='book-result' style={{display: 'flex', flexDirection: 'column', margin:'5px'}}>
          <div data-testid="book" className='book-content' style={{display: 'flex', flexDirection: 'column', margin:'5px'}}>
            <div style={{display: 'flex'}}><span style={{marginRight:'3px'}}>Author: </span><span>{book.author}</span></div>
            <div style={{display: 'flex'}}><span style={{marginRight:'3px'}}>Country: </span><span>{book.country}</span></div>
            <div style={{display: 'flex'}}><span style={{marginRight:'3px'}}>Language: </span><span>{book.language}</span></div>
            <div style={{display: 'flex'}}><span style={{marginRight:'3px'}}>Pages: </span><span>{book.pages}</span></div>
            <div style={{display: 'flex'}}><span style={{marginRight:'3px'}}>Title: </span><span>{book.title}</span></div>
            <div style={{display: 'flex'}}><span style={{marginRight:'3px'}}>Year: </span><span>{book.year}</span></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookSearch;