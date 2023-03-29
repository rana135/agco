import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {
        console.log(data)
        const url = `https://agco-server.onrender.com/products`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Item added Sucessfully')
                reset()
            }
            )
    };

    return (
        <div className='container mx-auto p-4 bg-white'>
            <h1 className='comment-title text-center font-bold text-primary text-2xl mt-2'>Please Add  Products</h1>
            <div className='w-full md:w-1/2 lg:w-2/3 mx-auto my-5'>
                <form className='flex flex-col mt-4' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        value={user.displayName}
                        {...register("adminName", { required: true, maxLength: 25 })}
                    /> <br />
                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        value={user.email}
                        {...register("email")}
                    /> <br />

                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        placeholder='Enter Product Name'
                        type="text" {...register("name")}
                    /><br />
                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        placeholder='Enter Price Per Unit'
                        type="number" {...register("price")}
                    /><br />
                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        placeholder='Enter Minimum Order Quantity'
                        type="number" {...register("orderQuantity")}
                    /><br />
                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        placeholder='Enter Available Order Quantity'
                        type="number" {...register("availableQuantity")}
                    /><br />

                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        placeholder='Enter Img url'
                        type="text"{...register("img")}
                    /><br />


                    <textarea
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        placeholder='Enter Product Details'
                        {...register("description",
                            {
                                maxLength: 250, required: {
                                    value: true,
                                    message: "Comment is required"
                                },
                            })}
                    /><br />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>

                    <input
                        className='form-button px-4 py-3 leading-6 text-base rounded-md border border-transparent  focus:outline-none text-blue-100 hover:text-white focus:ring-2 hover:bg-sky-600 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium'
                        type="submit"
                        value="Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;