import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://still-retreat-27608.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [product, setProduct]
};

export default useProducts;