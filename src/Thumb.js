import { useState } from "react";
import { quotes as data } from "./quotes.js";

export default function Thumb() {
  const [quotes, changeQuote] = useState({
    quote: "Click on Generate to get a quote",
    author: "Have a great day",
  });

  function changeTwoOfThem(data) {
    let ran = Math.floor(Math.random() * data.length);
    let fullQuote = data[ran];
    changeQuote(fullQuote);
  }

  return (
    <div className="thumb">
      <div className="thumb-quote">
        <p className="quote-block">{quotes.quote}</p>
        <p className="author-block"> - {quotes.author}</p>
      </div>
      <div className="quote-button">
        <button className="button" onClick={() => changeTwoOfThem(data)}>
          Generate
        </button>
      </div>
    </div>
  );
}
