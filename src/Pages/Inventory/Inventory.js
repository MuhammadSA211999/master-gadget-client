import React from 'react';
import { Link } from 'react-router-dom';
import useGadgets from '../../Hooks/useGadget';
import ShowGadgets from '../ShowGadgets/ShowGadgets';

const Inventory = () => {
    const [gadgets] = useGadgets()
    // pagination
    return (
        <div className='mx auto my-10'>
            <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Collection</h5>
                    <Link to='/' className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </Link>
                </div>
                <div className="flow-root mx-auto">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            gadgets.map(gadget => <ShowGadgets
                                key={gadget._id}
                                gadget={gadget}
                            ></ShowGadgets>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Inventory;