import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const projects = () => {
    return (
        <div>
            <Hero heading='Projects' message='This is some of my recent work traveling the world.' />
            <Portfolio />
        </div>
    )
}

export default projects