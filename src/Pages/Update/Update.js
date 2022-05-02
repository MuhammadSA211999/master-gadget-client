import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [gadget, setGadget] = useState({})
    useEffect(() => {
        // fetch(`http://localhost:5000/gadget/${id}`)
        //     .then(res => res.json())
        //     .then(data => setGadget(data))
        (async () => {
            const url = `http://localhost:5000/gadget/${id}`
            try {
                const { data } = await axios.get(url)
                setGadget(data)
            }
            catch (error) {
                console.log(error);

            }
        })()

    }, [id])

    const handleUpdate = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const image = e.target.image.value
        const quantity = e.target.quantity.value
        const email = e.target.email.value
        const gadget = { name, email, price, image, quantity }
        e.target.reset()

        const url = `http://localhost:5000/updateGadget/${id}`
        try {
            const { data } = await axios.put(url, gadget)
            if (data.modifiedCount === 1 || data.matchedCount === 1) {
                toast.success(`Successfully update ${name}`)
            }
        }

        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="mt-3 flex flex-col  items-center mx-auto">
            <h4 className='text-center text-2xl text-green-900 font-sans font-medium'>Your are updating the {gadget?.name}</h4>
            <div className="p-5 min-h-screen w-full">
                <div className="bg-white p-2 md:w-3/4 lg:w-1/2 mx-auto">
                    <form className='flex max-w-[300px] flex-col items-center' onSubmit={handleUpdate}>
                        <div className="flex items-center mb-5">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Gadget Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="type new Name"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                            />
                        </div>

                        <div className="flex items-center mb-5">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="type new quantity"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                placeholder="type new price"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                            />
                        </div>

                        <div className="flex items-center mb-5">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="type new your email"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                            />
                        </div>

                        <div className="flex items-center mb-10">
                            <label
                                className="inline-block w-40 mr-6 text-right
                                    font-bold text-gray-600"
                            >
                                Image
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="type new image url"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                            />
                        </div>

                        <div className="ml-17">
                            <button className="p-2 bg-yellow-600 text-white font-bold rounded">Add Items</button>
                            <button onClick={() => navigate('/myItems')} className="ms-3 p-2 bg-blue-700 text-white font-bold rounded">Your Items</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Update;