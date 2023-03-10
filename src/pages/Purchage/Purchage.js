import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import usePurchage from '../../hook/usePurchage';
import './Purchage.css'
import SimilarProduct from './SimilarProduct';
import { FaShoppingCart } from "react-icons/fa"
import { BiChevronLeft } from "react-icons/bi";
import swal from "sweetalert";

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
        // http://localhost:5000/products/${productsId}`
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
        axios.post('http://localhost:5000/orders', data)
            .then(response => {
                const data = response.data
                console.log(data)
                if (data.insertedId) {
                    swal({
                        title: "Successfully Booked",
                        text: "Your Order is booked!",
                        icon: "success",
                    });
                    reset()
                }
                else {
                    swal({
                        title: "Access Forbidden!",
                        text: "Your order has not been booked!",
                        icon: "error",
                    });
                }
            })
    }


    return (
        <div>
            <div className='purchage-container p-2 text-center rounded-3' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div class="min-w-screen min-h-screen bg-green-200 flex items-center p-5 lg:p-10 overflow-hidden relative">
                    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div class="md:flex items-center -mx-20">
                            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className='zoom-img relative'>
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
                            </div>
                            <div class="w-full md:w-1/2 px-10">
                                <div class="mb-10">
                                    <h1 class="font-bold uppercase text-2xl mb-5">Name : {product.productName}</h1>
                                    <p class="text-sm">{product.description}
                                        <a href="/" alt="W3Schools" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"> MORE <i class="mdi mdi-arrow-right"></i></a></p>
                                    <h5><span className='font-bold'>Available Quantity : </span>{product.availableQuantity}</h5>
                                    <h5><span className='font-bold'>Order Quantity: </span>{product.orderQuantity} <span className='text-xs'>/Minimum order quantity</span></h5>
                                </div>

                                <div>
                                    <div class="inline-block align-bottom mr-5">
                                        <span class="text-2xl leading-none align-baseline">$</span>
                                        <span class="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                                        <span class="text-lg leading-none align-baseline">Unit</span>
                                    </div>
                                    <div class="inline-block align-bottom">
                                        <label htmlFor="my-modal-3" class="btn bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><FaShoppingCart class="-ml-2 mr-2" /> BUY NOW</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2">✕</label>
                    <h3 className="text-lg font-bold">Orders Here</h3>
                    <form className='flex flex-col justify-center items-center leading-3' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className=' text-center rounded-md h-12 input input-bordered input-primary w-full'
                            value={product.productName}
                            {...register("productName")}
                        /><br />

                        <input
                            className='text-center rounded-md h-12 input input-bordered input-primary w-full '
                            value={user.displayName}
                            {...register("name", { required: true, maxLength: 40 })}
                        /><br />

                        <input
                            className=' text-center rounded-md h-12 input input-bordered input-primary w-full '
                            value={user.email}
                            {...register("email")}
                        /><br />

                        <input
                            className=' input input-bordered input-primary w-full ' placeholder='Enter Your Address'
                            type="text" {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is Required"
                                }
                            })}
                        /><br />
                        <span>
                            {errors.address?.type === 'required' && <span className="label-text text-red-500">{errors.address.message}</span>}
                        </span>

                        <input
                            className='input input-bordered input-primary w-full ' placeholder='Enter Phone Number'
                            type="number" {...register("number",
                                {
                                    maxLength: 15, required: {
                                        value: true,
                                        message: "Number is required"
                                    },
                                })}
                        /><br />
                        <span>
                            {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                        </span>
                        <br />

                        <input
                            className=' input input-bordered input-primary w-full '
                            placeholder={product.orderQuantity}
                            type="number" {...register("orderQuantity", {
                                min: MinOQ,
                                max: AvlOQ,
                                required: {
                                    value: true,
                                    message: "Number is required"
                                },
                            })}
                        /> <br />

                        {errors.orderQuantity && (
                            <span className='text-red-500 inline-flex'>
                                minimum <BiChevronLeft className='mr-3' />  Quantity <BiChevronLeft className='ml-3' />available
                            </span>
                        )}

                        <input
                            className=' bg-slate-500 font-bold text-white text-center rounded-md h-12 input input-bordered input-primary w-full '
                            type="submit"
                            value="Order"
                        />

                    </form>
                </div>
            </div>
            <SimilarProduct></SimilarProduct>
        </div>
    );
};

export default Purchage;