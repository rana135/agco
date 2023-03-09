import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import ProfileInfo from './ProfileInfo';


const Profiles = () => {
    const [profiles, setProfiles] = useState([])
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/profile?email=${user.email}`
            console.log(url)
            fetch(url,{
                method:"GET",
                headers:{
                    "authorization":`Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    if(res.status === 401 || res.status === 403){
                        navigate("/");
                    }
                    return res.json();
                })
                .then(data => setProfiles(data))
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {
                profiles.map(profile => <ProfileInfo
                    key={profile._id}
                    profile={profile}
                ></ProfileInfo>)
            }
        </div>
    );
};

export default Profiles;