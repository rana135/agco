import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { RiDeleteBin6Fill } from "react-icons/ri"
import { FcPaid } from "react-icons/fc"
import swal from "sweetalert";


const MyOrders = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/orders?email=${user.email}`
            console.log(url)
            fetch(url, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate("/");
                    }
                    return res.json();
                })
                .then(data => {
                    setProducts(data)
                })
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            console.log(url)
            fetch(url, {
                method: "DELETE",
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount) {
                        const remaining = products.filter(p => p._id !== id)
                        setProducts(remaining)
                        swal({
                            title: "Successfully Deleted",
                            text: "Your Order is deleted!",
                            icon: "success",
                        });
                    }
                    else {
                        swal({
                            title: "Access Forbidden!",
                            text: "Your order has not been Deleted!",
                            icon: "error",
                        });
                    }
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
                            <td onClick={() => handleDelete(product._id)}> <RiDeleteBin6Fill size="20" /> </td>
                            <td>{product.price}</td>
                            {/* <FcPaid size="20" /> */}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;