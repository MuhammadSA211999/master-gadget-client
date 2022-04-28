import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { name, price, image, supplier, description, _id } = gadget
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <div className='d-flex'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{supplier}</Card.Title>
                </div>
                <Card.Title>{price}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link as={Link} to={`updateto/${_id}`}>Update</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Gadget;