import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddReview.css';



const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        console.log(data)
        const url = `https://still-retreat-27608.herokuapp.com/reviews`
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
                    toast("Your comment has been successful.")
                }
            })
    };


    return (
        <div className='addreviewContainer'>
            <h1 className='text-3xl text-center text-primary font-bold mt-8 mb-6'>Please Add  Review</h1>
            <div className='addreview'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 text-center rounded-md h-12 lg:w-96' value={user.displayName} {...register("name", { required: true, maxLength: 20 })} /> <br />

                    <input className='mb-2  rounded-md h-12 lg:w-96 text-center' placeholder='Enter Your ratings' type="number" {...register("ratings", { maxLength: 5 })} required /><br />

                    <input className='mb-2  rounded-md h-12 lg:w-96 text-center' placeholder='Enter Your location' type="text" {...register("location")} required /><br />

                    <input value={user.photoURL} className='mb-2  rounded-md h-12 lg:w-96 text-center' placeholder='image URL' type="text" {...register("img")} /><br />

                    <textarea className='mb-2  rounded-md h-36 lg:w-96 text-center bg-slate-200' placeholder='Enter Your Comment'  {...register("review")} required /><br />

                    <input className='mb-2 rounded-md h-12 bg-primary lg:w-96 text-white font-bold text-xl' placeholder='Enter Your' type="submit" value="Add Comment" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;