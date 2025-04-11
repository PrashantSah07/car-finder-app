import React, { useContext } from 'react'
import logo from '../assets/logo.svg'
import ThemeContext from '../context/ThemeContext'

const Footer = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <>

            <div className={`max-w-[1550px] mx-auto flex flex-col sm:gap-25 gap-15 xl:px-20 sm:px-10 px-5 mt-20 sm:py-20 py-15 ${darkTheme ? 'bg-[#020526]' : 'bg-[#f5f8fe]'}`}>

                <div className='flex flex-col md:flex-row justify-between sm:gap-20 gap-15 md:gap-0'>
                    <div>
                        <div className='flex flex-col gap-1'>
                            <img className={`w-[100px] ${darkTheme && 'invert'}`} src={logo} alt="logo" />
                            <p className='mt-2'>CarHub 2025</p>
                            <p>All Rights Reserved &copy;</p>
                        </div>
                    </div>
                    <div className='flex md:justify-center flex-col sm:flex-row sm:items-center  lg:gap-15 gap-10'>
                        <ul className='flex flex-col gap-3'>
                            <li className='font-semibold'>About</li>
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                            <li>Business Relation</li>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            <li className='font-semibold'>Company</li>
                            <li>Events</li>
                            <li>Blog</li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            <li className='font-semibold'>Socials</li>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between text-[15px] md:gap-0 gap-5'>
                    <div>
                        <p>&copy;2025 CarHub. All rights reserved</p>
                    </div>
                    <div className='flex flex-col md:flex-row  md:gap-10 gap-5'>
                        <p>Privacy & Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
