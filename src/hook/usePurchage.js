import { useEffect, useState } from "react"


const usePurchage = productsId => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = (`http://localhost:5000/products/${productsId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productsId])
    return [product, setProduct]
}
export default usePurchage;