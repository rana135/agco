import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notFound.gif'
import FocusButton from './FocusButton';

const NotFound = () => {
    return (
        <div>
            <img className='h-96 w-full' src={notFound} alt="" />
            <div className='text-center'>
                <h1 className='text-primary text-2xl'>Oops! Page Not Found!</h1>
                <p>Sorry but the page you are looking for does not exist, have been removed, <br></br> name changed or is temporarily unavailable</p>
            </div>
            <div className='flex justify-center mt-3'>
                <FocusButton><Link to='/'>Go Back Home</Link></FocusButton>
            </div>
        </div>
    );
};

export default NotFound;