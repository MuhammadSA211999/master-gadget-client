import React from 'react';
import { Carousel } from 'react-bootstrap';
import discount from '../../Images/discount.webp'
import delivery from '../../Images/delivery.webp'
import allNedds from '../../Images/allneeds.jpg'

const Banner = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={allNedds}
                    alt="A BANNER OF SOME ELECTRONICS THUMBNAIL"
                />
                <Carousel.Caption>
                    <h3>WE COLLECT ALL KINDS OF ELECTRONICS YOU NEED</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={discount}
                    alt="BANNER OF DISCOUNT INFO"
                />

                <Carousel.Caption>
                    <h3>WE OFFER BEST DISCOUNT IN SYLHET</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={delivery}
                    alt="BANNER OF DELIVERY"
                />

                <Carousel.Caption>
                    <h3>ONE DAY HOME DELIVERY</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;