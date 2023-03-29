import React from 'react';
import Product from '../Product/Product';
import './Products.css'
import useProducts from '../../../hook/useProducts';
import useCard from '../../../hook/useCard';
import { GoPrimitiveDot } from 'react-icons/go';


const Products = () => {
    const [product] = useProducts();
    const [cart, handleAddToCart] = useCard();

    return (
        <div>
            <div>
                <div className='text-center mt-10'>
                    <h2 className='services-title text-4xl text-bold font-extrabold'>Agriculture Equipment</h2>
                    <div class="divider w-[200px] mx-auto"><GoPrimitiveDot className='text-2xl text-slate-400 inline-block' /><GoPrimitiveDot className='text-2xl inline-block relative right-4' /></div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='products-container mt-5'>
                        {
                            product.slice(0, 6).map(service => <Product
                                key={service._id}
                                service={service}
                                item={cart.find((x) => x._id === service?._id)}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;