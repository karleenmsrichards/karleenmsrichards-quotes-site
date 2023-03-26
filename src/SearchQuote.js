import { useState, useEffect } from "react";
import { QuoteCard } from "./QuoteCard";

export const SearchQuote = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch(`http://localhost:4444/quotes/search?term=${inputValue}`)
    fetch(
      `https://karleenmsrichards-quotes.glitch.me/quotes/search?term=${inputValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [inputValue]);

  return (
    <div className="quotes-wrapper">
      <div className="quotes-label-input">
        <label
          className="search-quote-label"
          htmlFor="search-quote"
          style={{ color: inputValue ? "black" : "rgb(184, 53, 239)" }}
        >
          search Quote
        </label>
        <input
          name="search-quote"
          className="quotes-input"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {inputValue ? (
        <div className="quote-content">
          <h1>your Results...</h1>
          <QuoteCard data={data} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
