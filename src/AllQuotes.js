import { useEffect, useState } from "react";
import { QuoteCard } from "./QuoteCard";

export const AllQuotes = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://karleenmsrichards-quotes.glitch.me/quotes`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="quotes-wrapper">
      <h1>Quotes...</h1>
      <QuoteCard data={data} />
    </div>
  );
};
