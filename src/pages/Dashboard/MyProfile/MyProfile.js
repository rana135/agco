import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


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
                    <img className=' rounded-full' src={user?.photoURL} alt="" />
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
                        <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="input input-bordered input-primary w-full max-w-xs "
                            // {...register("firstName", { required: true })}
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
                            className="input input-bordered input-primary w-full max-w-xs "
                            {...register("location")}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">LinkedIn profile link</span>
                        </label>
                        <input
                            className='mb-3  input input-bordered input-primary w-full max-w-x'
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
                            placeholder="Enter your password"
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
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>
                    </div>

                    <input type="submit" className='lg:ml-20 form-button ml-3' value="Save Change" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;