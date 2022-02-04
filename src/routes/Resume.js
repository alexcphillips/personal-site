import "../common.css";
import "./Resume.css";

import { saveAs } from "file-saver";

const saveResume = () =>
  saveAs("http://localhost:3001/downloads/resume.docx", "Alex Phillips.docx");

export default function Resume() {
  return (
    <div className="page">
      <h1 id="name">Alexander Phillips</h1>
      <div className="main-container">
        <div className="inner-container">
          <div className="spacer-small" />
          <h4 className="heading">Node.js Developer</h4>
          {/* <div style={{ marginBottom: "1rem" }} /> */}I started work as a
          Node.js Developer at ANI Consulting on August of 2019. I build
          microservices, REST APIs, and frontends.
          <div className="section">
            <div className="section-head left">SKILLS</div>
            <ul className="left">
              <li>Building Node.js applications</li>
              <li>ES6</li>
              <li>React and JSX</li>
              <li>Utilizing MongoDB</li>
              <li>Writing Jest tests</li>
              <li>Debugging</li>
            </ul>
          </div>
          <div className="section">
            <div className="section-head left">TOOLS</div>
            <ul className="left">
              <li>Git/GitHub</li>
              <li>Jira</li>
              <li>Postman</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
          <div className="section">
            <div className="section-head left">SITES</div>
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
            <br />

            <a className="left" target="_blank" href="http://alexcphillips.com">
              http://alexcphillips.com
            </a>
            <div style={{ marginBottom: "1rem" }} />
          </div>
          <div className="section">
            <div className="section-head left">WORK HISTORY</div>
            <div className="role left">
              FULLSTACK DEVELOPER - ANI CONSULTING • 09/2019 - CURRENT
            </div>
            <ul className="left">
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
            <div className="footer">
              <a className="download-link" href="" onClick={saveResume}>
                Download Word Document
              </a>
              <div className="small-spacer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
