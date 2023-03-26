import { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState(null);

  const url = `https://karleenmsrichards-quotes.glitch.me/quotes/random`;

  function handleClick() {
    window.location.reload();
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
      <>
        {!data?.quote ? <p>"...loading"</p> : <p>"{data?.quote}"</p>}
        <p>
          <span className="bold-text">Author:</span> {data?.author}
        </p>
      </>
      <button className="hero-btn" onClick={handleClick}>
        another Tailored quote
      </button>
    </div>
  );
};
