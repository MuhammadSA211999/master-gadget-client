import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Addactivity = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const gadget = {
            name: e.target.name.value,
            email: e.target.email.value,
            price: e.target.price.value,
            image: e.target.image.value,
            description: e.target.description.value,
            quantity: e.target.quantity.value,
            supplier: e.target.supplier.value
        };
        const url = 'https://frozen-springs-79370.herokuapp.com/addGadget'
        try {
            const { data } = await axios.post(url, gadget)
            if (!data.success) {
                toast.error(data.error, { id: 'error' })
            }
            else {
                toast.success(data.message, { id: 'success' })
            }
            e.target.reset()
        }
        catch (error) {
            console.log(error);

        }

    };
    return (
        <div className="py-10 flex flex-col  items-center mx-auto">
            <div className="bg-white p-10">
                <h1 className='text-2xl text-center my-3 font-semibold text-blue-800'>YOU ARE ADDING!!</h1>
                <form className='flex max-w-[300px] flex-col items-center' onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Gadget Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-5">
                        <label htmlFor="date" className="inline-block w-40 mr-6 text-right font-bold text-gray-600" >Quantity</label>
                        <input
                            type="number"
                            placeholder='Quantity'
                            name="quantity"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 placeholder-gray-400
                            outline-none" />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="price"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Description
                        </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="description"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Supplier
                        </label>
                        <input
                            type="text"
                            name="supplier"
                            placeholder="Company Name"
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
                            placeholder="image url"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>

                    <div className="ms-5 text-center">
                        <button className="p-2 bg-yellow-600 text-white font-bold rounded">Add Items</button>
                        <button onClick={() => navigate('/myItems')} className="ms-3 p-2 bg-blue-700 text-white font-bold rounded">Your Items</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addactivity;