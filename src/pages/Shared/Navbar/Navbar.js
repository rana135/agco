import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import titleLogo from '../../../assets/logo/agco.png'
import auth from '../../../firebase.init';
import { AiFillHome } from 'react-icons/ai';
import { RiArticleFill } from 'react-icons/ri';
import { HiInformationCircle } from 'react-icons/hi';
import { MdDashboardCustomize } from 'react-icons/md';
import { MdContactPhone } from 'react-icons/md';
import { FaSignInAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import useCard from '../../../hook/useCard';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [cart] = useCard();

    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };

    const menuItems = <>
        <li className='lg:ml-36'><Link to='/'>HOME<AiFillHome /></Link></li>
        <li><Link to='/blogs'>BLOGS<RiArticleFill /></Link></li>
        <li><Link to='/about'>ABOUT<HiInformationCircle /></Link></li>
        <li><Link to='/dashboard'>DASHBOARD<MdDashboardCustomize /></Link></li>
        <div class="flex justify-center items-center">
            <div class="relative py-2">
                <div class="top-1 absolute left-7">
                    <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cart?.length}</p>
                </div>
                <li><Link to='/shoppingCart'><IoMdCart size="25" />
                </Link></li>
            </div>
        </div>
        <li><Link to='/contact'>CONTACT<MdContactPhone /></Link></li>
        <li>{user ? <button onClick={logout} className="btn btn-secondary">signout<FaSignOutAlt /></button> : <Link to='/login'>LOGIN <FaSignInAlt /></Link>}</li>
    </>
    return (
        <div className="navbar bg-gradient-to-r from-secondary to-primary lg:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img className='h-10 mx-8' src={titleLogo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end ml-0">
                <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;