import Link from 'next/link'
import React from 'react'

const Hero = ({ heading, message }) => {
    return (

        <div className='flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
            <div className='p-5 text-white z-[2] mx-60 rounded border-white border bg-black bg-opacity-90'>
                <h2 className='text-5xl font-bold'> {heading}</h2>
                <p className='text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl py-5 '>{message}</p>
                <button className='px-8 py-2 border'>
                    <Link href='https://www.linkedin.com/in/fatihcaliss/' target={'_blank'} >Go to Linkedn </Link>
                </button>
            </div>

        </div>
    )
}

export default Hero