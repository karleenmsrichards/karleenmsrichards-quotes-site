import { useState } from "react";

export const Home = () => {
  const [emotion, setEmotion] = useState(""); // To store the user input for emotion
  const [quote, setQuote] = useState(""); // To store the generated quote

  const handleEmotionChange = (e) => {
    setEmotion(e.target.value); // Update emotion when user types
  };

  const handleFetchQuote = async () => {
    // Make sure emotion is not empty before sending request
    if (emotion.trim() === "") {
      alert("Please enter an emotion.");
      return;
    }

    const url = "http://localhost:5000/quote"; // The backend URL

    const requestBody = { emotion: emotion }; // Send emotion in the body

    try {
      const response = await fetch(url, {
        method: "POST", // Use POST request
        headers: {
          "Content-Type": "application/json", // Indicate we're sending JSON
        },
        body: JSON.stringify(requestBody), // Convert emotion to JSON format
      });

      const data = await response.json();
      
      if (data?.quote) {
        setQuote(data.quote); // Update the quote state with the received quote
      } else {
        alert("No quote received, please try again.");
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      alert("There was an error fetching the quote.");
    }
  };

  return (
    <div className="hero-wrapper">
      <h1>Get a Motivational Quote</h1>
      
      <input
        type="text"
        placeholder="Enter your emotion"
        value={emotion}
        onChange={handleEmotionChange} // Handle input change
      />

      <button className="hero-btn" onClick={handleFetchQuote}>
        Get Quote
      </button>

      {quote && <p className="hero-quote">"{quote}"</p>}
    </div>
  );
};
