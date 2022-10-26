import "../common.css";
import "./AboutMe.css";

import Container from "react-bootstrap/Container";

export default function AboutMe() {
    return (
        <Container>
            <div className="page">
                <h3 id="greeting">
                    Hi, I'm Alex
                    <br />
                </h3>
                <h6 className="heading text-center">Node.js Developer</h6>

                <div className="main-container">
                    <div className="small-spacer" />
                    <div className="box">
                        I've been writing code in Node.js professionally since
                        2017, when I began working with individuals and small
                        companies as an independant contractor. As I accumulated
                        knowledge and experience, I built RESTful APIs and
                        programs to parse Excel files and store contents in
                        MongoDB at ANI Consulting. Since March of 2022 I've been
                        building and maintaining microservices at Northwestern
                        Mutual. I use my drive to learn and grow to produce
                        innovative ways to overcome obstacles and exceed all
                        expectations.
                    </div>
                    <div className="small-spacer" />
                    <h6 className="heading">My Favorite Projects</h6>
                    <div className="tiny-spacer" />
                    <div className="heading">• NM microservices</div>
                    <div className="miniscule-spacer" />
                    My current project is a set of microservices that generate
                    fake data. This project will save other teams hours of time,
                    as they get this data via a legacy application that has 25
                    screens of required fields.
                    <br />
                    <br />
                    The production of test data begins when the services are
                    triggered by my scheduler microservices, insert logs into
                    PostgreSQL, and begin automated filling of fields of the
                    legacy application inside of a virtual machine. When
                    complete, my other microservices services pick the data up
                    and run about 20 jobs on the data to move the status along.
                    <div className="small-spacer" />
                    <div className="heading">• Logger middleware</div>
                    <div className="miniscule-spacer" />
                    I built a middleware package at Northwestern Mutual to log
                    useful information, such as request url, method, response
                    time, and more. This package is used by many teams because
                    of it's configurable logs and the readable files it writes.
                    <div className="small-spacer" />
                    <div className="heading">
                        • Excel processing application
                    </div>
                    <div className="miniscule-spacer" />
                    I built an Excel file processing application at ANI
                    Consulting. I love building RESTful APIs and working with
                    JSON data!
                    <br />
                    <br />
                    Users stream Excel files to my file processing API, which
                    stores the Excel file in an AWS S3 Bucket using AWS-SDK and
                    publishes a message to the data processing service which
                    parses the Excel file and stores the JSON into MongoDB.
                    <div className="small-spacer" />
                    <div className="heading">• This website</div>
                    <div className="miniscule-spacer" />I love to be creative
                    and experiment with different technologies. This website is
                    made with HTML, CSS, and React. I like to spend my free time
                    thinking of my next project and what features I can add.
                    <div className="miniscule-spacer" />
                    The challenge of learning something new, be it a different
                    viewpoint or technology, and the feeling of accomplishment
                    when I overcome these challenges is why I love being a
                    software developer!
                    <br />
                    <br />I have code examples on my github:{" "}
                    <a
                        href={`https://github.com/alexcphillips`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {`https://github.com/alexcphillips`}
                    </a>
                </div>
                <div id="footer"></div>
            </div>
        </Container>
    );
}
