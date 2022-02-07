import "../common.css";
import "./Home.css";

import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container>
      <div className="page">
        <div className="main-container">
          <div className="medium-spacer" />
          <h3 id="greeting">Hi, I'm Alex</h3>
          <div className="tiny-spacer" />
          <h6 className="heading text-center">I'm a Fullstack Developer.</h6>
          <div className="medium-spacer" />
          I write code in Node.js and React professionally and started over 2
          years ago, and I began coding with my father at a young age. I enjoy
          solving new challenges and growing as a developer. I put in the time
          to my craft to overcome obstacles and exceed all expectations.
          <div className="medium-spacer" />
          <h6 className="heading">My Favorite Projects</h6>
          <div className="small-spacer" />
          <div className="heading">• Excel processing application</div>
          <div className="miniscule-spacer" />
          My current project is an Excel file processing application I built in
          microservices. The microservices included Express REST APIs and data
          processing systems.
          <div className="small-spacer" />
          Users stream Excel files through the React frontend to the file
          processing API. The API stores the Excel file in an AWS S3 Bucket
          using AWS-SDK. The data processing service converts the Excel file
          data into JSON for storage and retrieval with MongoDB. The services
          cache and communicate using Redis.
          <div className="small-spacer" />
          <div className="heading">• Rest API for financial services</div>
          <div className="miniscule-spacer" />
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
