import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const [contribution, setContribution] = useState({})
    useEffect(() => {
        const url = `http://localhost5000/update/${id}`
        const singleContri = async () => {
            try {
                const { data } = await axios.get(url)
                setContribution(data.data)
            }
            catch (error) {
                console.log(error);

            }
        }
        singleContri()

    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const price = e.target.price.value
        const image = e.target.image.valeu
        const service = { email, name, price, image }
        const url = `http://localhost5000/update/${id}`
        try {
            const { data } = await axios.post(url, service)
        }
        catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="py-10 px-20 min-h-screen w-full">
            <h4>Your are updating the service yyt {contribution?.name}</h4>
            <div className="py-32 px-10 min-h-screen w-full">
                <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center mb-5">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Service Name
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
                                name="name"
                                placeholder="Email"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                            />
                        </div>

                        <div className="flex items-center mb-5">
                            <label htmlFor="date" className="inline-block w-40 mr-6 text-right font-bold text-gray-600" >Date</label>
                            <input
                                type="date"
                                placeholder='Date'
                                name="date"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 placeholder-gray-400
                            outline-none" />
                        </div>
                        <div className="flex items-center mb-5">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                placeholder="price"
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
                                placeholder="url"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                            />
                        </div>

                        <div className="text-right">
                            <button className="py-3 px-8 bg-green-400 text-white font-bold">Add</button>
                        </div>
                    </form>
                    <Link to='/youractivity'>Show Activity</Link>
                </div>
            </div>

        </div>
    );
};

export default Update;