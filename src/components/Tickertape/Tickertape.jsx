import { useEffect } from "react";
import "./Tickertape.css";
import { addTickerToDOM, getTickerHeight } from "./Tickertape.js";

function TickerTape() {
  useEffect(() => {
    const tickerHeight = getTickerHeight();
    const tickerContainer = document.querySelector(".ticker-container");
    tickerContainer.style.height = `${tickerHeight - 5}px`; //5px comes from header margin bottom
  });

  useEffect(() => { 
    const tickers = ['SPY', 'AAPL', 'MSFT', 'GOOG', 'META', 'NVDA', 'JPM', 'GS', 'AMZN'];
    const oneMinute = 60000; // 60000 milliseconds = 1 minute (so change later)
    addTickerToDOM(tickers, oneMinute)

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
