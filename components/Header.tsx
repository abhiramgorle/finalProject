"use client";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <div className='flex justify-between
     p-3 px-5  shadow-sm z-30'>
      <div className='flex gap-3 items-center'>
        <Image src='/logo.png' alt='logo'
        width={50} height={50}/>
        <h2 className='text-[25px] font-semibold
         hover:text-red-500 tracking-widest'>DISCOVER</h2>
      </div>
      <div onClick={() => console.log("home click")}>
      <ul className='flex gap-8 items-center'>
        <Link href='/'><li className='text-[18px]
         hover:text-red-500 cursor-pointer' >Home</li></Link>
         <Link href='https://geo-fence-chi.vercel.app/'><li className='text-[18px]
         hover:text-red-500 cursor-pointer' >Geo-Fence</li></Link>
      </ul>
      </div>
    </div>
  )
}

export default Header