import './Header.css'
import { signOut } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav>
            <div className='logo-container'>
                <strong>Logo</strong>
            </div>
            <div className='link-container'>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/manage'
                >
                    Manage
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/addGadget'
                >
                    Add
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/myItems'
                >
                    My Items
                </NavLink>
                {user?.email ? (
                    <button onClick={handleSignOut} className='logout-button'>
                        Logout
                    </button>
                ) : (
                    <NavLink
                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                        to='/signIn'
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Header;