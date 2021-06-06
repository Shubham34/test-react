import React, { useEffect, useContext } from "react";
import { LayoutWrapper } from "./Layout.style";
import Header from "./Header/Header";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AppLayout = ({
  className,
  children
}) => {
    return (
      <LayoutWrapper className={`layoutWrapper ${className}`}>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col sm={12}>
            {children}
          </Col>
        </Row>
      </LayoutWrapper>
    );
};

export default AppLayout;
