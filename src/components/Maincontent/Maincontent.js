// import { fetchResponse } from "./data.js";

const sendButton = document.querySelector(".send-button");

export function getUserMessage() {
  const inputField = document.querySelector(".input-field");
  let message = ""; // I can take this out later and use as a return function
  message = inputField.value;
  console.log(message);
  inputField.value = "";
  return message;
}

// Create a function that adds the message to the DOM with some styles
export function addMessageToDOM(message) {
  let contentSection = document.querySelector(".content-container");
  const userContainer = document.createElement("div");
  const userMessage = document.createElement("p");

  userContainer.classList.add("user-content-container");
  userMessage.classList.add("user-message");
  userMessage.textContent = message;
  userContainer.appendChild(userMessage);
  contentSection.appendChild(userContainer);
}

// export function sendResponseToDOM(response, category) {
export function sendResponseToDOM() {
  const responseContainer = document.createElement("div");
  const responseMessage = document.createElement("p");

  responseContainer.classList.add("response-content-container");
  if (category === "title") {
    responseMessage.classList.add("response-message-title");
    responseMessage.textContent = "Title";
  } else if (category === "body") {
    responseMessage.classList.add("response-message-body");
    responseMessage.textContent = "Body Test";
  } else if (category === "publisher") {
    responseMessage.classList.add("response-message-publisher");
    responseMessage.textContent = "Publisher";
  } else if (category === "link") {
    responseMessage.innerHTML = `<a href="${response}" target="_blank" class="response-message-source">Source</a>`;
    // response;
  }

  // responseMessage.textContent =
  //   response;
  responseContainer.appendChild(responseMessage);
  contentSection.appendChild(responseContainer);
}

// document.addEventListener("DOMContentLoaded", function () {
//   const inputField = document.querySelector(".input-field");
//   console.log("DOM is loaded");

//   inputField.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       const message = getUserMessage();
//       addMessageToDOM(message);
//       // fetchResponse(message);
//     }
//   });

// });
