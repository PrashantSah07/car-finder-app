import React, { useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import Navbar from '../components/Navbar'
import { FaCarCrash } from 'react-icons/fa';
import Footer from '../components/Footer'
import WishlistContext from '../context/WishlistContext';
import LoadingEffect from '../components/LoadingEffect'
import { motion } from "motion/react"

const CardDetails = () => {
    const navigate = useNavigate();
    const { addToWishlist } = useContext(WishlistContext);
    const { id } = useParams();
    const { data, loading, error } = useFetch(`https://www.freetestapi.com/api/v1/cars/${id}`);

    const handleAddToWishlist = () => {
        addToWishlist(data);
        navigate('/wishlist');
    };

    return (
        <>
            <Navbar />

            {loading ? (
                <div>
                    <LoadingEffect />
                </div>
            ) : error ? (
                <div className="flex flex-col items-center justify-center mt-20 space-y-6 animate-fadeIn">
                    <FaCarCrash className="text-blue-500 text-[100px] animate-bounce" />
                    <h2 className="text-3xl font-bold text-red-600">Car Not Found</h2>
                    <p className="text-gray-600 text-lg text-center max-w-md">
                        Sorry, we couldn’t find the car you’re looking for.
                    </p>
                    <Link to="/">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
                            Go Home
                        </button>
                    </Link>
                </div>
            ) : (
                <div className='max-w-[1550px] mx-auto'>
                    <div className='mt-15 xl:px-20 sm:px-10 px-5'>
                        <Link to='/'><button className='bg-blue-600 text-white px-6 py-1 rounded-3xl'>Back</button></Link>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between gap-20 items-center xl:px-20 sm:px-10 px-5 pt-10'>
                        <motion.img initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
                            className='xl:w-[50%] lg:w-[55%] max-w-[95%]'
                            src="https://cdn.imagin.studio/getImage?&customer=img&make=jeep&modelFamily=grand-cherokee&modelRange=grand-cherokee&modelVariant=od&modelYear=2022&powerTrain=hybrid&transmission=0&bodySize=5&trim=us&paintId=pspc0041&zoomtype=fullscreen&groundplaneadjustment=-0.5"
                            alt={data?.model}
                        />
                        <motion.div className='w-full font-semibold sm:text-[25px] text-[20px]' initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                            <p className='flex lg:justify-start gap-8  justify-between'>Brand: <span className='font-normal'>{data.make}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>Model: <span className='font-normal'>{data.model}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>Year: <span className='font-normal'>{data.year}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>Color: <span className='font-normal'>{data.color}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>Mileage: <span className='font-normal'>{data.mileage}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>Price: <span className='font-normal'>{data.price}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>FuelType: <span className='font-normal'>{data.fuelType}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>Transmission: <span className='font-normal'>{data.transmission}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>Engine: <span className='font-normal'>{data.engine}</span></p>
                            <p className='flex lg:justify-start gap-8  justify-between'>Horsepower: <span className='font-normal'>{data.horsepower}</span></p>
                            <p className='flex lg:justify-start gap-8 justify-between'>Owners: <span className='font-normal'>{data.owners}</span></p>
                        </motion.div>
                    </div>
                    <div className='flex gap-2 lg:px-50 px-5 pt-20 lg:justify-start justify-center flex-wrap'>
                        <button className='px-10 py-3 bg-blue-600 text-white rounded-[10px]' onClick={handleAddToWishlist}>
                            Add To Wishlist
                        </button>
                        <button className='px-10 py-3 bg-blue-600 text-white rounded-[10px] '>Buy Now</button>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}

export default CardDetails
