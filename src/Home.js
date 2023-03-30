import { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const url = `https://karleenmsrichards-quotes.glitch.me/quotes/random`;

  function newQuoteHandleClick() {
    window.location.reload();
  }

  function favouriteHandleClick() {
    console.log(data.quote);
    setFavourites(...favourites.concat(data.quote));
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => err);
  }, [url]);

  return (
    <div className="hero-wrapper">
      <h1>your Tailored quote...</h1>

      {!data?.quote ? (
        <p>"...your Quote will be with you soon"</p>
      ) : (
        <p className="hero-quote">"{data?.quote}"</p>
      )}
      <p>
        <span className="bold-text">Author:</span> {data?.author}
      </p>
      <div className="hero-btns-wrapper">
        <button className="hero-btn" onClick={newQuoteHandleClick}>
          New Quote
        </button>

        <button className="hero-btn" onClick={favouriteHandleClick}>
          Add to Favourites
        </button>
      </div>
    </div>
  );
};
