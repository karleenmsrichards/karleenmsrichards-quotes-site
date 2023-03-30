import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { setInputValueContext } from "./App.js";

export const Header = () => {
  const { setInputValue } = useContext(setInputValueContext);
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-logo">
        <a href="/" className="header-logo-p">
          tailoredQuote.com
        </a>
      </div>
      <div className="header-nav-wrapper">
        <a href="/quotes" className="header-quotes-section-text">
          QUOTES
        </a>

        <a
          href="/quotes/favourites"
          className="header-quotes-section-text header-quotes-section-favourites"
        >
          FAVOURITES
        </a>

        <div className="quotes-label-input">
          <label className="search-quote-label" htmlFor="search-quote">
            Search
          </label>
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log("h:", e.target.value);
              navigate(`/quotes/search?q=${e.target.value}`);
            }}
            name="search-quote"
            className="quotes-input"
            // onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};
