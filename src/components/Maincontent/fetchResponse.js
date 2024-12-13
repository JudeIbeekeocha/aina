import { sendResponseToDOM } from "./Maincontent";
import { getTickerData } from "../Tickertape/Tickertape.js";
// https://aina-backend.onrender.com
export async function fetchResponse(message) {
  let dataToSend = {
    ticker: message,
  };
  const dataToFetch = await fetch("https://aina-backend.onrender.com/receive-json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  const response = await dataToFetch;
  const data = await response.json();

  let res = await data.received_data;

  sendResponseToDOM(res.title, "title");
  sendResponseToDOM(res.publisher, "publisher");
  // sendResponseToDOM(res.price, "price");
  sendResponseToDOM(res.body, "body");
  sendResponseToDOM(res.link, "link");
}
