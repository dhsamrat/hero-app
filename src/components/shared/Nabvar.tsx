import Image from 'next/image';
import React from 'react';
//import logo from "../../assets/logo.png";
import logo from "@/assets/logo.png";
import Link from 'next/link';

const Nabvar = () => {
    return (
        <div className='bg-slate-200'>
        <nav className='container mx-auto flex justify-between items-center py-4'>

         <Image src={logo} className='h-[60px] w-[60px]' alt= "Hero App Logo" />

          <ul className='flex items-center gap-4'>
            <li className='font-semibold hover:text-blue-500'><Link href="/"> Home </Link></li>
            <li className='font-semibold hover:text-blue-500' ><Link href="/home">Apps </Link></li>
            <li className='font-semibold hover:text-blue-500' ><Link href="/installation"> installation </Link></li>
          </ul>
          <button className="btn btn-success">Contribute</button>
        </nav>
      </div>
    );
};

export default Nabvar;