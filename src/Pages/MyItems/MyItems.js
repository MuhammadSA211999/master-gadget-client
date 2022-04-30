import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast'

const MyItems = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [myGadgets, setMyGadgets] = useState([])
    console.log(myGadgets);


    useEffect(() => {
        const email = user?.email
        console.log(email);
        (async () => {
            const url = `http://localhost:5000/myGadgets?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('your_Token')}`
                    }
                })
                setMyGadgets(data)
            }

            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    toast.error(error.message, { id: 'error' })
                    signOut(auth)
                    navigate('/signIn')
                }

            }
        })()

    }, [user, loading])

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
        <div className='mx-auto'>
            <h1 className='text-center text-3xl font-semibold m-2 text-cyan-500'>YOUR TOTAL GADGET IS {myGadgets.length}</h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Gadget Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myGadgets.map(gadget => <tr
                                key={gadget._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {gadget.name}
                                </th>
                                <td className="px-6 py-4">
                                    {gadget.supplier}
                                </td>
                                <td className="px-6 py-4 w-10 hover:skew-x-3 hover:shadow-lg h-10">
                                    <img src={gadget.image} alt="" />
                                </td>
                                <td className="px-6 py-4">
                                    {gadget.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {gadget.price}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/updateto/${gadget._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</Link>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => deleteGadget(gadget._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyItems;