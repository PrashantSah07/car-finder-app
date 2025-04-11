// context/WishlistContext.js
import React, { createContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(stored);
    }, []);

    const addToWishlist = (item) => {
        const exists = wishlist.some(w => w.id === item.id);
        if (!exists) {
            const updated = [...wishlist, item];
            localStorage.setItem('wishlist', JSON.stringify(updated));
            setWishlist(updated);
        } else {
            alert('Already added in wishlist')
        }
    };

    const removeFromWishlist = (id) => {
        const updated = wishlist.filter(item => item.id !== id);
        localStorage.setItem('wishlist', JSON.stringify(updated));
        setWishlist(updated);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContext;
