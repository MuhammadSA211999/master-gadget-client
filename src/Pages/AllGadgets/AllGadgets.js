import './allGadgets.css'
import React from 'react';
import { useNavigate } from 'react-router-dom'
import useGadgets from '../../Hooks/useGadget';
import Gadget from '../Gadget/Gadget';

const AllGadgets = () => {
    const navigate = useNavigate()
    const [gadgets] = useGadgets()
    const sixGadgets = gadgets.slice(0, 6)


    return (
        <div className='mx-auto'>
            <h1 className='text-center'>Our Best Selling Gadgets</h1>
            <div className='allGadgets my-4'>
                {
                    sixGadgets.map(gadget => <Gadget
                        key={gadget._id}
                        gadget={gadget}
                    ></Gadget>)
                }
                <button onClick={() => navigate('/inventory')} type="button" className="mx-auto btn text-white bg-blue-700 hover:bg-blue-800">
                    Invent More
                </button>
            </div>
        </div>
    );
};

export default AllGadgets;