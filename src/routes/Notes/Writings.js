import "../../common.css";
import "./Writings.css";

import Side from "../../Components/Side";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Writings() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3} className="sidebar-wrapper">
            <Side />
          </Col>
          <Col xs={9} className="page-content-wrapper">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}
