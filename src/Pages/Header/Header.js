import './Header.css'
import logo from '../../Images/signodo.png'
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
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='link-container'>
                {
                    user?.email ? <NavLink
                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                        to='/manage'
                    >
                        Manage
                    </NavLink> : ''
                }
                {user?.email ? <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/addGadget'
                >
                    Add
                </NavLink> : ''}
                {user?.email ? <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/myItems'
                >
                    My Items
                </NavLink> : ''}

                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/blog'
                >
                    Blog
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/'
                >
                    Home
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