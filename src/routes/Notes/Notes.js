import "../../common.css";
import "./Notes.css";

import { Col, Container, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

import LeftNav from "../../Components/navbars/LeftNav";
import RightNav from "../../Components/navbars/RightNav";

import notes from "../../Components/notes";

export default function Writings() {
  return (
    <Container>
      <Row>
        <div className="top-links text-center">
          {notes.map(({ to, text }, index) => {
            return (
              <Link
                key={`left-nav-${index}`}
                to={to}
                className="link-text"
                style={{ display: "block" }}
              >
                {text}
              </Link>
            );
          })}
        </div>
        <hr />
      </Row>
      <Row className="tall">
        <Col sm={2} xs={2} className="sidebar-wrapper">
          {/* <LeftNav /> */}
        </Col>
        <Col sm={8} xs={8} md={8} lg={8} className="page-content-wrapper">
          <Outlet />
        </Col>
        <Col sm={2} xs={2} className="sidebar-wrapper">
          {/* <RightNav /> */}
        </Col>
      </Row>
    </Container>
  );
}
