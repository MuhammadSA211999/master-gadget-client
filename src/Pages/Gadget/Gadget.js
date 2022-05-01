import React from 'react';
import './Gadget.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { name, price, image, supplier, description, _id } = gadget
    return (
        <Card className='hover:shadow-2xl' style={{ width: '18rem' }}>
            <Card.Img className='card-img' variant="top" src={image} />
            <Card.Body>
                <div className='d-flex justify-between'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{supplier}</Card.Title>
                </div>
                <Card.Title> ${price}</Card.Title>
                <Card.Text>
                    {description.slice(0, 60)}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link as={Link} to={`updateto/${_id}`}>Update</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Gadget;