import React, { useState } from "react";
import ReactDOM from "react-dom";


function RandomQuoteGenerator() {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "An unexamined life is not worth living.",
    "The only way to do great work is to love what you do.",
    "In the middle of every difficulty lies opportunity.",
    "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "An unexamined life is not worth living.",
  "The only way to do great work is to love what you do.",
  "In the middle of every difficulty lies opportunity.",
  "Do not wait for leaders; do it alone, person to person.",
  "Success usually comes to those who are too busy to be looking for it.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Strive not to be a success, but rather to be of value.",
  "The future belongs to those who believe in the beauty of their dreams."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: "600px" }}>
        <h2 className="text-primary mb-3">Random Quote Generator</h2>
        <blockquote className="blockquote mb-4">
          <p className="mb-0 fs-5">"{quote}"</p>
        </blockquote>
        <button
          onClick={getRandomQuote}
          className="btn btn-outline-success btn-sm"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<RandomQuoteGenerator />, document.getElementById("root"));
