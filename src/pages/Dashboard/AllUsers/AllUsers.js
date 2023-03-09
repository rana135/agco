import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch('https://agco-server.vercel.app/user')
                .then(res => res.json())
                .then(data => setUsers(data))
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-primary font-bold text-xl'>All user:- {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((userInfo, index) => <UserRow
                                key={userInfo._id}
                                userInfo={userInfo}
                                users={users}
                                setUsers={setUsers}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;