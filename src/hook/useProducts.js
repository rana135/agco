import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [product, setProduct]
};

export default useProducts;