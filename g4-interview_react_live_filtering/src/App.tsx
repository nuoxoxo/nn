import { useState, useEffect } from 'react';
import './App.css';
import BookSearch from './components/BookSearch';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("./sample_data/books.json");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div id="app">
      <BookSearch books={books} />
    </div>
  );
}

export default App;