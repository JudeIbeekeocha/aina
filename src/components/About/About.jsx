import { useEffect } from "react";
import { aboutFunction } from "./About.js";
import "./About.css";

function About() {
    useEffect(() => {
        aboutFunction();
    }, []);
  return (
    <>
      <div className="about-content-section">
        <h2>Artificially Intelligent News Anchor</h2>

        <div className="about-buttons">
          <button
            type="button"
            className="btn btn-primary mvt-button"
            data-bs-toggle="collapse"
            data-bs-target="#demo"
          >
            <div className="button-statement">
              <div className="mission-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bullseye"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              </div>
              <div className="mission-text">Mission</div>
            </div>
          </button>
          <button
            type="button"
            className="btn btn-primary mvt-button"
            data-bs-toggle="collapse"
            data-bs-target="#demo2"
          >
            <div className="button-statement">
              <div className="mission-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-compass"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
              </div>
              <div className="mission-text">Vision</div>
            </div>
          </button>
          <button
            type="button"
            className="btn btn-primary mvt-button"
            data-bs-toggle="collapse"
            data-bs-target="#demo3"
          >
            <div className="button-statement">
              <div className="value-icon">
                <span className="material-symbols-outlined">
                  {" "}
                  partner_exchange{" "}
                </span>
              </div>
              <div className="mission-text">Value</div>
            </div>
          </button>
        </div>

        <div className="hidden-content-section">
          <div id="demo" className="collapse">
            <div className="mission-statement">
              AINA’s (eye-na) mission is to <strong>transform</strong> and
              <strong>simplify</strong> how we consume news. Powered by
              Artificial Intelligence, AINA distills complex stories into easily
              <em>digestible</em>, <em>engaging</em>, and
              <em>interactable</em> content, keeping you informed without being
              overwhelmed. Born from an interest in consuming
              <strong>accessible</strong> and <strong>trustworthy</strong> news,
              AINA aims to make staying updated both <em>effortless</em> and
              <em>meaningful</em>.
            </div>
          </div>

          <div id="demo2" className="collapse">
            <div className="vision-statement">
              AINA's vision is to become the <strong>best</strong> and
              <strong>most trusted</strong> source of news available.
            </div>
          </div>
          <div id="demo3" className="collapse">
            <div className="value-statement">
              AINA will be a symbol of <strong>Truth</strong> &
              <strong>Accessability</strong>.
            </div>
          </div>
        </div>
      </div>

      <div className="founder-box">
        <button
          type="button"
          className="btn btn-secondary founder-button"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-title="About the Founder"
          id="modalTooltipButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-raised-hand"
            viewBox="0 0 16 16"
          >
            <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          </svg>
        </button>
      </div>

      <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">About the Founder</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Hello, I’m Jude Ibe Ekeocha! I’m the creator of AINA, a project that aims to transform how we experience and understand news. </p>
             <br/> 
            <p>As a former finance student (currently on a break) from the University of Maryland, College Park, staying informed about the markets, economy, and actions of political leaders has become increasingly important to me. The idea for AINA came from a few challenges I faced:</p>
            <ul>
              <li>I often felt disinterested in browsing multiple sources just to find the specific information I was looking for.</li>
              <li>Financial news sources, podcasts, and videos rarely delivered the depth or focus I wanted.</li>
              <li>I was discouraged by the bias and spin often present in traditional media.</li>
            </ul>
            <p>Originally, I created AINA for myself—as a fast, efficient way to get the news I cared about and to explore it through questions and answers, all in one place. But after some positive feedback from friends, I felt inspired to take it further.</p>
            <p>So, AINA is my take on the future of news—a platform that not only delivers the latest and most trustworthy headlines but also empowers people to truly understand what’s happening in the world today.</p>
            <p>Let’s make staying informed less of a chore and more of an exploration.</p>
          </div>
          <div className="modal-footer">
            <div className="linkedin-icon">
              <a href="https://www.linkedin.com/in/judeibeekeocha/" target="_blank" className="linkedin-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
