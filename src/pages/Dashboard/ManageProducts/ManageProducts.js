import React from 'react';
import { Flip } from 'react-reveal';
import Typed from 'react-typed';
import useProducts from '../../../hook/useProducts';
import './ManageProducts.css'

const ManageProducts = () => {
    const [product, setProduct] = useProducts()
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://still-retreat-27608.herokuapp.com/products/${id}`
            fetch(url, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = product.filter(p => p._id !== id)
                    setProduct(remaining)
                })
        }
    }

    return (
        <div>
            <div className='productsContainers'>
                <h1>
                    <Typed className='products-title'
                        strings={[
                            'Manage Inventory'
                        ]}
                        typeSpeed={40}
                        backSpeed={55}
                        loop
                    >
                    </Typed>
                </h1>
            </div>

            <div className='MngProducts-container'>
                {
                    product.map(p => <div>
                        <div className='MngProducts shadow-sm p-2 text-center rounded-3 border-2'>

                            <img src={p.img} alt="" />
                            <h2>Name : {p.name}</h2>
                            <h5>Price : ${p.price}<span className='text-xs'>/Unit</span></h5>
                            <h5>Available Quantity : {p.availableQuantity}</h5>
                            <h5>MOQ:{p.orderQuantity} <span className='text-xs'>/Minimum order quantity</span></h5>
                            <Flip right cascade><p> {p.description}</p></Flip>
                            <button className='btn btn-dark admit-btn' onClick={() => handleDelete(p._id)}>
                                Delete Item
                            </button>

                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;