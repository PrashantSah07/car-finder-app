import React, { useContext } from 'react'
import steeringwheel from '../assets/steering-wheel.svg'
import lightning from '../assets/lightning.png'
import owner from '../assets/car.png'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext';

const cards = ({ make, price, image, transmission, horsepower, owners, id }) => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <>

            <Link to={`/cars/${id}`} onClick={function () {
                window.scrollTo({ top: 0 });
            }}>
                <div className={`rounded-2xl flex flex-col items-center gap-2 p-4 cursor-pointer hover:scale-[1.05] transition-all duration-300 ${darkTheme ? 'bg-[#1f2937]' : 'bg-[#e5e8f2]'}`}>
                    <div className='flex flex-col gap-2 items-start w-full'>
                        <h1 className='text-[28px] font-medium'>{make}</h1>
                        <p className='font-medium'>Rs. {price}</p>
                    </div>
                    <img className='w-[220px]' src={image} alt="car" />
                    <div className='flex justify-between mt-2 w-full font-medium'>
                        <div className='flex flex-col gap-1 items-center'>
                            <img className='w-[20px]' src={steeringwheel} alt="" />
                            <span>{transmission}</span>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <img className='w-[25px]' src={lightning} alt="" />
                            <span>{horsepower}</span>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <img className={`w-[30px] ${darkTheme && 'invert'}`} src={owner} alt="" />
                            <span>{owners}</span>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default cards
