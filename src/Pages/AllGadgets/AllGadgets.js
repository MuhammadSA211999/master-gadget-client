import './allGadgets.css'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useGadgets from '../../Hooks/useGadget';
import Gadget from '../Gadget/Gadget';

const AllGadgets = () => {
    const navigate = useNavigate()
    const [gadgets] = useGadgets()
    const sixGadgets = gadgets.slice(0, 6)


    return (
        <div>
            <h1 className='text-center my-3 text-3xl text-black font-bold'>Our Best Selling Gadgets</h1>
            <div className='gadget-container'>

                <div className='allGadgets my-4'>
                    {
                        sixGadgets.map(gadget => <Gadget
                            key={gadget._id}
                            gadget={gadget}
                        ></Gadget>)
                    }

                </div>
            </div>

            <button onClick={() => navigate('/inventory')} className='btn btn-primary d-block my-3 mx-auto'>Manage Invent</button>

        </div>
    );
};

export default AllGadgets;