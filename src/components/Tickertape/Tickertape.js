import { fetchResponse } from "../Maincontent/fetchResponse";
import { addMessageToDOM } from "../Maincontent/Maincontent";

export function getTickerHeight() {
  const rootContainer = document.querySelector(".root-container");
  const navContainer = document.querySelector(".header-section");
  const mainContainer = document.querySelector(".main-section");
  const tickerContainer = document.querySelector(".ticker-container");
  const tickerHeight =
    rootContainer.offsetHeight -
    (navContainer.offsetHeight + mainContainer.offsetHeight);
    
  tickerContainer.style.height = `${tickerHeight - 5}px`; //5px comes from header margin bottom
  return tickerHeight;
}

export async function getTickerData(tickers) {
  let dataToSend = {
    tickers: tickers,
  };
  let tickerData;

  const response = await fetch("https://aina-backend.onrender.com/ticker-tape", {
    method: "POST", // Use POST to send data in the request body
    headers: {
      "Content-Type": "application/json", // Indicate that we're sending JSON
    },
    body: JSON.stringify(dataToSend),
  });
  const data = await response.json();
  tickerData = await data.received_data;
  return tickerData;
}

function isMarketOpen() {
  const now = new Date();
  const day = now.getUTCDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();

  // Market hours in UTC: 2:30 PM to 9:00 PM (9:30 AM to 4:00 PM ET)
  const marketOpenHour = 14; // 2:30 PM UTC
  const marketCloseHour = 21; // 9:00 PM UTC

  // Check if today is a weekday (Monday to Friday) and within market hours
  return (
    day >= 1 &&
    day <= 5 &&
    (hours > marketOpenHour || (hours === marketOpenHour && minutes >= 30)) &&
    hours < marketCloseHour
  );
}

function getNextCheckTime() {
  const now = new Date();
  const day = now.getUTCDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();

  const marketOpenTime = new Date();
  marketOpenTime.setUTCHours(14, 30, 0, 0); // 2:30 PM UTC
  const marketCloseTime = new Date();
  marketCloseTime.setUTCHours(21, 0, 0, 0); // 9:00 PM UTC

  if (isMarketOpen()) {
    return 60000 * 2; // 2 minute
  } else if (now < marketOpenTime) {
    return marketOpenTime - now; // Time until market opens
  } else {
    const nextDayOpenTime = new Date(marketOpenTime);
    nextDayOpenTime.setUTCDate(now.getUTCDate() + (day === 5 ? 3 : 1)); // If today is Friday, add 3 days to skip to monday
    return nextDayOpenTime - now; // Time until market opens
  }
}

function createTickerHtml(tickerInfo, tickerList) {
  let tickerHTML = `
      `;
  tickerInfo.forEach((ticker, index) => {
    tickerHTML += `
          <div class="ticker" data-ticker-name="${tickerList[index]}" >
              <img src="https://assets.parqet.com/logos/symbol/${
                tickerList[index]
              }?format=svg" className="ticker-logo" />
              <span className="ticker-item name">${tickerList[index]}</span>
              <span className="ticker-item price">$${ticker[
                "current-price"
              ].toFixed(2)}</span>
              <span class="${ticker["percent-change"] > 0 ? "up" : "down"}">
                <span className="ticker-item change">$${Math.abs(
                  ticker["amount-change"]
                ).toFixed(2)}</span>
                <span className="ticker-item change">(${ticker[
                  "percent-change"
                ].toFixed(2)}%)</span>
              </span>
          </div>
          `;
  });
  tickerInfo.forEach((ticker, index) => {
    tickerHTML += `
          <div class="ticker" data-ticker-name="${tickerList[index]}" >
              <img src="https://assets.parqet.com/logos/symbol/${
                tickerList[index]
              }?format=svg" className="ticker-logo" />
              <span className="ticker-item name">${tickerList[index]}</span>
              <span className="ticker-item price">$${ticker[
                "current-price"
              ].toFixed(2)}</span>
              <span class="${ticker["percent-change"] > 0 ? "up" : "down"}">
                <span className="ticker-item change">$${Math.abs(
                  ticker["amount-change"]
                ).toFixed(2)}</span>
                <span className="ticker-item change">(${ticker[
                  "percent-change"
                ].toFixed(2)}%)</span>
              </span>
          </div>
          `;
  });
  return tickerHTML;
}

async function callMarketData(tickerList) {
  const tickerInfo = await getTickerData(tickerList);

  document.querySelector(".ticker-content").innerHTML = createTickerHtml(
    tickerInfo,
    tickerList
  );

  document.querySelectorAll(".ticker").forEach((tickerDiv) => {
    tickerDiv.addEventListener("click", (event) => {
      const tickerName = event.currentTarget.getAttribute("data-ticker-name");
      addMessageToDOM(tickerName); // Call the addMessageToDOM function with the ticker name
      fetchResponse(tickerName); // Call the fetchResponse function with the ticker name
    });
  });
}

export async function addTickerToDOM(tickerList) {
  const UpdateTicker = async () => {
    if (isMarketOpen()) {
      callMarketData(tickerList);
    } else {
      callMarketData(tickerList);
    }
  };
  await UpdateTicker();

  setInterval(UpdateTicker, getNextCheckTime());
}
