import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import signUp from '../../assets/images/Sign up-pana.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hook/useToken';
import { toast } from 'react-toastify';


const SignUp = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user)


    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
            toast.success('SignUp sucessfully')
        }
    }, [token, from, navigate])

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('Updated profile');
    };

    let signUpError;
    if (error || gError || updateError) {
        signUpError = <p className='text-red-500'><small>Error:
            {error?.message || gError?.message || updateError.message}</small></p>
    }
    if (loading || gLoading || updating) {
        return <Loading></Loading>;
    }

    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 justify-center'>
            <div>
                <img src={signUp} alt="" />
            </div>
            <div className='flex items-center justify-center lg:ml-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl text-primary">SIGN UP</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <small>Name</small>
                                <input
                                    type="text"
                                    placeholder="name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {

                                        required: {
                                            value: true,
                                            message: "Name is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <small>Email</small>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {

                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <small>Password</small>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {

                                        required: {
                                            value: true,
                                            message: "password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signUpError}
                            <input type="submit" value='REGISTER' className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold w-full max-w-xs" />
                        </form>
                        <p><small>Already have an Account? <Link className='text-primary link-hover' to="/login">Please sign in</Link></small></p>
                        <div className="divider text-primary">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-primary w-full border-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-7 h-7"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                            <p>CONTINUE WITH GOOGLE</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;