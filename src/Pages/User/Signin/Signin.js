import './Signin.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import useTokenMake from '../../../Hooks/useTikenMake'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axios from 'axios';

const Signin = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'
    const [signInWithEmailAndPassord, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const [token] = useTokenMake(user)
    console.log(user?.user?.email);
    if (error) {
        const userEr = (error.message.split(':')[1]);
        const se = userEr.includes('user-not-found');
        if (se) {
            toast.error('user does not exist', { id: 'test' })
        }
        else {
            toast.error(error.message, { id: 'test' })
        }


    }
    // if (user) {
    //     console.log(user);
    //     navigate('/')
    // }
    if (token) {
        toast.success('Explore on!', { id: 'test' })
        console.log(token);
        navigate(from, { replace: true })
    }

    const handleSignin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassord(email, password)
        e.target.reset()
    }

    return (
        <div className='auth-form-container '>
            <Toaster></Toaster>
            <div className='auth-form'>
                <h1>Login</h1>
                <form onSubmit={handleSignin}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='text' name='email' id='email' />
                        </div>
                        {/* {email.error && (
                            <p className='d-flex error'>
                                <AiOutlineExclamationCircle className='m-1' /> {email.error}
                            </p>
                        )} */}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input
                                type='password'
                                name='password'
                                id='password'
                            />
                        </div>
                        {/* {password.error && (
                            <p className='d-flex error'>
                                <AiOutlineExclamationCircle className='m-1' /> {password.error}
                            </p>
                        )} */}
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>

                </form>
                <p className='redirect'>
                    For More Exploring{" "}
                    <Link to="/createUser">Create New Account</Link>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <Link to='/resetPass' className="fs-5">Forget Password?</Link>
            </div>
        </div>
    );
};

export default Signin;