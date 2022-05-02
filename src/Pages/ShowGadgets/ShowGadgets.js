import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ShowGadgets = ({ gadget }) => {
    const navigate = useNavigate()
    const { name, price, image, supplier, quantity, _id } = gadget
    const [deliver, setDeliver] = useState(quantity)
    console.log(deliver);
    useEffect(() => {
        (async () => {
            const newUpdate = { deliver }
            const url = `http://localhost:5000/deliverUpdate/${_id}`
            try {
                const { data } = await axios.put(url, newUpdate)
                if (data.modifiedCount) {
                    toast.success('Happy Delivered', { id: 'test' })
                }
            }
            catch (error) {
                console.log(error);

            }
        })()
    }, [deliver])

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
                        Stock: {deliver}
                    </p>
                    <div className='d-flex'>
                        <button onClick={() => setDeliver(deliver - 1)} className="bg-sky-800 rounded p-1 text-white truncate">
                            Deliver
                        </button>
                        <button onClick={() => navigate(`/updateto/${_id}`)} className="ms-3 bg-sky-800 rounded p-1 text-white truncate">
                            Update
                        </button>
                    </div>

                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $ {price}
                </div>
            </div>
        </li>
    );
};

export default ShowGadgets;