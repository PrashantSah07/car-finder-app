import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-9xl font-extrabold text-blue-800 drop-shadow-lg">404</h1>
            <p className="text-3xl font-semibold mt-4 text-gray-700">Oops! Page not found</p>
            <p className="mt-2 text-gray-600 max-w-md">The page you’re looking for doesn’t exist or has been moved.</p>
            <Link to='/' className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-all">Go Home</Link>
        </div>
    );
};

export default ErrorPage;
