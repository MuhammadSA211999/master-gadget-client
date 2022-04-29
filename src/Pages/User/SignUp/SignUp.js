import './SignUp.css'
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogo from "../../../Images/google.svg";
import faceBook from '../../../Images/facebooklogo.png'
import gitLogo from '../../../Images/gitlogo.png'

const SignUp = () => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: "",
        error: "",
    });
    const [signInWithGoogle, google] = useSignInWithGoogle(auth)
    const [signInWithFacebook, facebook] = useSignInWithFacebook(auth)
    const [signInWithGithub, github] = useSignInWithGithub(auth)
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [updateProfile] = useUpdateProfile(auth)
    console.log(user);

    const navigate = useNavigate();
    if (google || facebook || github || user) {
        toast.success('Thanks for joining', { id: 'test' })
        navigate('/')
    }

    const handleGoogle = () => {
        signInWithGoogle()
    }
    const handleFacebook = () => {
        signInWithFacebook()
    }
    const handleGithub = () => {
        signInWithGithub()
    }
    const handleName = e => {
        const givenName = e.target.value
        if (givenName.length < 2) {
            setName({ value: '', error: 'Given name should be 3 charecters or long!' })
        }
        else {
            setName({ value: givenName, error: '' })
        }
    }
    const handleEmail = (e) => {
        const emailInput = e.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    };
    const handlePassword = (e) => {
        const passwordInput = e.target.value;

        if (passwordInput.length < 7) {
            setPassword({ value: "", error: "Password too short" });
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
            setPassword({
                value: "",
                error: "Password must contain a capital letter",
            });
        } else {
            setPassword({ value: passwordInput, error: "" });
        }
    };
    const handleConfirmPassword = (event) => {
        const confirmationInput = event.target.value;

        if (confirmationInput !== password.value) {
            setPasswordConfirmation({ value: "", error: "Password Mismatched" });
        } else {
            setPasswordConfirmation({ value: confirmationInput, error: "" });
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (name.value === '') {
            setName({ value: '', error: 'Name is required' })
        }
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }
        if (passwordConfirmation.value === "") {
            setPasswordConfirmation({
                value: "",
                error: "Password confirmation is required",
            });
        }
        if (email.value && password.value === passwordConfirmation.value) {
            await createUserWithEmailAndPassword(email.value, password.value)
            await updateProfile({ displayName: name.value })

        }
    };

    return (
        <div className='auth-form-container '>
            <Toaster></Toaster>
            <div className='auth-form'>
                <h1>Create an acoount</h1>
                <h1 className="project">Zusan</h1>
                <input type="image" src="" alt="" />
                <form onSubmit={handleSignup}>
                    <div className='input-field'>
                        <label htmlFor='text'>Name</label>
                        <div className='input-wrapper'>
                            <input
                                onBlur={handleName}
                                type='text'
                                name='name'
                                id='name'
                            />
                        </div>
                        {name.error && (
                            <p className='error'>
                                <AiOutlineExclamationCircle /> {name.error}
                            </p>
                        )}
                    </div>

                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input
                                onBlur={handleEmail}
                                type='email'
                                name='email'
                                id='email'
                            />
                        </div>
                        {email.error && (
                            <p className='error'>
                                <AiOutlineExclamationCircle /> {email.error}
                            </p>
                        )}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input
                                onBlur={handlePassword}
                                type='password'
                                name='password'
                                id='password'
                            />
                        </div>
                        {password.error && (
                            <p className='error'>
                                <AiOutlineExclamationCircle /> {password.error}
                            </p>
                        )}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper'>
                            <input
                                onBlur={handleConfirmPassword}
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                            />
                        </div>
                        {passwordConfirmation.error && (
                            <p className='error'>
                                <AiOutlineExclamationCircle /> {passwordConfirmation.error}
                            </p>
                        )}
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Sign Up
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/signin")}>Signin</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth' onClick={handleGoogle}>
                        <img src={GoogleLogo} alt='' />
                        <p className="mt-2"> Continue with Google </p>
                    </button>
                </div>
                <div className='input-wrapper mt-3'>
                    <button className='google-auth' onClick={handleFacebook}>
                        <img className="img" src={faceBook} alt='' />
                        <p className="mt-2"> Continue with Facebook </p>
                    </button>
                </div>
                <div className='input-wrapper mt-3'>
                    <button className='google-auth' onClick={handleGithub}>
                        <img className="img" src={gitLogo} alt='' />
                        <p className="mt-2"> Continue with Github </p>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default SignUp;