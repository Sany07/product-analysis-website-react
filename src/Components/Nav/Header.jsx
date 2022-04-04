import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Col, Nav, Row } from 'react-bootstrap';
import './Header.css';
import CustomLink from '../../utilities/CustomLink';

const Header = () => {
    return (
        <Row>
          <Col md={12}>
            <Nav className="header justify-content-center m-3" activeKey="/home">
            <>
              <Nav.Link as={CustomLink} to="/" className="h-border  m-1">Home</Nav.Link>
            </>
            <>
              <Nav.Link as={CustomLink} to="/reviews" className="h-border  m-1">Reviews</Nav.Link>
            </>
            <>
              <Nav.Link as={CustomLink} to="/dashboard" className="h-border  m-1">Dashboard</Nav.Link>
            </>
            <>
              <Nav.Link as={CustomLink} to="/blogs" className="h-border m-1">Blogs</Nav.Link>
            </>
            <>
              <Nav.Link as={CustomLink} to="/about"  className="h-border m-1">About</Nav.Link>
            </>
            </Nav>
          </Col>
          </Row>
    );
};

export default Header;