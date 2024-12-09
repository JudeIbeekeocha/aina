export function getTickerHeight() {
  const rootContainer = document.querySelector(".root-container");
  const navContainer = document.querySelector(".header-section");
  const mainContainer = document.querySelector(".main-section");
  const tickerHeight =
    rootContainer.offsetHeight -
    (navContainer.offsetHeight + mainContainer.offsetHeight);
  return tickerHeight;
}

export function getTickerData(tickers) {
  // Send the list of tickers as JSON in the body of the POST request
  let dataToSend = {
    tickers: tickers, // This is the list of tickers
  };

  fetch("http://127.0.0.1:5000/ticker-tape", {
    method: "POST", // Use POST to send data in the request body
    headers: {
      "Content-Type": "application/json", // Indicate that we're sending JSON
    },
    body: JSON.stringify(dataToSend), // Send the tickers list in the body
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.received_data); // Log the returned data from the backend
      let tickerContainer = document.querySelector(".ticker-content");

      const tickerData = data.received_data;
      tickerData.forEach((ticker) => {
        addTickerToDOM(ticker);
      });
      tickerData.forEach((ticker) => {
        addTickerToDOM(ticker);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function addTickerToDOM(ticker) {
  let tickerContainer = document.querySelector(".ticker-content");
  let tickerElement = document.createElement("div");
  let tickerName = document.createElement("span");
  let tickerPrice = document.createElement("span");
  let tickerChange = document.createElement("span");

  tickerElement.classList.add("ticker");
  tickerName.classList.add("ticker-item", "name");
  tickerPrice.classList.add("ticker-item", "price");
  tickerChange.classList.add("ticker-item", "change");

  tickerName.textContent = ticker.ticker;
  tickerPrice.textContent = `$${ticker["current-price"]}`;
  tickerChange.textContent = `${ticker["amount-change"]}%`;

  tickerElement.appendChild(tickerName);
  tickerElement.appendChild(tickerPrice);
  tickerElement.appendChild(tickerChange);

  tickerContainer.appendChild(tickerElement);
}
function addTickerToDOMTwo(tickerInfo, tickerList) {
  let tickerHTML = `
    `;
  tickerInfo.forEach((ticker, index) => {
    tickerHTML += `
        <div class="ticker">
            <span class="ticker-item name">${tickerList[index]}</span>
            <span class="ticker-item price">$${ticker["current-price"]}</span>
            <span class="ticker-item change">${ticker["amount-change"]}%</span>
        </div>
        `;
  });
  return tickerHTML;
}
