import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/25747110/pexels-photo-25747110/free-photo-of-purple-flowers-in-nature.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-al easy duration-500"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/29884577/pexels-photo-29884577/free-photo-of-monochrome-landscape-of-a-lonely-tree-in-bolu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$300</span>
        </div>
        <div className="text-sm text-gray-500">Description Goes Here!</div>
        <button className="rounded-2xl ring-1 ring-rafi text-rafi py-2 px-4 w-max text-xs hover:bg-rafi hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/25747110/pexels-photo-25747110/free-photo-of-purple-flowers-in-nature.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-al easy duration-500"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/29884577/pexels-photo-29884577/free-photo-of-monochrome-landscape-of-a-lonely-tree-in-bolu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$300</span>
        </div>
        <div className="text-sm text-gray-500">Description Goes Here!</div>
        <button className="rounded-2xl ring-1 ring-rafi text-rafi py-2 px-4 w-max text-xs hover:bg-rafi hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/25747110/pexels-photo-25747110/free-photo-of-purple-flowers-in-nature.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-al easy duration-500"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/29884577/pexels-photo-29884577/free-photo-of-monochrome-landscape-of-a-lonely-tree-in-bolu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$300</span>
        </div>
        <div className="text-sm text-gray-500">Description Goes Here!</div>
        <button className="rounded-2xl ring-1 ring-rafi text-rafi py-2 px-4 w-max text-xs hover:bg-rafi hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/25747110/pexels-photo-25747110/free-photo-of-purple-flowers-in-nature.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-al easy duration-500"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/29884577/pexels-photo-29884577/free-photo-of-monochrome-landscape-of-a-lonely-tree-in-bolu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$300</span>
        </div>
        <div className="text-sm text-gray-500">Description Goes Here!</div>
        <button className="rounded-2xl ring-1 ring-rafi text-rafi py-2 px-4 w-max text-xs hover:bg-rafi hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
