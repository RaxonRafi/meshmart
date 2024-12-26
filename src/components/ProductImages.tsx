"use client"
import React, { useState } from 'react';
import Image from 'next/image';


const images = [
    {
        id:1,
        url:'https://images.pexels.com/photos/2588432/pexels-photo-2588432.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id:2,
        url:'https://images.pexels.com/photos/2588432/pexels-photo-2588432.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id:3,
        url:'https://images.pexels.com/photos/1662224/pexels-photo-1662224.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id:4,
        url:'https://images.pexels.com/photos/1963641/pexels-photo-1963641.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
]


const ProductImages = () => {
    const [index,setIndex] = useState(0);
    return (
        <div className=''>
            <div className="h-[500px] relative">
                <Image src={images[index].url} alt='' fill className='object-cover rounded-md' sizes='50vw'/>
            </div>
            <div className="flex justify-between gap-4 cursor-pointer">
                {images.map((image,i)=>(
            <div className="w-1/4 h-32 relative gap-4 mt-8" key={image.id} onClick={()=>setIndex(i)}>
                    <Image src={image.url} alt='' fill className='object-cover rounded-md' sizes='30vw'/>
            </div>

        ))}
       
            </div>
            
        </div>
    );
};

export default ProductImages;