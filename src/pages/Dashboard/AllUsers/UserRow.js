import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://still-retreat-27608.herokuapp.com/user/admin/${email}`, {
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
    return (
        <tr>
            <td>{email}</td>
            <td>Remove User ❌</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">Make Admin 👨‍✈️</button>}</td>
        </tr>
    );
};

export default UserRow;