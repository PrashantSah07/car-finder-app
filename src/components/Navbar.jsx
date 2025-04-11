import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import SignUp from './SignUp';
import Login from './Login';
import ThemeContext from '../context/ThemeContext';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import heart_img from '../assets/heart-filled.svg'
import { Link } from 'react-router-dom';
import WishlistContext from '../context/WishlistContext';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const { wishlist } = useContext(WishlistContext);
    const [isShow, setIsShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    return (
        <>
            <SignUp isShow={isShow} setIsShow={setIsShow} setShowLogin={setShowLogin} />
            <Login showLogin={showLogin} setShowLogin={setShowLogin} setIsShow={setIsShow} />
            <div className={`max-w-[1550px] mx-auto sticky top-0 z-50 shadow-sm ${darkTheme ? 'bg-[#020526]' : 'bg-white'}`}>
                <div className='flex justify-between items-center xl:px-20 sm:px-10 px-5 py-4 z-10 sticky top-0 shadow-2xl'>
                    <img className={`w-[150px] ${darkTheme && 'invert'}`} src={logo} alt="logo" />
                    <div className='flex gap-5'>
                        <button className='sm:flex justify-center items-center hidden' onClick={function () {
                            setDarkTheme(!darkTheme)
                        }}>{darkTheme ? <MdLightMode size={22} color='white' /> : <MdDarkMode size={22} />}</button>
                        <button className='bg-blue-600 text-white rounded-2xl px-5 py-1 md:flex hidden' onClick={function () {
                            setIsShow(true);
                        }}>Sign in</button>
                        <div className='sm:flex hidden relative'>
                            <Link to='/wishlist'><button className={`px-1 py-0.5 rounded-full ${darkTheme ? 'bg-[#1f2937]' : 'bg-[#f7f6f6]'}`} onClick={function () {
                                window.scrollTo({ top: 0 });
                            }}><img src={heart_img} alt="" /></button>
                            </Link>
                            <span className='absolute -top-2 -right-2 font-semibold'>{wishlist.length}</span>
                        </div>
                        <div className={`flex flex-col justify-center md:hidden ${showNavbar ? 'gap-0' : 'gap-1.5'} w-[22px] h-[10px]]`} onClick={function () {
                            setShowNavbar(!showNavbar)
                        }}>
                            <span className={`transition-transform duration-200 border-2 ${showNavbar ? 'rotate-45' : 'static rotate-0'}`}></span>
                            <span className={`transition-transform duration-200 border-2 ${showNavbar ? '-rotate-45' : 'rotate-0'}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`md:hidden h-[100vh] w-[100vw] fixed top-0 flex justify-center items-center z-10 ${showNavbar ? 'translate-x-[0%]' : 'translate-x-[100%]'} transition-transform duration-200`} onClick={function () {
                setShowNavbar(false);
            }}>
                <div className={`${darkTheme ? 'bg-[#020616] border-l-1 border-[#5b5858]' : 'bg-white'} shadow-2xl flex flex-col justify-center items-center max-w-[70%] h-full gap-5 w-full  absolute right-0`} onClick={function (e) {
                    e.stopPropagation();
                }}>
                    <button className={`w-[90%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-black'} text-white  py-4`} onClick={function () {
                        setIsShow(true);
                        setShowNavbar(false)
                    }}>Sign Up</button>
                    <Link className={`w-[90%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-black'} text-white`} to='/wishlist'><button className='w-full py-4' onClick={function () {
                        setShowNavbar(false);
                    }}>Wishlist</button></Link>
                    <button className={`w-[90%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-black'} text-white  py-4`} onClick={function () {
                        setDarkTheme(!darkTheme);
                        setShowNavbar(false)
                    }}>{darkTheme ? 'Light Mode' : 'Dark Mode'}</button>

                </div>
            </div>
        </>
    )
}

export default Navbar
