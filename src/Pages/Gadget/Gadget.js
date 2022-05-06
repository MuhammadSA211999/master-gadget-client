import React from 'react';
import './Gadget.css'

import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

const Gadget = ({ gadget }) => {
    const navigate = useNavigate()
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
                <button onClick={() => navigate(`/updateto/${_id}`)} className='btn btn-primary'>Update</button>
            </Card.Body>
        </Card>
    );
};

export default Gadget;