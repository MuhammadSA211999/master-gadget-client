import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyItems = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [myGadgets, setMyGadgets] = useState([])
    console.log(orders);


    useEffect(() => {
        const email = user?.email
        const getMyItems = async () => {
            const url = `http://localhost:5000/order?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('')}`
                    }
                })
                setMyGadgets(data)
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }

        getMyItems()
    }, [user])
    return (
        <div>
            <h1>my items</h1>
        </div>
    );
};
