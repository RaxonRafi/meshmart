import CartDetails from '@/components/CartDetails';
import CartItems from '@/components/CartItems';
import React from 'react';

const CartPage = () => {
    return (
        <div className='py-5 px-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64 '>
            <div className="text-center">
                <h2 className='text-4xl'>Shop</h2>
                <span className='text-gray-500'>Home // Cart</span>
            </div>
            <div>
                <CartItems/>
            </div>
            <div>
                <CartDetails/>
            </div>


        </div>
    );
};

export default CartPage;