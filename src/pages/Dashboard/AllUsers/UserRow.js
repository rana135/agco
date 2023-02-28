import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role, _id } = user
    const makeAdmin = () => {
        fetch(`https://agco-server.vercel.app/user/admin/${email}`, {
            method: 'PUT',
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Sucessfully made an admin')
                }
            })
    }
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://agco-server.vercel.app/deleteUser/${id}`
            console.log(url)
            fetch(url, {
                method: "DELETE",
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // const remaining = users.filter(p => p._id !== id)
                    // setUsers(remaining)
                })
        }
    }
    return (
        <tr>
            <td>{email}</td>
            <td onClick={() => handleDelete(_id)}>Remove User ❌</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">Make Admin 👨‍✈️</button>}</td>
        </tr>
    );
};

export default UserRow;