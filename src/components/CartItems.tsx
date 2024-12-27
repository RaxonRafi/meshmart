'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CartItems = () => {
    const cartItems = [
        {
            id: 1,
            name: "Product Name 1",
            price: 60.0,
            qty: 1,
            subtotal: 70.0,
            image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            name: "Product Name 2",
            price: 50.0,
            qty: 1,
            subtotal: 80.0,
            image: "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            name: "Product Name 3",
            price: 70.0,
            qty: 1,
            subtotal: 90.0,
            image: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

      const [quantity,setQuantity] = useState(1);
        // temporary
        const stock = 4;
        const handleQuantity = (type: "i"|"d")=>{
            if(type === "d" && quantity > 1){
                setQuantity((prev)=> prev -1);
            }
            if(type === "i" && quantity < stock){
                setQuantity((prev)=> prev + 1);
            }
        }
    return (
        <div className="p-4 sm:p-8">
            <h1 className="text-2xl font-bold mb-6">Your Cart Items</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-none">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left">Image</th>
                            <th className="px-4 py-2 text-left">Product Name</th>
                            <th className="px-4 py-2 text-left">Unit Price</th>
                            <th className="px-4 py-2 text-left">Qty</th>
                            <th className="px-4 py-2 text-left">Subtotal</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2">
                                    <div className="relative w-20 h-20">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded"
                                        />
                                    </div>
                                </td>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2">
            
                                        <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("d")}>-</button>
                                        {quantity}
                                        <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("i")}>+</button>
                                  
                                    </div>
                                </td>
                                <td className="px-4 py-2">${item.subtotal.toFixed(2)}</td>
                                <td className="px-4 py-2">
                                    <button className="text-rafi hover:underline">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">

                <Link href="/">
                    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                        Continue Shopping
                    </button>
                </Link>
                <Link href="/">
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                        Update Shopping Cart
                    </button>
                </Link>
                
                <button className="px-4 py-2 bg-rafi hover:bg-red-600 text-white rounded">
                    Clear Shopping Cart
                </button>
            </div>
        </div>
    );
};

export default CartItems;
