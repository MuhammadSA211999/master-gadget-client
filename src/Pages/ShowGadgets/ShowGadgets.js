import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ShowGadgets = ({ gadget, setLoading, loading }) => {
    const navigate = useNavigate()
    const { name, price, image, supplier, _id } = gadget
    const deleteGadget = (id) => {
        const permission = window.confirm('Are want to delete?')
        if (permission) {
            (async () => {
                const { data } = await axios.delete(`http://localhost:5000/deleteGadget/${id}`);

                if (data.deletedCount === 1) {
                    toast.success('Deleted 1', { id: 'success' })
                    setLoading(!loading)
                }
            })()
        }
    }
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

                    <div className='d-flex'>
                        <button onClick={() => { deleteGadget(_id) }} className="bg-red-800 rounded p-1 text-white truncate">
                            Delete
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