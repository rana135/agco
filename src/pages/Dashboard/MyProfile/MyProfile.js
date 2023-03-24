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
        // console.log(data)
        fetch(`http://localhost:5000/updateProfile/${email}`, {
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
                if (result.modifiedCount) {
                    toast.success('Profile Update Sucessfully')
                    reset()
                }
            })
    }

    return (
        <div>
            <div className='bg-slate-100'>
                <div class="flex flex-col justify-center items-center w-full lg:flex-row">
                    <form className='mb-10 overflow-x-hidden' onSubmit={handleSubmit(onSubmit)} >
                        <h2 className="text-center font-bold">Update Your Profile</h2>
                        <div>
                            <label className="label">
                                <span className="label-text lg:ml-20">Name</span>
                            </label>
                            <input
                                value={user.displayName}
                                type="text"
                                placeholder="Enter Your Name"
                                className="
                                
                                input input-bordered input-primary max-w-xs lg:w-72 lg:ml-20"
                                // {...register("firstName", { required: true })}
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
                                <span className="label-text lg:ml-20">Email</span>
                            </label>
                            <input value={user.email}
                                type="email"
                                placeholder="Enter your e-mail"
                                className="input input-bordered input-primary max-w-xs lg:w-72 lg:ml-20"
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
                                <span className="label-text lg:ml-20">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Location"
                                className="input input-bordered input-primary max-w-xs lg:w-72 lg:ml-20"
                                {...register("location")}
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text lg:ml-20">Education</span>
                            </label>
                            <input
                                className='mb-3  input input-bordered input-primary max-w-x  lg:w-72 lg:ml-20'
                                placeholder='Education'
                                type="text"{...register("Education")}
                            /><br />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text lg:ml-20">LinkedIn Link Here</span>
                            </label>
                            <input
                                className='mb-3  input input-bordered input-primary max-w-x  lg:w-72 lg:ml-20'
                                placeholder='LinkedIn Profile Link'
                                type="text"{...register("LinkedIn")}
                            /><br />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text lg:ml-20">Phone</span>
                            </label>
                            <input
                                type="phone"
                                placeholder="Enter your phone"
                                className='mb-3  input input-bordered input-primary max-w-x  lg:w-72 lg:ml-20'
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

                        <input type="submit" className='form-button lg:ml-36 form-button ml-3' value="Save Change" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;