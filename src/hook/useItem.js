import { useEffect, useState } from "react";

const useItem = (count) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('productsdata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [count])
    return {
        products
    }
};

export default useItem;