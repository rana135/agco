import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const AddReview = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const url = `https://agco-server.onrender.com/reviews`
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
                    toast("Your comment has been successfully Added")
                }
            })
    };


    return (
        <div className='container mx-auto p-4 bg-white'>
            <div className='w-full md:w-1/2 lg:w-2/3 mx-auto my-5'>
                <h1 className='text-xl text-center text-primary font-bold  mb-6'>Please Add  Review</h1>
                <form className='flex flex-col mt-4' onSubmit={handleSubmit(onSubmit)}>
                    <input className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm' value={user.displayName} {...register("name", { required: true, maxLength: 20 })} /> <br />

                    <input className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm' placeholder='Enter Your ratings' type="number" {...register("ratings", { maxLength: 5 })} required /><br />

                    <input className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm' placeholder='Enter Your location' type="text" {...register("location")} required /><br />

                    <input value={user.photoURL} className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm' placeholder='image URL' type="text" {...register("img")} /><br />

                    <textarea className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm' placeholder='Enter Your Comment'  {...register("review")} required /><br />

                    <input className='form-button mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent  focus:outline-none text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium' placeholder='Enter Your' type="submit" value="Add Comment" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;