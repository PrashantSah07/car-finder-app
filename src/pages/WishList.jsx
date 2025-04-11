import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import WishlistContext from '../context/WishlistContext';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const WishList = () => {
    const { removeFromWishlist } = useContext(WishlistContext);
    const { wishlist } = useContext(WishlistContext);

    return (
        <>
            <Navbar />
            <div className='mt-15 xl:px-20 sm:px-10 px-5'>
                <Link to='/cars'><button className='bg-blue-600 text-white px-6 py-1 rounded-3xl'>Back</button></Link>
            </div>
            <div className='max-w-[1550px] mx-auto xl:px-20 sm:px-10 px-5 mt-15'>
                <h2 className='text-3xl font-bold mb-6'>Your Wishlist</h2>
                {wishlist.length === 0 ? (
                    <motion.div
                        className='text-3xl flex justify-center items-center py-20'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <h1 className='text-center'>No items in wishlist</h1>
                    </motion.div>
                ) : (
                    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-x-6 gap-y-10'>
                        <AnimatePresence>
                            {wishlist.map((car, index) => (
                                <motion.div key={car.id} className='flex flex-col gap-5' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Cards
                                        make={car.make}
                                        price={car.price}
                                        image={'https://cdn.imagin.studio/getImage?&customer=img&make=jeep&modelFamily=grand-cherokee&modelRange=grand-cherokee&modelVariant=od&modelYear=2022&powerTrain=hybrid&transmission=0&bodySize=5&trim=us&paintId=pspc0041&zoomtype=fullscreen&groundplaneadjustment=-0.5'}
                                        transmission={car.transmission}
                                        horsepower={car.horsepower}
                                        owners={car.owners}
                                        id={car.id}
                                    />
                                    <button className='px-3 py-1 bg-red-500 text-white rounded-[8px] w-fit' onClick={() => removeFromWishlist(car.id)}>
                                        Remove
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default WishList;
