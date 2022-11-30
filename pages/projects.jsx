import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const projects = ({ repos }) => {
    return (
        <div>
            {/* <Hero heading='Projects' message='This is some of my recent work traveling the world.' /> */}
            <div className='flex items-center justify-center bg-fixed bg-center bg-cover custom-bg-project'>
                {/* Overlay */}
                {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}

                <Portfolio repos={repos} />
            </div>

        </div>
    )
}

export default projects

export const getStaticProps = async () => {
    const res = await fetch("https://api.github.com/users/fatihcaliss/repos?per_page=100&sort=created");
    const data = await res.json();
    return {
        props: {
            repos: data
        }
    }


}