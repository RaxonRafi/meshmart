import React from "react";

const CartDetails = () => {
  return (
    <div className="p-4 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Estimate Shipping and Tax */}
        <div className="bg-gray-200 shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Estimate Shipping And Tax</h2>
          <p className="text-sm text-gray-500 mb-4">
            Enter your destination to get a shipping estimate.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium">
                * Country
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              >
                <option>Bangladesh</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label htmlFor="region" className="block text-sm font-medium">
                * Region / State
              </label>
              <select
                id="region"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              >
                <option>Bangladesh</option>
                <option>California</option>
                <option>New York</option>
              </select>
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium">
                * Zip/Postal Code
              </label>
              <input
                id="zip"
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="Enter your zip code"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rafi hover:bg-red-400 text-white py-2 rounded mt-2"
            >
              GET A QUOTE
            </button>
          </form>
        </div>

        {/* Use Coupon Code */}
        <div className="bg-gray-200 shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Use Coupon Code</h2>
          <p className="text-sm  text-gray-500 mb-4">
            Enter your coupon code if you have one.
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter coupon code"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rafi  hover:bg-red-400 text-white py-2 rounded"
            >
              APPLY COUPON
            </button>
          </form>
        </div>

        {/* Cart Total */}
        <div className="bg-gray-200 shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Cart Total</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Total products</span>
              <span className="font-bold">$260.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total shipping</span>
              <div>
                <label className="block">
                  <input
                    type="radio"
                    name="shipping"
                    className="mr-2"
                  />
                  Standard $20.00
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="shipping"
                    className="mr-2"
                  />
                  Express $30.00
                </label>
              </div>
            </div>
            <div className="flex justify-between text-lg font-bold text-rafi">
              <span>Grand Total</span>
              <span>$260.00</span>
            </div>
            <button
              type="submit"
              className="w-full bg-rafi hover:bg-red-400 text-white py-2 rounded"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
