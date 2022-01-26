import "../common.css";
import "./Home.css";

import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container>
      <div className="page">
        <div className="main-container">
          <div className="spacer-medium" />
          <h3 id="greeting">Hi, I'm Alex</h3>
          <div className="spacer-small" />
          <h6 className="heading text-center">I'm a Node.js Developer.</h6>
          <div className="spacer-medium" />I write code in Node.js
          professionally and started over 2 years ago, and I began coding with
          my father at a young age. I enjoy solving new challenges and growing
          as a developer. I put in the time to my craft to overcome obstacles
          and exceed all expectations.
          <h6 className="heading">My Favorite Projects</h6>
          <div className="heading">Excel processing application</div>
          My current project is an Excel file processing application I built in
          microservices. The microservices included Express REST APIs and data
          processing systems.
          <br />
          <br />
          Users stream Excel files through the React frontend to the file
          processing API. The API stores the Excel file in an AWS S3 Bucket
          using AWS-SDK. The data processing service converts the Excel file
          data into JSON for storage and retrieval with MongoDB. The services
          cache and communicate using Redis.
          <br />
          <br />
          <div className="heading">Rest API for financial services</div>
          <p className="body-text">
            I built a RESTful API with Express for a financial services
            application. My API stored profit loss statements, invoices, and
            expense data into MongoDB. I included routes to validate, store,
            retrieve, and update documents.
          </p>
        </div>
        <div id="footer" />
      </div>
    </Container>
  );
}
