import React from 'react';
import './Footer.css'
import Fab from '../../../src/Images/facebooklogo.png'
import Google from '../../../src/Images/google.svg'
import Git from '../../../src/Images/gitlogo.png'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-slate-900 text-center footer mt-5'>
            <input className='d-block mx-auto rounded-xl border-0' placeholder='find on master gadget' type="text" name="" id="" />
            <div className='footer-element'>

                <div className='flex flex-col justify-start service'>
                    <strong className='text-white'>SERVICES</strong>
                    <p>Offer</p>
                    <p>Home Delivery</p>
                    <p>1 Day Exchange</p>
                    <p>Pre Booking</p>

                </div>

                <div>
                    <strong className='text-light'>Following Us</strong>
                    <div className='social-contact'>
                        <div className='touch mt-1 me-1'>
                            <img style={{ width: '20px', height: '20px' }} src={Git} alt="" />
                            <h5>Master Gadget</h5>
                        </div>
                        <div className='touch'>
                            <img style={{ width: '20px', height: '20px' }} src={Google} alt="" />
                            <h5>Master Gadget</h5>
                        </div>
                        <div className='touch'>
                            <img style={{ width: '20px', height: '20px' }} src={Fab} alt="" />
                            <h5>Master Gadget</h5>
                        </div>
                    </div>
                </div>
                <div className='address'>
                    <strong className='text-light'>CONTACT</strong>
                    <h6>PHONE:7465783 </h6>
                    <h6>FAX:+333333</h6>
                    <h6>EMAIL:gb.@y.com</h6>
                    <h6>SYLHET</h6>
                </div>

            </div>
            <p className='text-light'>All rights reserved &copy;: {year}</p>
        </footer>
    );
};

export default Footer;