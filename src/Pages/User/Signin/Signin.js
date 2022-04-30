import './Signin.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import useTokenMake from '../../../Hooks/useTikenMake'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axios from 'axios';

const Signin = () => {
    const location = useLocation()
    const [user] = useAuthState(auth)
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email })
        const secretTokenStorage = data.secretToken
        localStorage.setItem('your_Token', secretTokenStorage)
        navigate(from, { replace: true })
    };
    return (
        <div className='auth-form-container '>
            <Toaster></Toaster>
            <div className='auth-form'>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='text' name='email' id='email' />
                        </div>
                        {email.error && (
                            <p className='d-flex error'>
                                <AiOutlineExclamationCircle className='m-1' /> {email.error}
                            </p>
                        )}
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
                        {password.error && (
                            <p className='d-flex error'>
                                <AiOutlineExclamationCircle className='m-1' /> {password.error}
                            </p>
                        )}
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