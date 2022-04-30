import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useGadgets from '../../Hooks/useGadget';
import ShowGadgets from '../ShowGadgets/ShowGadgets';

const Inventory = () => {
    // h00ks
    const [gadgets] = useGadgets()
    // pagination
    const [allGadgets, setGadgets] = useState([]);
    console.log(allGadgets);
    const [displayGadgets, setDisplayNumber] = useState(4);
    const [onPage, setOnPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/gadgetsByPaging?limit=${displayGadgets}&pageNumber=${onPage}`);

            if (!data?.success) {
                setGadgets([])
                return toast.error(data.error);

            }
            setGadgets(data.data);
            setPageCount(Math.ceil(data.count / displayGadgets))


        })()

    }, [displayGadgets, onPage])
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
                            allGadgets.map(gadget => <ShowGadgets
                                key={gadget._id}
                                gadget={gadget}
                            ></ShowGadgets>)
                        }
                    </ul>
                </div>
            </div>
            <div className="flex m-1 justify-center">
                {[...Array(pageCount).keys()].map((number) =>
                (
                    <div
                        onClick={() => setOnPage(number)}
                        className={`m-2 cursor-pointer border border-black p-2 ${onPage === number ? "bg-black text-white" : ""
                            }`}
                    >
                        {number + 1}
                    </div>
                )
                )}
                <select className='rounded-lg' defaultValue={displayGadgets} onChange={(e) => setDisplayNumber(e.target.value)}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
    );
};

export default Inventory;