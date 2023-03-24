import React from 'react';
import { Flip } from 'react-reveal';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'



const Product = ({ service, handleAddToCart, item }) => {
    const navigate = useNavigate('')
    const { img, productName, description, availableQuantity, _id, orderQuantity, price } = service

    const nevigateServiceDetail = id => {
        // console.log(id)
        navigate(`/purchage/${id}`)
    }
    return (
        <div>
            <div className='product-container p-2 rounded-3 border-2 ' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className='w-full h-56'>
                    <img src={img} alt="" />
                </div>
                <h2 className='font-bold text-xxl'>Name:{productName}</h2>
                <h5><span className='font-bold text-xxl'>PPU</span> <span className='text-xs'>(Price Per Unit)</span> :${price}</h5>
                <h5><span className='font-bold text-xxl'>Order Quantity:</span> : {orderQuantity}</h5>
                <p><span className='font-bold text-xxl'>Available Quantity :</span> {availableQuantity}</p>
                <Flip right cascade><p>{description.slice(0, 80)}...</p></Flip>
                <div className='flex justify-between'>
                    <button onClick={() => nevigateServiceDetail(_id)} className='btn btn-dark admit-btn'>BOOK NOW</button>
                    {
                        item ? <div class="flex justify-center items-center gap-1 btn-field"><Link to='/shoppingCart'><BsFillArrowRightCircleFill className='hover:text-blue-500' size="25" />
                        </Link>
                        </div> :
                            <button onClick={() => handleAddToCart(service)} className=''><BsFillCartPlusFill className='hover:text-blue-500' size="25" /></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;