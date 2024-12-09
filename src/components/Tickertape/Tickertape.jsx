import { useEffect } from "react";
import "./Tickertape.css";
import { getTickerData, getTickerHeight } from "./Tickertape.js";

function TickerTape() {
  useEffect(() => {
    const tickerHeight = getTickerHeight();
    const tickerContainer = document.querySelector(".ticker-container");
    tickerContainer.style.height = `${tickerHeight - 5}px`;
  });

  useEffect(() => { 
    const tickers = ['AAPL', 'MSFT', 'GOOG', 'META', 'NVDA', 'JPM', 'GS', 'T'];
    getTickerData(tickers);

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
