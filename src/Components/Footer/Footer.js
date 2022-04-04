import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Col md={12} className="text-center pt-5">
            <Row className='t-border'>
                <h5 className='p-3'>&copy; SS Reviews 2022</h5>
            </Row>
        </Col>
    );
};

export default Footer;