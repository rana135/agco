import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { FaUserCircle } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"


const ProfileInfo = ({ profile }) => {
    const [user] = useAuthState(auth);
    const {Education,LinkedIn,location,phone} = profile;
    console.log(Education);
    return (
        <div>
            <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                <div class="px-6">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full flex justify-center">
                            <div class="relative">
                                {user?.photoURL ? <img className='rounded-full' src={user?.photoURL} alt="" /> : <FaUserCircle size="100" />}
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-10">
                        <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{user?.displayName}</h3>
                        <div class="text-xs mt-0 mb-2 text-slate-400">
                            <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{user?.email}
                        </div>
                    </div>
                    <div class="w-full text-center mt-5">
                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div class="p-3 text-center">
                                <span class="text-sm text-slate-400"><span class="font-bold block uppercase tracking-wide text-slate-700">Education</span></span>
                                <span class="text-xl block uppercase tracking-wide text-slate-700">{Education}</span>
                            </div>
                            <div class="p-3 text-center">
                                <span class="text-sm text-slate-400"><span class="font-bold block uppercase tracking-wide text-slate-700">Location</span></span>
                                <span class="text-xl block uppercase tracking-wide text-slate-700">{location}</span>
                            </div>
                            <div class="p-3 text-center">
                                <span class="text-sm text-slate-400"><span class="font-bold block uppercase tracking-wide text-slate-700">Phone</span></span>
                                <span class="text-xl block uppercase tracking-wide text-slate-700">{phone}</span>
                            </div>
                        </div>
                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                            <a href={LinkedIn} class="p-3 text-center" target="blank">
                                <span class="text-sky-700"><BsLinkedin size={25}/></span>
                            </a>
                        </div>
                    </div>
                    <div class="mt-6 py-6 border-t border-slate-200 text-center">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4">
                                <span class="font-normal text-slate-700 hover:text-slate-400">{user.metadata.lastSignInTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProfileInfo;