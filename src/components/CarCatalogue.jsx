import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Cards from './Cards';
import { motion } from "motion/react"

const CarCatalogue = () => {

    const { data, loading } = useFetch('https://www.freetestapi.com/api/v1/cars?limit=8');

    return (
        <>
            <div className='max-w-[1550px] mx-auto '>
                <div className='flex flex-col gap-2 xl:px-20 sm:px-10  px-5 my-20'>
                    <h1 className='text-4xl font-semibold'>Car Catalogue</h1>
                    <p className='font-medium'>Explore out cars you might like</p>
                </div>
                {loading ? <p>Loading, please wait...</p> :
                    <div className=' grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center xl:mx-20 sm:mx-10 mx-5 gap-5'>
                        {data.map(function (car, index) {
                            return (
                                <motion.div key={car.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <Cards
                                        make={car.make}
                                        price={car.price}
                                        image={'https://cdn.imagin.studio/getImage?&customer=img&make=jeep&modelFamily=grand-cherokee&modelRange=grand-cherokee&modelVariant=od&modelYear=2022&powerTrain=hybrid&transmission=0&bodySize=5&trim=us&paintId=pspc0041&zoomtype=fullscreen&groundplaneadjustment=-0.5'}
                                        transmission={car.transmission}
                                        horsepower={car.horsepower}
                                        owners={car.owners}
                                        id={car.id}
                                    />
                                </motion.div>
                            );
                        })}

                    </div>
                }
            </div>
        </>
    )
}

export default CarCatalogue
