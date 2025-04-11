import React from 'react'
import '../App.css'
import Car from '../assets/hero.png'
import CarBg from '../assets/hero-bg.png'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const Herosection = () => {
    return (
        <>
            <div className='max-w-[1550px] xl:mx-auto flex lg:flex-row flex-col justify-between items-center relative overflow-hidden lg:gap-0 gap-20 mx-0'>
                <motion.div className='xl:px-20 sm:px-10 px-5 mt-20 flex flex-col gap-7 lg:w-[50%] w-[100%]' initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <h1 className='	xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold'>Find, book, rent a car—quick and super easy!</h1>
                    <p className='text-[20px] text-[#625e5e]'>Streamline your car rental experience with our effortless booking process.</p>
                    <Link to='/cars'><button className='px-10 bg-blue-600 w-fit text-white py-2.5 rounded-3xl' onClick={() => {
                        window.scrollTo({ top: 0 });
                    }}>Explore Cars</button></Link>
                </motion.div>
                <motion.div className='relative lg:w-[50%] w-[100%]' initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <div className='flex justify-center items-center'>
                        <img className='lg:max-w-[120%] relative max-w-[80%]' src={CarBg} alt="hero-bg" />
                        <img className='absolute lg:w-[90%] w-[70%] lg:top-30 md:top-20 top-10 lg:right-30 md:right-40' src={Car} alt="hero" />
                    </div>
                </motion.div>
            </div>

        </>
    )
}

export default Herosection
