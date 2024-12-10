export function getTickerHeight() {
  const rootContainer = document.querySelector(".root-container");
  const navContainer = document.querySelector(".header-section");
  const mainContainer = document.querySelector(".main-section");
  const tickerHeight =
    rootContainer.offsetHeight -
    (navContainer.offsetHeight + mainContainer.offsetHeight);
  return tickerHeight;
}

export async function getTickerData(tickers) {
  // Send the list of tickers as JSON in the body of the POST request
  let dataToSend = {
    tickers: tickers, // This is the list of tickers
  };
  let tickerData;

  const response = await fetch("http://127.0.0.1:5000/ticker-tape", {
    method: "POST", // Use POST to send data in the request body
    headers: {
      "Content-Type": "application/json", // Indicate that we're sending JSON
    },
    body: JSON.stringify(dataToSend), // Send the tickers list in the body
  })
    const data = await response.json()
    tickerData = await data.received_data; // Log the returned data from the backend

  return tickerData;
}

export async function addTickerToDOM(tickerList) {
  const tickerInfo = await getTickerData(tickerList);

  let tickerHTML = `
    `;
  tickerInfo.forEach((ticker, index) => {
    tickerHTML += `
        <div class="ticker">
            <span className="ticker-item name">${tickerList[index]}</span>
            <span className="ticker-item price">$${
              ticker["current-price"].toFixed(2)
            }</span>
            <span class="${ticker["percent-change"] > 0 ? "up" : "down"}">
              <span className="ticker-item change">$${
                ticker["amount-change"].toFixed(2)
              }</span>
              <span className="ticker-item change">(${
                ticker["percent-change"].toFixed(2)
              }%)</span>
            </span>
        </div>
        `;
  });
  tickerInfo.forEach((ticker, index) => {
    tickerHTML += `
        <div class="ticker">
            <span className="ticker-item name">${tickerList[index]}</span>
            <span className="ticker-item price">$${
              ticker["current-price"].toFixed(2)
            }</span>
            <span class="${ticker["percent-change"] > 0 ? "up" : "down"}">
              <span className="ticker-item change">$${
                ticker["amount-change"].toFixed(2)
              }</span>
              <span className="ticker-item change">(${
                ticker["percent-change"].toFixed(2)
              }%)</span>
            </span>
        </div>
        `;
  });
  
  document.querySelector(".ticker-content").innerHTML = tickerHTML;
}
