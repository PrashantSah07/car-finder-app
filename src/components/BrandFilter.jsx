import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const BrandFilter = ({ brand, setBrand, fuel, setFuel, priceRange, setPriceRange, transmission, setTransmission }) => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <div className='border-1 border-[#dedbdb] p-2 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2  -mx-10 xl:mx-0 '>
            <input type="text" name='brand' placeholder='Search car brand' value={brand} onChange={(e) => setBrand(e.target.value)} className={`focus:outline-none py-2 px-2 border border-gray-200 rounded ${darkTheme ? 'text-white' : 'text-black bg-white'}`}
            />
            <select value={fuel} onChange={(e) => setFuel(e.target.value)} className={`py-2 px-2 border border-gray-200 rounded ${darkTheme && 'bg-[#1f2937]'} `}>
                <option value="">All Fuels</option>
                <option value="Gasoline">Gasoline</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
            </select>
            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className={`py-2 px-2 border border-gray-200 rounded ${darkTheme && 'bg-[#1f2937]'}`}>
                <option value="">All Prices</option>
                <option value="10000-30000">₹10,000 - ₹30,000</option>
                <option value="30000-50000">₹30,000 - ₹50,000</option>
                <option value="50000-">Above ₹50,000</option>
            </select>
            <select value={transmission} onChange={(e) => setTransmission(e.target.value)} className={`py-2 px-2 border border-gray-200 rounded ${darkTheme && 'bg-[#1f2937]'}`}>
                <option value="">All Transmissions</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="CVT">CVT</option>
            </select>
            <button className='bg-blue-600 text-white px-10 py-2' onClick={function () {
                setBrand('')
                setFuel('')
                setPriceRange('')
                setTransmission('')
            }}>Remove Filter</button>
        </div>
    );
};

export default BrandFilter;

