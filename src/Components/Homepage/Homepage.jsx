import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Homepage.css';

const Homepage = () => {
    return (
        <Row>
            <Col md={8}>
            <h1 className='fs-1 fw-bolder pb-3'>Your next Chair!
            <br/> 
                <span className='text-primary'>
                    Your best Chair!
                </span>
            </h1>
            <p className='me-5 pe-5'>
            OLIXIS Adjust, High Back, Blue Backrest and Adjustable Height Seat Swivel Recliner Gaming Chair, Without footrest, Red/Black.
            </p>
            <p>
                <Button variant="secondary">Live Demo</Button>
            </p>
            </Col>
            <Col md={4}>
                <div className='img-fix'>
                    <img className='img-fluid' src="https://m.media-amazon.com/images/I/61RexIW0vNS._AC_SL1500_.jpg" alt=""/>
                </div>
            </Col>
        </Row>
    );
};

export default Homepage;