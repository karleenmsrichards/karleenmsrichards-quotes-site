export const QuoteCard = ({ data }) => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <div className="quote-content">
            <p>
              <span className="bold-text">Quote: </span>"{item.quote}"
            </p>
            <p>
              <span className="bold-text">Author: </span>
              {item.author}
            </p>
          </div>
        );
      })}
    </div>
  );
};
