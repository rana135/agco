import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hook/useAdmin';
import {FaHouseUser} from "react-icons/fa"
import {GrProductHunt} from "react-icons/gr"
import {FaAddressCard} from "react-icons/fa"
import {ImProfile} from "react-icons/im"
import {BiAddToQueue} from "react-icons/bi"

const Dashboard = () => {
    const [user] = useAuthState(auth)
    // console.log(user);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-3xl font-bold text-rose-500 text-center'>Welcome To Your Dahsborad</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side bg-slate-200 lg:w-5/6">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-800 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {/* <!-- Sidebar content here --> */}
                    <li>{!admin && <>
                        <Link to='/dashboard'>My Orders</Link>
                        <Link to="/dashboard/myReview">Add Review</Link>
                    </>} </li>
                    <li>{admin && <>
                        <Link to="/dashboard/users"><FaHouseUser />All Users</Link>
                        <Link to="/dashboard/addProducts"><BiAddToQueue />Add Products</Link>
                        <Link to="/dashboard/manageProducts"><GrProductHunt />Manage Products</Link>
                    </>}</li>
                    <li><Link to="/dashboard/myProfile"><ImProfile />My Profile</Link></li>
                    <li><Link to="/dashboard/updateProfile"><FaAddressCard />Update Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;