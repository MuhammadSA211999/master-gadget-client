import './Signin.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Signin = () => {
    const location = useLocation()
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();

    const handleEmail = (event) => {
        const emailInput = event.target.value;

        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    };

    const handlePassword = (event) => {
        const passwordInput = event.target.value;
        if (passwordInput === '') {
            setPassword({ value: '', error: 'Please type your password' })
        } else {
            setPassword({ value: passwordInput, error: "" });
        }

    };

    const handleLogin = (event) => {
        event.preventDefault();

        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }

        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }

        if (email.value && password.value) {
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);

                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    const errorMessage = error.message;

                    if (errorMessage.includes("wrong-password")) {
                        toast.error("Wrong Password", { id: "error" });
                    } else {
                        toast.error(errorMessage, { id: "error" });
                    }
                });
        }
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
                            <input type='text' name='email' onBlur={handleEmail} id='email' />
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
                                onBlur={handlePassword}
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