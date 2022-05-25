import React from 'react';
import {  Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-3xl font-bold text-rose-500 text-center'>Welcome To Your Dahsborad</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to="/dashboard/myReview">Add Review</Link></li>
                    <li><Link to="dashboard/myProfile=">My Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;