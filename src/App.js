import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import SearchBar from './SearchBar';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState({});
  const [quotesByAuthor, setQuotesByAuthor] = useState([]);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote({ text: data.content, author: data.author });
  };

  const fetchQuotesByAuthor = async (author) => {
    const response = await fetch(`https://api.quotable.io/quotes?author=${author}`);
    const data = await response.json();
    setQuotesByAuthor(data.results);
  };

  return (
    <div className="app-container">
      <h1 className="title">Quote of the Day</h1>
      <QuoteCard quote={quote} />
      <button onClick={fetchRandomQuote} className="refresh-button">Get Another Quote</button>

      <SearchBar onSearch={fetchQuotesByAuthor} />

      <div className="quote-list">
        {quotesByAuthor.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default App;
