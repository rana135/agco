import React from 'react';
import Product from '../Product/Product';
import Typed from 'react-typed';
import './Products.css'
import useProducts from '../../../hook/useProducts';
import useCard from '../../../hook/useCard';
import Loading from '../../Shared/Loading';


const Products = () => {
    const [product] = useProducts();
    const [cart, handleAddToCart] = useCard();

    return (
        <div>
            <div>
                <div className='services font-bold text-4xl'>
                    <h1 className='mt-5 mb-5'>
                        <Typed className='services-title'
                            strings={[
                                'Agriculture Equipment'
                            ]}
                            typeSpeed={40}
                            backSpeed={55}
                            loop
                        >
                        </Typed>
                    </h1>
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