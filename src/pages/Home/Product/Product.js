import React from 'react';
import { Flip } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const Product = ({ service }) => {
    const navigate = useNavigate('')
    const { img, name, description, availableQuantity, _id, orderQuantity, price} = service

    const nevigateServiceDetail = id => {
        console.log(id)
        navigate(`/purchage/${id}`)
    }
    return (
        <div>
            <div className='product-container p-2 rounded-3 border-2 ' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <img src={img} alt="" />
                <h2 className='font-bold text-xxl'>Name:{name}</h2>
                <h5><span className='font-bold text-xxl'>PPU</span> <span className='text-xs'>(Price Per Unit)</span> :${price}</h5>
                <h5><span className='font-bold text-xxl'>Order Quantity:</span> : {orderQuantity}</h5>
                <p><span className='font-bold text-xxl'>Available Quantity :</span> {availableQuantity}</p>
                <Flip right cascade><p>{description}</p></Flip>
                <button onClick={() => nevigateServiceDetail(_id)} className='btn btn-dark admit-btn '>BOOK NOW</button>
            </div>
        </div>
    );
};

export default Product;