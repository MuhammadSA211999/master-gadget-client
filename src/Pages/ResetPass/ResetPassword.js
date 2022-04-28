import { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ResetPass = () => {

    const [email, setEmail] = useState({ value: "", error: "" });
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)
    const navigate = useNavigate();
    if (sending) {
        toast.success('Please check your inbox', { id: 'success' })
        navigate('/')
    }
    const handleEmail = (event) => {
        const emailInput = event.target.value;

        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    };
    const handleResetPassword = async (e) => {
        e.preventDefault()
        if (email.value === '') {
            toast.error('Please provide your email', { id: 'error' })
        }
        else {
            await sendPasswordResetEmail(email.value)
            navigate('/')
        }

    }
    return (
        <div className='auth-form-container'>
            <Toaster></Toaster>
            <div className='auth-form p-4'>
                <form onSubmit={handleResetPassword}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input onBlur={handleEmail} type='text' name='email' id='email' />
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Reset Password
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ResetPass;