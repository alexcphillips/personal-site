import "./Resume.css";
import { saveAs } from "file-saver";

const saveResume = () =>
  saveAs(
    "http://localhost:3001/downloads/resume.docx",
    "AlexPhillipsResume.docx"
  );

export default function Resume() {
  return (
    <div id="page">
      <div id="main-container">
        <h1 id="name">Alexander Phillips</h1>
        <h4 id="head">Node.js Developer</h4>
        <div style={{ marginBottom: "1rem" }} />

        <div id="body">
          <p className="body-text">
            I've been working as a Node.js Developer at ANI Consulting since
            August of 2019, building microservices and REST APIs.
          </p>
          <div className="section">
            <h4 className="left">SKILLS</h4>
            <ul className="left">
              <li>Building Node.js applications</li>
              <li>Building REST APIs</li>
              <li>Utilizing MongoDB</li>
              <li>Writing Jest tests</li>
              <li>Debugging</li>
            </ul>
          </div>

          <div className="section">
            <h4 className="left">TOOLS</h4>
            <ul className="left">
              <li>Git/GitHub</li>
              <li>Jira</li>
              <li>Postman</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>

          <div className="section">
            <h4 className="left">SITES</h4>
            <a
              className="left"
              target="_blank"
              href="http://github.com/alexcphillips"
            >
              http://github.com/alexcphillips
            </a>
            <br />
            <a
              className="left"
              target="_blank"
              href="http://codewars.com/users/alexphillips"
            >
              http://codewars.com/users/alexphillips
            </a>
            <div style={{ marginBottom: "1rem" }} />
          </div>

          <div className="section">
            <h4 className="left">WORK HISTORY</h4>
            <h6>BACKEND DEVELOPER - ANI CONSULTING • 09/2019 - CURRENT</h6>
            <ul className="lefts">
              <li>Built REST APIs with Express server</li>
              <li>Converted Excel file data to JSON for MongoDB storage</li>
              <li>Used Redis pub sub for microservices</li>
              <li>Containerized applications with Docker</li>
              <li>Created unit tests with Jest for 100% coverage</li>
              <li>
                Deploy Docker containers to ec2s on AWS with docker-compose
              </li>
              <li>Managed security groups for ec2 instances</li>
              <li>
                Created scripts to automatically open and shut down ec2s as
                needed for development
              </li>
              <li>
                Built financial reporting and Excel data processing applications
                including frontend React components
              </li>
            </ul>
            <div id="footer">
              <a id="download-resume" href="" onClick={saveResume}>
                Download Word Document
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
