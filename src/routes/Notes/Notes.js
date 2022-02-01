import "../../common.css";
import "./Notes.css";

import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import LeftNav from "../../Components/LeftNav";
import RightNav from "../../Components/RightNav";

export default function Writings() {
  return (
    <>
      <Row className="tall">
        <Col sm={2} xs={2} className="sidebar-wrapper">
          <LeftNav />
        </Col>
        <Col sm={8} xs={8} md={8} lg={8} className="page-content-wrapper">
          <Outlet />
        </Col>
        <Col sm={2} xs={2} className="sidebar-wrapper">
          <RightNav />
        </Col>
      </Row>
    </>
  );
}
