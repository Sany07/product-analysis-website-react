import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import ReactStars from 'react-stars'

function SingleCard({review}) {
    return (
            <Col md={4}>
                <Card>
                    <Card.Header>Quote</Card.Header>
                    <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p className='mb-0'> 
                        { review.des }
                        </p>
                        <p>
                        <ReactStars
                            count={5}
                            value={review.rating
                            }
                            size={30}
                            edit={false}
                            color2={'red'} />
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{review.name}</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Col>
    );
}

export default SingleCard;