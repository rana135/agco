import React from 'react';
import { useForm } from 'react-hook-form';
import ReactImageMagnify from 'react-image-magnify';
import { Flip } from 'react-reveal';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import usePurchage from '../../hook/usePurchage';
import './Purchage.css'

const Purchage = () => {
    const { productsId } = useParams()
    const { register, reset, handleSubmit } = useForm();
    const [product, setProduct] = usePurchage(productsId)
    console.log(product);

    const onSubmit = (data) => {
        console.log(data)
        const orderQuantity = parseFloat(data?.orderQuantity) + parseFloat(product?.orderQuantity);
        const QuantityDecrese = parseFloat(product?.orderQuantity) - parseFloat(data?.orderQuantity);
        console.log(orderQuantity)
        const update = { orderQuantity ,QuantityDecrese }
        const url = `
        http://localhost:5000/products/${productsId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                reset()
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

                    <div className='flex w-52 mx-auto mt-3'>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input className='mb-3 mr-2 h-12 w-60 rounded-md text-center' placeholder='Update Quantity' type="number" {...register("orderQuantity")} /> <br/>
                            <input className='update-btn font-bold text-xl' type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchage;