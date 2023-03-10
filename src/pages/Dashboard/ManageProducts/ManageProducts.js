import React from 'react';
import { Flip } from 'react-reveal';
import { toast } from 'react-toastify';
import Typed from 'react-typed';
import useProducts from '../../../hook/useProducts';
import './ManageProducts.css'

const ManageProducts = () => {
    const [product, setProduct] = useProducts()
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = product.filter(p => p._id !== id)
                        setProduct(remaining)
                        // console.log(remaining);
                        toast.success("Product Delete Successfully")
                    }
                    else {
                        toast.error("Product Delete Failed")
                    }
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
                        <div className='MngProducts shadow-sm p-2 rounded-3 border-2'>

                            <img src={p.img} alt="" />
                            <h2 className='font-bold text-xxl'>Name:{p.productName}</h2>
                            <h5><span className='font-bold text-xxl'>PPU</span> <span className='text-xs'>(Price Per Unit)</span> :${p.price}</h5>
                            <h5><span className='font-bold text-xxl'>Order Quantity:</span> : {p.orderQuantity}</h5>
                            <p><span className='font-bold text-xxl'>Available Quantity :</span> {p.availableQuantity}</p>
                            <Flip right cascade><p>{p.description.slice(0, 80)}...</p></Flip>
                            <button className='btn btn-dark admit-btn' onClick={() => handleDelete(p._id)}>
                                Delete Item
                            </button>

                        </div>

                    </div>)
                }
            </div>
        </div >
    );
};

export default ManageProducts;