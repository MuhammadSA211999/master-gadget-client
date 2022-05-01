import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Google from '../../../Images/google.svg';
import git from '../../../Images/gitlogo.png';
import fb from '../../../Images/facebooklogo.png'
import useTokenMake from '../../../Hooks/useTikenMake';
const CreateUser = () => {
    const [signInWithGoogle, google] = useSignInWithGoogle(auth)
    const [signInWithFacebook, facebook] = useSignInWithFacebook(auth)
    const [signInWithGithub, github] = useSignInWithGithub(auth)
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const [updateProfile] = useUpdateProfile(auth)
    const [token] = useTokenMake(user || google || facebook || github)
    console.log(token);

    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        console.log(name, email, password, confirmPassword);


        if (email && (password === confirmPassword)) {

            try {
                await createUserWithEmailAndPassword(email, password)
                await updateProfile({ displayName: name })
                toast.success('Thanks for membership', { id: 'test' })
                // .then(result => {
                //     const user = result.user
                //     console.log(user);

                //     updateProfile({ displayName: name })


                // })
            }
            catch (error) {
                console.log(error)
            }
        }
    }

    if (token) {
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
    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Create an acoount</h1>
                <h1 className="project">Zusan</h1>
                <input type="image" src="" alt="" />

                <form onSubmit={handleSignup}>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " require />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="confirmPassword" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
                </form>

                <p className='redirect'>
                    Already have an account?{" "}
                    <Link to="/signIn">Login</Link>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth' onClick={handleGoogle}>
                        <img src={Google} alt='' />
                        <p className="mt-2"> Continue with Google </p>
                    </button>
                </div>
                <div className='input-wrapper mt-3'>
                    <button className='google-auth' onClick={handleFacebook}>
                        <img className="img" src={fb} alt='' />
                        <p className="mt-2"> Continue with Facebook </p>
                    </button>
                </div>
                <div className='input-wrapper mt-3'>
                    <button className='google-auth' onClick={handleGithub}>
                        <img className="img" src={git} alt='' />
                        <p className="mt-2"> Continue with Github </p>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default CreateUser;