import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Col, Nav, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Row>
          <Col md={12}>
            <Nav className="header justify-content-center m-3" activeKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="h-border  m-1">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/reviews" className="h-border  m-1">Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/dashboard" className="h-border  m-1">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/blogs" className="h-border m-1">Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about"  className="h-border m-1">About</Nav.Link>
            </Nav.Item>
            </Nav>
          </Col>
          </Row>
    );
};

export default Header;