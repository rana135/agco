import React from 'react';
import useCard from '../../hook/useCard';
import { AiFillDelete } from 'react-icons/ai'

const ShoppingCart = () => {
    const [cart, handleAddToCart, chooseOneFromCart, removeAllFromCart, remove, removeCart, isPending] = useCard();
    const itemsPrice = cart.reduce((prevValue, currentValue) => prevValue + currentValue.qty * currentValue.price, 0);
    const taxPrice = itemsPrice * 0.15;
    const shippingPrice = itemsPrice >= 4500 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return isPending ? <p className='flex justify-center items-center'><button className="btn loading">loading</button></p> :
        (
            <div class="bg-gray-100 mt-5 pb-32">
                <h1 class="mb-10 text-center text-2xl font-bold">Cart Items- {cart.length}</h1>
                <div class="lg:flex md:flex max-w-7xl justify-center mx-6">
                    <div className='w-full'>
                        {cart.length === 0 && <div className='text-center'>Cart is Empty</div>}
                        {
                            cart.map((product) => <div>
                                <div class="rounded-lg md:w-11/12">
                                    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                        <img src={product.img} alt="" class="w-full rounded-lg sm:w-40" />
                                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div class="mt-5 sm:mt-0">
                                                <h2 class="text-lg font-bold text-gray-900">{product.productName}</h2>
                                                <p class="mt-1 text-xs text-gray-700">{product.description.slice(0, 100)}...</p>
                                            </div>
                                            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                <div class="flex items-center border-gray-100">
                                                    <span
                                                        onClick={() => remove(product)}
                                                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                    <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product?.qty} min="1" />
                                                    <span
                                                        onClick={() => handleAddToCart(product)}
                                                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                                </div>
                                                <div class="flex items-center space-x-4">
                                                    <p class="text-sm">259.000 $</p>
                                                    <AiFillDelete className='cursor-pointer hover:text-red-500' onClick={() => removeCart(product)} size="20" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    {/* Calculation */}
                    {cart.length !== 0 &&
                        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 lg:w-2/4">
                            <div class="mb-2 flex justify-between">
                                <p class="text-gray-700">Subtotal</p>
                                <p class="text-gray-700">${itemsPrice.toFixed(2)}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">VAT</p>
                                <p class="text-gray-700">${taxPrice.toFixed(2)}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">Shipping</p>
                                <p class="text-gray-700">${shippingPrice.toFixed(2)}</p>
                            </div>
                            <hr class="my-4" />
                            <div class="flex justify-between">
                                <p class="text-lg font-bold">Total</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">${totalPrice.toFixed(2)}</p>
                                    <p class="text-sm text-gray-700">including VAT</p>
                                </div>
                            </div>
                            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                            <div className='flex gap-x-2 justify-center my-3'>
                                <button onClick={chooseOneFromCart} className='btn btn-xs btn-primary'>CHOOSE 1 FOR ME</button>
                                <button onClick={removeAllFromCart} className='btn btn-xs btn-primary'>CHOOSE AGAIN</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
};

export default ShoppingCart;




