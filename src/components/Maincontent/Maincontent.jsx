import "./Maincontent.css";
import { getUserMessage, addMessageToDOM, sendResponseToDOM } from "./Maincontent.js";
import { fetchResponse } from "./fetchResponse.js";

function MainContent() {
    function callStoryFunction(){
        let message = getUserMessage();
        addMessageToDOM(message);
        fetchResponse(message);
    }
  return (
    <main className="main-section">
      <div className="main-container">
        <div className="content-container"></div>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="i.e: 'Apple', 'Microsoft', 'Meta', 'Amazon'"
            name="ticker_request"
            onKeyDown={(event) => {
              if(event.key === "Enter"){
                callStoryFunction();
            }}}
          />
          <button className="send-button" onClick={callStoryFunction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
