import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './MyProfile.css'


const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    console.log(user);
    const onSubmit = async data => {
        console.log(data)
        const url = `https://still-retreat-27608.herokuapp.com/updateProfile`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                reset()
                if (result) {
                    toast.success('Update Profile Sucessfully')
                }
            }
            )
    }

    return (
        <div>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
                    <img className='h-48 rounded-full' src={user?.photoURL} alt="" />
                </div>
                <div class="divider divider-horizontal">OR</div>
                <div class="grid flex-grow card rounded-box place-items-center"><form onSubmit={handleSubmit(onSubmit)} >
                    <h2 className="text-center font-bold">Update Your Profile</h2>
                    <div className="lg:ml-16 form-control border-0 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            value={user.displayName}
                            type="text"
                            placeholder="Enter Your Name"
                            className="input input-bordered input-primary w-full max-w-xs "
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

                    <div className="lg:ml-16 form-control border-0 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={user.email}
                            type="email"
                            placeholder="Enter your e-mail"
                            className="input input-bordered input-primary w-full max-w-xs"
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

                    <div className="lg:ml-16 form-control  border-0">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="phone"
                            placeholder="Enter your phone"
                            className="input input-bordered input-primary w-full max-w-xs"
                            // {...register("firstName", { required: true })}
                            {...register("phone", {

                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
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