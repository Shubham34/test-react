import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./AppSideBar.css";

function Header () {
  return (
    <div className="Header">
      <Row>
        <Col sm={1}>
          <h3>Contact</h3>
        </Col>
        <Col sm={11}>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
