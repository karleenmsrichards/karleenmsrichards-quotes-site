import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const Home = () => {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  const url = `https://karleenmsrichards-quotes.glitch.me/quotes/random`;

  function handleClick() {
    window.location.reload();
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // setLoading(false);
      })
      .catch((err) => err);
  }, [url]);

  //loading ? (
  //   <Loading />
  // ) :
  return (
    <div className="hero-wrapper">
      <h1>random Quote...</h1>
      <>
        {!data?.quote ? <p>"...loading"</p> : <p>"{data?.quote}"</p>}
        <p>
          <span className="bold-text">Author:</span> {data?.author}
        </p>
      </>
      <button className="hero-btn" onClick={handleClick}>
        new Quote
      </button>
    </div>
  );
};
