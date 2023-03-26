import "./App.css";
import { Header } from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllQuotes } from "./AllQuotes";
import { Home } from "./Home";
import { SearchQuote } from "./SearchQuote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/search" element={<SearchQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
