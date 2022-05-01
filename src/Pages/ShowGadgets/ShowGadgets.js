import axios from 'axios';
import React from 'react';
import { useState } from 'react'
import toast from 'react-hot-toast';

const ShowGadgets = ({ gadget }) => {
    const { name, price, image, supplier, quantity, _id } = gadget
    const [deliver, setDeliver] = useState(quantity)
    if (quantity > deliver) {
        toast.success('Successfully Deliver', { id: 'test' })
    }

    (async () => {
        const newUpdate = { deliver }
        const url = `http://localhost:5000/deliverUpdate/${_id}`
        try {
            const { data } = await axios.put(url, newUpdate)
            console.log(data);

        }
        catch (error) {
            console.log(error);

        }
    })()

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
                    <button onClick={() => setDeliver(deliver - 1)} className="text-sm text-gray-500 truncate dark:text-gray-400">
                        deliver
                    </button>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $ {price}
                </div>
            </div>
        </li>
    );
};

export default ShowGadgets;