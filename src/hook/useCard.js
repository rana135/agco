import { useEffect, useState, useTransition } from 'react';

const useCard = () => {
    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product]
        // setCart(newCart);
        const exist = cart.find((x) => x._id === product._id);
        if (exist) {
            const newCart = cart.map((x) => x._id === product._id ?
                { ...exist, qty: exist.qty + 1 } : x
            );
            setCart(newCart);
            localStorage.setItem("cartItems", JSON.stringify(newCart));
        }
        else {
            const newCart = [...cart, { ...product, qty: 1 }];
            setCart(newCart);
            localStorage.setItem("cartItems", JSON.stringify(newCart));
        }
    }
    const chooseOneFromCart = () => {
        let newItem = []
        const generateNumber = Math.floor(Math.random() * cart.length)
        newItem.push(cart[generateNumber]);
        setCart(newItem);
        localStorage.setItem("cartItems", JSON.stringify(newItem));
    }
    const removeAllFromCart = () => {
        setCart([]);
        localStorage.setItem("cartItems", JSON.stringify([]));
    }
    const remove = (product) => {
        const exist = cart.find((x) => x._id === product?._id);
        if (exist?.qty === 1) {
            const remainCart = cart.filter((cart) => cart._id !== product._id)
            setCart(remainCart);
            localStorage.setItem("cartItems", JSON.stringify(remainCart));
        }
        else {
            const remainCart = cart.map((x) => x._id === product?._id ?
                { ...exist, qty: exist.qty - 1 } : x
            );
            setCart(remainCart);
            localStorage.setItem("cartItems", JSON.stringify(remainCart));
        }
    }
    const removeCart = (product) => {
        const remainCart = cart.filter((cart) => cart._id !== product._id)
        setCart(remainCart);
        localStorage.setItem("cartItems", JSON.stringify(remainCart));
    }

    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            setCart(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])
        })
    }, [])
    return [cart, handleAddToCart, chooseOneFromCart, removeAllFromCart, remove, removeCart, isPending]
};

export default useCard;