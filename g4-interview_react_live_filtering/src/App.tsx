import { useState, useEffect } from "react";
import "./App.scss";
import BookSearch from "./components/BookSearch";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/nuoxoxo/in/main/live_filter_search/sample_data/books.json");
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
};

export default App;
