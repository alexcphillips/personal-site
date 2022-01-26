import "./Home.css";

export default function Home() {
  return (
    <div id="page">
      <div id="main-container">
        <h3 id="greeting">Hi, I'm Alex</h3>
        <h6 id="heading">I'm a Node.js Developer.</h6>
        <p className="body-text">
          I write code in Node.js professionally and started over 2 years ago,
          and I began coding with my father at a young age. I enjoy solving new
          challenges and growing as a developer. I put in the time to my craft
          to overcome obstacles and exceed all expectations.
        </p>
        <h6 id="heading">My Favorite Projects</h6>
        <p className="body-text">
          My current project is an Excel file processing application I built in
          microservices. The microservices included Express REST APIs and data
          processing systems.
          <br />
          Users stream Excel files through the React frontend to the file
          processing API. The API stores the Excel file in an AWS S3 Bucket
          using AWS-SDK. The data processing service converts the Excel file
          data into JSON for storage and retrieval with MongoDB. The services
          cache and communicate using Redis.
        </p>
        <br />
        <p className="body-text">
          I built a RESTful API with Express for a financial services
          application. My API stored profit loss statements, invoices, and
          expense data into MongoDB. I included routes to validate, store,
          retrieve, and update documents.
        </p>
      </div>
    </div>
  );
}
