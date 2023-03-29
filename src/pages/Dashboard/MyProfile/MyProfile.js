import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './MyProfile.css'


const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email;

    const onSubmit = async data => {
        console.log(data)
        fetch(`https://agco-server.onrender.com/updateProfile/${email}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Profile Update Failed')
                }
                return res.json();
            })
            .then(result => {
                console.log(result);
                if (result) {
                    toast.success('Profile Update Sucessfully')
                    reset()
                }
            })
    }

    return (
        <div>
            <div className='container mx-auto p-4 bg-white'>
                <div class="w-full md:w-1/2 lg:w-2/3 mx-auto my-3">
                    <form className='flex flex-col mt-4' onSubmit={handleSubmit(onSubmit)} >
                        <h2 className="text-center font-bold">Update Your Profile</h2>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                value={user.displayName}
                                type="text"
                                placeholder="Enter Your Name"
                                className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input value={user.email}
                                type="email"
                                placeholder="Enter your e-mail"
                                className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                {...register("email", {
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid E-mail'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Location"
                                className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                {...register("location")}
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input
                                className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                                placeholder='Education'
                                type="text"{...register("Education")}
                            /><br />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">LinkedIn Link Here</span>
                            </label>
                            <input
                                className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                                placeholder='LinkedIn Profile Link'
                                type="text"{...register("LinkedIn")}
                            /><br />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="phone"
                                placeholder="Enter your phone"
                                className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                                // {...register("firstName", { required: true })}
                                {...register("phone", {

                                    minLength: {
                                        value: 11,
                                        message: 'Must be 11 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}

                            </label>
                        </div>

                        <input type="submit" className='form-button mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent  focus:outline-none text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium' value="Save Change" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;