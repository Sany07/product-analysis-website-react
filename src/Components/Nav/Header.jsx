import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Col, Nav, Row } from 'react-bootstrap';

const Header = () => {
    return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
    );
};

export default Header;