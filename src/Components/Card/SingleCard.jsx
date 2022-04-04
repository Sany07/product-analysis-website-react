import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ReactStars from 'react-stars';
import './StartCard.css';

function SingleCard({review}) {
    return (
            <Col md={4}>
                <Card className='mb-2'>
                    <Card.Body className='text-center'>
                        <blockquote className="blockquote mb-0">
                            <p className='mb-0'> 
                            { review.des }
                            </p>
                            <p className='middle'>
                            <ReactStars
                                count={5}
                                value={review.rating
                                }
                                size={30}
                                edit={false}
                                color2={'red'} />
                            </p>
                            <p className='mt-3'> 
                            <img className='w-25 rounded-circle' src={review.image} alt=""/>
                            </p>
                            <footer className="mt-1 blockquote-footer">
                                <cite title="Source Title">
                                    {review.name}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Col>
    );
}

export default SingleCard;