import { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState("");

  const url = `http://localhost:4444/quotes/random`;

  function handleClick() {
    karleen();
  }
  function karleen() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }

  useEffect(() => {
    karleen();
  }, []);
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
