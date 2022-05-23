import React from 'react';
import Product from '../Product/Product';
import Typed from 'react-typed';
import './Products.css'
import useProducts from '../../../hook/useProducts';


const Products = () => {
    const [product] = useProducts()
    return (
        <div>
            <div>
                <div className='services font-bold text-4xl'>
                    <h1>
                        <Typed className='services-title'
                            strings={[
                                'Our Inventory'
                            ]}
                            typeSpeed={40}
                            backSpeed={55}
                            loop
                        >
                        </Typed>

                    </h1>
                </div>

                <div className='products-container lg:ml-24'>
                    {
                        product.map(service => <Product
                            key={service._id}
                            service={service}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;