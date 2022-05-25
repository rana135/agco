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
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://still-retreat-27608.herokuapp.com/orders/${id}`
            console.log(url)
            fetch(url, {
                method: "DELETE",
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(p => p._id !== id)
                    setProducts(remaining)
                })
        }
    }



    return (
        <div>
            <h3 className='text-primary text-center text-xl font-bold'>Total Orders : {products.length}</h3>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
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
                            <td>{product.orderQuantity}</td>
                            <td>{product.address}</td>
                            <td>{product.number}</td>
                            <td onClick={() => handleDelete(product._id)}> ❌ </td>
                            <td>💳</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;