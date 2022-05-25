import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
                    {/* <!-- Sidebar content here --> */}
                    <li> <>
                        <Link to='/dashboard'>My Orders</Link>
                        <Link to="/dashboard/myReview">Add Review</Link>
                        <Link to="/dashboard/myProfile">My Profile</Link>

                    </> </li>
                    <li>{ <>
                        <Link to="/dashboard/users">All Users</Link>
                        <Link to="/dashboard/addProducts">Add Products</Link>
                        <Link to="/dashboard/manageProducts">Manage Products</Link>

                    </>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;