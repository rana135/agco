import React from 'react';

const Item = ({ product }) => {
    const { picture, price } = product;
    return (
        <div className='text-center relative'>
            <div className='md:w-[280px] md:h-[320px]'>

                <img src={picture} alt="products" class="rounded-xl" />

            </div>
            <div className='mt-5'>
                <p className='space-x-2'>Summer Collection</p>
                <p className='text-secondary font-bold'>${price}</p>
            </div>
        </div>

    );
};

export default Item;