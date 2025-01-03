"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const CartModal = () => {
    const cartItems = true;
    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'> {!cartItems ? ( 
            <div className=''>Cart Empty</div>
        ) : (
            <>
            <h2 className='text-xl'>Shopping Cart</h2>
             {/* list */}
            <div className='flex flex-col gap-8'>
                {/* item */}

            <div className='flex gap-4'>
                <Image src="https://images.pexels.com/photos/25747110/pexels-photo-25747110/free-photo-of-purple-flowers-in-nature.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' width={72} height={96} className='object-cover rounded-md'/>
                <div className='flex flex-col justify-between w-full'>
                    {/* top */}
                    <div className=''>
                        {/* title */}
                        <div className='flex items-center justify-between gap-8'>
                            <h3 className='font-semibold'>Product Name</h3>
                            <div className='p-1 bg-gray-50 rounded-sm'>$50 </div>
                        </div>
                        {/* desc */}
                        <div className='text-sm text-gray-500'>
                            available
                        </div>
                    </div>

                    {/* bottom */}
                    <div className='flex justify-between text-sm'>
                        <span className='text-gray-500'>Qty. 2</span>
                        <span className='text-blue-500'>Remove</span>

                    </div>
                </div>

            </div>
            <div className='flex gap-4'>
                <Image src="https://images.pexels.com/photos/25747110/pexels-photo-25747110/free-photo-of-purple-flowers-in-nature.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' width={72} height={96} className='object-cover rounded-md'/>
                <div className='flex flex-col justify-between w-full'>
                    {/* top */}
                    <div className=''>
                        {/* title */}
                        <div className='flex items-center justify-between gap-8'>
                            <h3 className='font-semibold'>Product Name</h3>
                            <div className='p-1 bg-gray-50 rounded-sm'>$50 </div>
                        </div>
                        {/* desc */}
                        <div className='text-sm text-gray-500'>
                            available
                        </div>
                    </div>

                    {/* bottom */}
                    <div className='flex justify-between text-sm'>
                        <span className='text-gray-500'>Qty. 2</span>
                        <span className='text-blue-500'>Remove</span>

                    </div>
                </div>

            </div>
            </div>
             {/* bottom */}
            <div className=''>
                <div className='flex items-center justify-between font-semibold'>
                    <span className="">Subtotal</span>
                    <span className="">$50</span>
                </div>
                <p className='text-gray-50 text-sm mt-2 mb-4'>
                   Shipping and taxes calculated at checkout.
                </p>
                <div className='flex justify-between text-sm'>


                    <Link href="/cart">
                        <button className='rounded-md py-3 px-4 ring ring-gray-300'>View Cart</button>
                    </Link>
            
                    <Link href="/checkout">
                        <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
                    </Link>
                </div>

            </div>
            </>
        )}
            
        </div>
    );
};

export default CartModal;