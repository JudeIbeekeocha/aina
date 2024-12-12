import { sendResponseToDOM } from "./Maincontent";
import { getTickerData } from "../Tickertape/Tickertape.js";

export async function fetchResponse(message) {
  let dataToSend = {
    ticker: message,
  };
  const dataToFetch = fetch("https://aina-backend.onrender.com/receive-json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  const [response, tickerInfo] = await Promise.all([dataToFetch, getTickerData([message])]);
  const data = await response.json();

  let res = await data.received_data;
  console.log(tickerInfo);

  sendResponseToDOM(res.title, "title");
  sendResponseToDOM(res.publisher, "publisher");
  sendResponseToDOM(tickerInfo[0]['current-price'], "price");
  sendResponseToDOM(res.body, "body");
  sendResponseToDOM(res.link, "link");
}
