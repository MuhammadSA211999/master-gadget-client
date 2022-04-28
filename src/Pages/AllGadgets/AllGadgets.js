import './allGadgets.css'
import React from 'react';
import useGadgets from '../../Hooks/useGadget';
import Gadget from '../Gadget/Gadget';

const AllGadgets = () => {
    const [gadgets, setGadgets] = useGadgets()
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
            </div>
        </div>
    );
};

export default AllGadgets;