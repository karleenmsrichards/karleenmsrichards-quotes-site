import { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState("");

  const url = `https://karleenmsrichards-quotes.glitch.me/quotes/random`;

  function handleClick() {
    window.location.reload();
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return (
    <div className="hero-wrapper">
      <p>"{data?.quote}"</p>
      <p>Author: {data?.author}</p>
      <button className="hero-btn" onClick={handleClick}>
        new Quote
      </button>
    </div>
  );
};
