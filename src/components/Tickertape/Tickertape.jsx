import { useEffect } from "react";
import "./Tickertape.css";
import { addTickerToDOM, getTickerHeight } from "./Tickertape.js";

function TickerTape() {
  useEffect(() => {
   getTickerHeight();
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
