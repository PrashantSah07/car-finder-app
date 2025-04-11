import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const LoadingEffect = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 xl:px-20 sm:px:10 px-5  lg:my-30 my-15'>
                <div className={`lg:h-[400px] h-[300px] lg:w-[50%] sm:w-[80%] w-[90%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-[#e5e8f2]'} rounded-4xl `}></div>
                <div className={`flex gap-2 lg:flex-col flex-col-reverse justify-center items-start lg:w-[50%] sm:w-[80%] w-[90%]`}>
                    <div className={`h-[200px] w-[100%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-[#e5e8f2]'} rounded-4xl`}></div>
                    <p className={`h-[40px] w-[100%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-[#e5e8f2]'} rounded-4xl`}></p>
                    <p className={`h-[40px] w-[100%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-[#e5e8f2]'} rounded-4xl`}></p>
                    <p className={`h-[40px] w-[75%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-[#e5e8f2]'} rounded-4xl`}></p>
                    <p className={`h-[40px] w-[50%] ${darkTheme ? 'bg-[#1f2937]' : 'bg-[#e5e8f2]'} rounded-4xl`}></p>
                </div>
            </div>
        </>
    )
}

export default LoadingEffect
