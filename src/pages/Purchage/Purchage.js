import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import ReactImageMagnify from 'react-image-magnify';
import { Flip } from 'react-reveal';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import usePurchage from '../../hook/usePurchage';
import './Purchage.css'

const Purchage = () => {
    const { productsId } = useParams()
    const { register, reset, handleSubmit, formState: { errors }, } = useForm();
    const [user] = useAuthState(auth);
    const [product] = usePurchage(productsId)

    var AvlOQ = product.availableQuantity
    var MinOQ = product.orderQuantity

    const onSubmit = (data) => {
        // console.log(data)
        // const orderQuantity = parseFloat(data?.orderQuantity) + parseFloat(product?.orderQuantity);
        // const QuantityDecrese = parseFloat(product?.orderQuantity) - parseFloat(data?.orderQuantity);
        // console.log(orderQuantity)
        // const update = { orderQuantity, QuantityDecrese }
        // const url = `
        // https://still-retreat-27608.herokuapp.com/products/${productsId}`
        // fetch(url, {
        //     method: "PUT",
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify(update)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        //         reset()
        //     })

        //  Post Method
        axios.post('https://still-retreat-27608.herokuapp.com/orders', data)
            .then(response => {
                const data = response.data
                console.log(data)
                if (data.insertedId) {
                    toast('Your order is booked')
                    reset()
                }
            })
    }


    return (
        <div>
            <div className='purchage-container p-2 text-center rounded-3' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <div className='zoom-img'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: product.img
                        },
                        largeImage: {
                            src: product.img,
                            width: 500,
                            height: 700
                        }
                    }} />

                </div>

                <div className='zoom-description ml-3'>
                    <h2 className='text-xl font-bold'>Name : {product.name}</h2>
                    <h5><span className='font-bold'>Price : </span>${product.price}<span className='text-xs'>/Unit</span></h5>
                    <h5><span className='font-bold'>Available Quantity : </span>{product.availableQuantity}</h5>
                    <h5><span className='font-bold'>Order Quantity: </span>{product.orderQuantity} <span className='text-xs'>/Minimum order quantity</span></h5>
                    <Flip right cascade><p> {product.description}</p></Flip>
                </div>
            </div>

            <form className='lg:ml-80' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='mb-2 text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                    value={product.name}
                    {...register("productName")}
                /><br />

                <input
                    className='mb-2 text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                    value={user.displayName}
                    {...register("name", { required: true, maxLength: 40 })}
                /><br />

                <input
                    className='mb-2 text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                    value={user.email}
                    {...register("email")}
                /><br />

                <input
                    className='mb-2 input input-bordered input-primary w-full max-w-xs ' placeholder='Enter Your Address'
                    type="text" {...register("address", {
                        required: {
                            value: true,
                            message: "Address is Required"
                        }
                    })}
                /><br />
                <label className="label">
                    {errors.address?.type === 'required' && <span className="label-text text-red-500">{errors.address.message}</span>}
                </label>

                <input
                    className='input input-bordered input-primary w-full max-w-xs ' placeholder='Enter Phone Number'
                    type="number" {...register("number",
                        {
                            maxLength: 15, required: {
                                value: true,
                                message: "Number is required"
                            },
                        })}
                /><br />
                <label className="label">
                    {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                </label>
                <br />

                <input defaultValue={product.orderQuantity}
                    className='mb-2 input input-bordered input-primary w-full max-w-xs '
                    type="number" {...register("orderQuantity", { min: MinOQ, max: AvlOQ })}
                /> <br />

                {errors.orderQuantity && (
                    <p className='text-red-500'>
                        minimum quantity
                        Will not be less than and will <br/>not be more than the available quantity.
                    </p>
                )}

                <input
                    className=' bg-slate-500 font-bold text-white text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs '
                    type="submit"
                    value="Order"
                />

            </form>
        </div>
    );
};

export default Purchage;