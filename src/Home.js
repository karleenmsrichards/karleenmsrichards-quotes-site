import React, { useState } from "react";

export const Home = ({ emotion, setEmotion, quote, setQuote }) => {
  const [randomPhrase, setRandomPhrase] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const phrases = [
    "Best of luck!",
    "Keep pushing forward!",
    "You're doing great!",
    "Don't give up!",
    "Stay strong!",
    "You're amazing!",
    "Believe in yourself!",
    "Keep going!",
    "You've got this!",
    "Never stop trying!"
  ];

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };

  const handleEmotionChange = (e) => {
    setEmotion(e.target.value);
  };

  const handleFetchQuote = async () => {
    if (emotion.trim() === "") {
      alert("Please enter an emotion.");
      return;
    }

    setIsLoading(true);

    const requestBody = { emotion };

    try {
      const response = await fetch("https://karleenmsrichards-quotes-site.onrender.com/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data?.quote) {
        setQuote(data.quote);
        setRandomPhrase(getRandomPhrase());
      } else {
        alert("No quote received, please try again.");
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      alert("There was an error fetching the quote. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero-wrapper">
      <h1>
        Welcome to <span className="primary-orange logo-mood">mood</span>
        <span className="dark-blue logo-boost">Boost</span>
      </h1>
      <p className="hero-text">
        Searching for a job can be a rollercoaster of emotions, but you don’t have to face it alone.
        We’re here to help lift your spirits and keep you motivated on your journey.
      </p>

      <input
        type="text"
        placeholder="How are you feeling today?"
        value={emotion}
        onChange={handleEmotionChange}
        aria-label="Enter your current emotion"
      />
      <button
        className="cta-btn"
        onClick={handleFetchQuote}
        disabled={isLoading}
        aria-label="Fetch an inspirational quote"
      >
        {isLoading ? "Here it comes..." : "Find Your Inspiration"}
      </button>

      {quote && (
        <div className="quote-wrapper">
          <h2 className="quote-heading">Here’s your Inspiration...</h2>
          <p className="quote">"{quote}"</p>
          {randomPhrase && <p className="quote-phrase">PS... {randomPhrase}</p>}
        </div>
      )}
    </div>
  );
};
