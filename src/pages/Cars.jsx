import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import useFetch from '../hooks/useFetch';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import BrandFilter from '../components/BrandFilter';
import { motion } from "motion/react"

const Cars = () => {
    const { data, loading } = useFetch(`https://www.freetestapi.com/api/v1/cars`);
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [fuel, setFuel] = useState('');
    const [transmission, setTransmission] = useState('');
    const [page, setPage] = useState(1);
    const carsPerPage = 10;

    const filteredCars = data?.filter(car => {
        const matchesBrand = car.make?.toLowerCase().includes(brand.toLowerCase());
        const matchesFuel = fuel === '' || car.fuelType?.toLowerCase() === fuel.toLowerCase();
        const matchesTransmission = transmission === '' || car.transmission?.toLowerCase() === transmission.toLowerCase();

        let matchesPrice = true;
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(p => p ? parseInt(p) : null);
            matchesPrice = (!min || car.price >= min) && (!max || car.price <= max);
        }

        return matchesBrand && matchesFuel && matchesTransmission && matchesPrice;
    }) || [];

    const startIndex = (page - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const currentCars = filteredCars.slice(startIndex, endIndex);

    useEffect(() => {
        setPage(1);
    }, [brand, fuel, priceRange, transmission]);

    return (
        <>
            <Navbar />
            <div className='max-w-[1550px] mx-auto'>
                <div className='mt-15 xl:px-20 px-10'>
                    <Link to='/'><button className='bg-blue-600 text-white px-6 py-1 rounded-3xl'>Back</button></Link>
                </div>

                {loading ? (
                    <p className='text-center mt-20 text-xl'>Loading...</p>
                ) : (
                    <div className='mt-10'>
                        <div className='sm:px-20 px-15'>
                            <BrandFilter
                                brand={brand}
                                setBrand={setBrand}
                                fuel={fuel}
                                setFuel={setFuel}
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                                transmission={transmission}
                                setTransmission={setTransmission}
                            />
                        </div>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center  xl:mx-20 mx-5 sm:mx-10 gap-5 my-10'>
                            {currentCars.map(function (car, index) {
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
                    </div>
                )}

                <div className="text-center mt-6 flex gap-2 justify-center items-center mb-20">
                    <button
                        disabled={page === 1}
                        className="px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 disabled:bg-blue-300"
                        onClick={() => {
                            setPage(page - 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Previous
                    </button>
                    <button
                        disabled={endIndex >= filteredCars.length}
                        className="px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 disabled:bg-blue-300"
                        onClick={() => {
                            setPage(page + 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Cars;
