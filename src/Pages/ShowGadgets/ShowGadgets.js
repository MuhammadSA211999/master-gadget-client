import React from 'react';
import { useState } from 'react'

const ShowGadgets = ({ gadget }) => {
    const { name, price, image, supplier, quantity, _id } = gadget
    // const [deliCount, setDeliCount] = useState()
    // console.log(deliCount);

    // const handleDeliver = (id) => {
    //     setDeliCount(deliCount - 1)

    // }
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={image} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {supplier}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Stock: {quantity}
                    </p>
                    {/* <button onClick={() => handleDeliver(_id)} className="text-sm text-gray-500 truncate dark:text-gray-400">
                        deliver
                    </button> */}
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $ {price}
                </div>
            </div>
        </li>
    );
};

export default ShowGadgets;