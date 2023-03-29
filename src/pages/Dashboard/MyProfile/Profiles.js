import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import ProfileInfo from './ProfileInfo';


const Profiles = () => {
    const [profiles, setProfiles] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            const url = `https://agco-server.onrender.com/profile?email=${user.email}`
            fetch(url, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate("/");
                    }
                    return res.json();
                })
                .then(data => setProfiles(data))
        }
    }, [user])

    return (
        <div>
            {profiles.length===0 &&
                <div class="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg">
                <div class="h-40 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
                    <div class="flex justify-center">
                        <span class="mt-10 text-4xl font-extrabold text-white">{user?.displayName}</span>
                    </div>
                    <div class="flex justify-center">
                        {user?.photoURL ? <img className='object-cover w-24 h-24 mt-4 border-4 border-blue-600 rounded-full' src={user?.photoURL} alt="" /> : <FaUserCircle className='object-cover w-24 h-24 mt-5 border-4 border-blue-600  rounded-full' size="100" />}
                    </div>
                </div>
                <div class="px-6 py-10">
                    <div class="flex my-1 text-gray-600">
                        <svg class="h-5 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>{user.email}</span>
                    </div>
                </div>
                <div class="flex justify-center mt-2">
                    <button 
                    type="button" class="inline-flex items-center px-6 py-3 rounded-full text-white transition duration-150 ease-in-out bg-indigo-600 hover:bg-indigo-800 font-bold">
                        <Link to='/dashboard/updateProfile'>Edit Profile</Link>
                    </button>
                </div>
            </div>}
            <div>
                {
                    profiles.map(profile => <ProfileInfo
                        key={profile._id}
                        profile={profile}
                    ></ProfileInfo>)
                }
            </div>
        </div>
    );
};

export default Profiles;