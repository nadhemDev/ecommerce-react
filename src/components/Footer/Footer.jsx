import React from 'react'
import './Footer.css'
const Footer = () => {
    const links = [
        'about',
        'skincare',
        'makeup',
        'supplements',
        'contact',
    ]
    return (
        <footer className='bg-dark text-light flex justify-between px-4 h-32 py-4'>

            <a className='font-krona text-2xl text-yellow' href='/'>
                Welly
            </a>
            <div className='flex items-center'>
                {links.map(links => (
                    <a href='/' className='ml-4'>{links}</a>

                ))}
            </div>


        </footer>
    )
}

export default Footer