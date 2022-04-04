import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useReviews from '../../utilities/useReviews';
import SingleCard from '../Card/SingleCard';
import './Homepage.css';

const Homepage = () => {

    const [reviews] = useReviews([])
    return (
        <Row className='justify-content-md-center'>
            <Col md={8} className="p-5 my-5">
            <h1 className='fs-1 fw-bolder pb-3'>Your next Chair!
            <br/> 
                <span className='text-primary'>
                    Your best Chair!
                </span>
            </h1>
            <p className='me-5'>
                OLIXIS Adjust, High Back, Blue Backrest and Adjustable Height Seat Swivel Recliner Gaming Chair, Without footrest, Red/Black.
            </p>
            <p>
                <Button variant="secondary">Live Demo</Button>
            </p>
            </Col>
            <Col md={3} className="my-5">
                <div className='img-fix'>
                    <img className='img-fluid' src="https://m.media-amazon.com/images/I/61RexIW0vNS._AC_SL1500_.jpg" alt=""/>
                </div>
            </Col>
            <h4 className='text-center my-5'>Customer Reviews ({reviews && reviews.slice(3).length})</h4>
                {
                   reviews && reviews.slice(3).map(review=>
                        <SingleCard key={review._id} review={review} />    
                    )

                }
            <Col md={12} className="text-center">
                <Link to="/reviews">
                    <Button variant="primary" className='rounded-pill px-4'>See All Reviews</Button>
                </Link>
            </Col>
            
        </Row>
    );
};

export default Homepage;