import { useEffect, useState } from "react";
import { QuoteCard } from "./QuoteCard";

export const Home = () => {
  const [data, setData] = useState(null);
  const [favourite, setFavourite] = useState([]);

  const url = `https://karleenmsrichards-quotes.glitch.me/quotes/random`;

  function newQuoteHandleClick() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => err);
  }

  function favouriteHandleClick() {
    console.log(data);
    setFavourite(favourite.concat(data));
  }

  useEffect(() => {
    newQuoteHandleClick();
  }, []);

  return (
    <div>
      <div className="hero-wrapper">
        <h1>your Tailored quote...</h1>
        <>
          {!data?.quote ? <p>"...loading"</p> : <p>"{data?.quote}"</p>}
          <p>
            <span className="bold-text">Author:</span> {data?.author}
          </p>
        </>
        <button className="hero-btn" onClick={favouriteHandleClick}>
          add To Favourites
        </button>
        <button className="hero-btn" onClick={newQuoteHandleClick}>
          new Quote
        </button>
      </div>
      {favourite.length > 0 ? (
        <div className="quotes-wrapper">
          <QuoteCard data={favourite} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
