import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';


const MyOrders = () => {
    const [products, setProducts] = useState([])
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            const url = `https://still-retreat-27608.herokuapp.com/orders?email=${user.email}`
            console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h1 className='text-primary font-bold text-center text-2xl'>Total Order: {products.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>MOQ</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Delete</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => <tr>
                            <th>{index + 1}</th>
                            <th>{product.name}</th>
                            <td>{product.productName}</td>
                            <td>{product.orderQuantity}</td>
                            <td>{product.address}</td>
                            <td>{product.number}</td>
                            <td > ❌ </td>
                            <td>💳</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;