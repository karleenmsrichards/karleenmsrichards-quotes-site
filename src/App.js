import "./App.css";
import { Header } from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllQuotes } from "./AllQuotes";
import { Home } from "./Home";
import { SearchPage } from "./SearchPage";
import { MyFavourites } from "./MyFavourites";
import { createContext, useEffect, useState } from "react";
export let dataContext = createContext(null);
export let setInputValueContext = createContext("");

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://karleenmsrichards-quotes.glitch.me/quotes/search?term=${inputValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [inputValue]);

  return (
    <div className="App">
      <dataContext.Provider value={{ data }}>
        <setInputValueContext.Provider value={{ setInputValue }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quotes" element={<AllQuotes />} />
              <Route path="/quotes/search" element={<SearchPage />} />
              <Route path="/quotes/favourites" element={<MyFavourites />} />
            </Routes>
          </BrowserRouter>
        </setInputValueContext.Provider>
      </dataContext.Provider>
    </div>
  );
}

export default App;
