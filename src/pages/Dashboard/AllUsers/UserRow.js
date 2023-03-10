import React from 'react';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md"
import { RiAdminFill } from "react-icons/ri"

const UserRow = ({ userInfo, users, setUsers, index }) => {
    const { email, role, _id } = userInfo;

    const makeAdmin = () => {
        fetch(`https://agco-server.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    // console.log(data)
                    toast.success('Sucessfully made an admin')
                }
            })
    }

    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://agco-server.onrender.com/deleteUser/${id}`
            console.log(url)
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        const remaining = users.filter(p => p._id !== id)
                        setUsers(remaining)
                        // console.log(remaining);
                        toast.success("User Delete Successfully")
                    }
                    else {
                        toast.error("User Delete Failed")
                    }
                })
        }
    }

    return (
        <tr>
            <td><td>{index + 1}</td></td>
            <td>{email}</td>
            <td>{role ? role : "user"}</td>
            <td onClick={() => handleDelete(_id)}><MdDelete size="25" /></td>
            <td>
                {role !== 'admin' ?
                    <button className='btn btn-sm' onClick={makeAdmin}>Make Admin</button> : <RiAdminFill size='25' />
                }
            </td>
        </tr>
    );
};

export default UserRow;