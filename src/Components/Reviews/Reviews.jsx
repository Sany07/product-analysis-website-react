import { Row } from 'react-bootstrap';
import useReviews from '../../utilities/useReviews';
import SingleCard from '../Card/SingleCard';

const Reviews = () => {
    const [reviews ] = useReviews()

    return (
        <Row>
            <h1 className='text-center my-5'>What Our Customers Says !</h1>
            {
                reviews && reviews.map(review=> 
                <SingleCard key={review._id} review={review} />
                )
            }
        </Row>
    );
};

export default Reviews;