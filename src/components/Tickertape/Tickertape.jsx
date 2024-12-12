import { useEffect } from "react";
import "./Tickertape.css";
import { addTickerToDOM, getTickerHeight } from "./Tickertape.js";

function TickerTape() {
  useEffect(() => {
    // could move most of the code into the function and call it here
    const tickerHeight = getTickerHeight();
    const tickerContainer = document.querySelector(".ticker-container");
    tickerContainer.style.height = `${tickerHeight - 5}px`; //5px comes from header margin bottom
  });

  useEffect(() => { 
    const tickers = [ 'AAPL', 'MSFT', 'GOOG', 'META', 'NVDA', 'GS', 'AMZN'];
    addTickerToDOM(tickers)

  })

  return (
    <>
      <div className="ticker-container">
        <div className="ticker-content">
          

        </div>
      </div>
    </>
  );
}

export default TickerTape;
