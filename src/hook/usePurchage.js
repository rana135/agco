import { useEffect, useState } from "react"


const usePurchage = productsId => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = (`https://agco-server.vercel.app/products/${productsId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productsId])
    return [product, setProduct]
}
export default usePurchage;