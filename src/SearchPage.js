import { useContext } from "react";
import { QuoteCard } from "./QuoteCard";
import { dataContext } from "./App.js";

export const SearchPage = () => {
  const { data } = useContext(dataContext);

  return (
    <div className=".header-quotes-section-text">
      <div className="search-results-wrapper">
        <h1>your Results...</h1>

        <p className="empty-search-text">...sorry, No quotes found</p>

        <QuoteCard data={data} />
      </div>
    </div>
  );
};
