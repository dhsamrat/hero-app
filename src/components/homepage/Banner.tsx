import Image from 'next/image';
//import React from 'react';
import bannerImg from "@/assets/hero.png"


const Banner = () => {
    return (
        <div className='space-y-[30px] pt-8 bg-gray-100 rounded-1g shadow-md text-center'>
           <h2 className='font-bold text-4xl'>We Build <br /> <span className='text-purple-400'>Productive</span> App</h2> 
           
           <p className='max-w-[700px] mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita perferendis 
            laborum error amet libero nisi sed recusandae odit praesentium. Eaque unde alias 
            magni similique quis minima, fugit delectus nihil ducimus!</p>

            <div className='flex justify-center items-center gap-2'>
            <button className="btn btn-success">Google Play</button>
            <button className="btn btn-primary">App Store</button>
            </div>
            <Image src={bannerImg} alt='Hero Image' className='w-[750px] h-auto mx-auto'/> 
        </div>

        

    );
};

export default Banner;