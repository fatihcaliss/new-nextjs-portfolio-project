import Image from 'next/image';
import React from 'react';

const Portfolio = ({ repos }) => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 text-center'>

            {/* <div className="px-4 py-8 md:py-32 space-y-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 "> */}
            <div className="px-4 py-8 md:py-32 space-y-4 bg-[transparent]">
                <aside className="space-y-2">
                    <h2 className="text-6xl font-semibold text-white bg-black bg-opacity-80">GitHub Repositories</h2>
                </aside>
                <div className="grid  md:grid-cols-3 gap-4  ">

                    {repos.map((repo, index) => {
                        return (
                            <div key={index} className="shadow dark:shadow-none p-4 rounded border-white border bg-black bg-opacity-90">
                                <article className="flex flex-col mb-2">
                                    {/* <img src="https://picsum.photos/200/300" alt="blog" className="w-full h-48 object-cover object-center rounded-md" /> */}
                                    <h3 className="m-1">
                                        <a href="#" className="text-white title-font text-xl font-medium">{repo?.name}</a>
                                    </h3>
                                    <p className="mt-1 font-light text-sm text-gray-100">{repo.description ? repo.description : "There is no description."}</p>
                                </article>
                                <span className="hover:text-gray-800 dark:text-gray-400 text-gray-500 group">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        <a href={repo.html_url} target={"_blank"} className="inline-flex items-center">Go to code
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className=" w-4 h-4 group-hover:translate-x-1">
                                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </button>

                                </span>
                            </div>
                        )
                    })}

                </div>
            </div>


            {/* <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    <Image
                        src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt='/'
                        layout='responsive'
                        width='677'
                        height='451'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
            </div> */}
        </div>
    );
};

export default Portfolio;