import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">- {quote.author}</p>
    </div>
  );
};

export default QuoteCard;
