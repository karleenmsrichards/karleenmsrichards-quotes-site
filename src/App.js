import "./App.css";
import { Home } from "./Home";
import { useState } from "react";

function App() {
  const [emotion, setEmotion] = useState(""); 
  const [quote, setQuote] = useState(null);   

  return (
    <div className="App">
      <Home 
        emotion={emotion}      
        setEmotion={setEmotion}  
        quote={quote}            
        setQuote={setQuote}    
      />
    </div>
  );
}

export default App;
