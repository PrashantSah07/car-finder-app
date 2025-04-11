import React, { useContext, useState } from 'react'
import { motion } from "motion/react"
import '../App.css'
import ThemeContext from '../context/ThemeContext'

const SignUp = ({ isShow, setIsShow, setShowLogin }) => {
    const { darkTheme } = useContext(ThemeContext)
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: value && '' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const error = {};
        if (!event.target.firstName.value) {
            error.firstName = 'First name must be required!'
        }
        if (!event.target.lastName.value) {
            error.lastName = 'Last name must be required!'
        }
        if (!event.target.email.value) {
            error.email = 'Email must be required!'
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.email.value)) {
            error.email = 'Please fill the valid email address!'
        }
        if (!event.target.number.value) {
            error.number = 'Number must be required!'
        } else if (!/^\d{10}$/.test(event.target.number.value)) {
            error.number = 'Please fill the correct format!'
        }

        setErrors(error);

        if (Object.keys(error).length > 0) {
            return
        }
        setLoading(true);
        setTimeout(() => {
            const formData = {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                email: event.target.email.value,
                number: event.target.number.value,
            };
            alert('submitted')
            console.log(formData)
            setIsShow(false);
            event.target.reset();
            setLoading(false);
        }, 3000);

    }

    if (!isShow) {
        return
    }

    return (
        <>
            <motion.div className='h-[100vh] w-[100vw]  fixed top-0 bg-[#0000007b] z-80 flex justify-center items-center' onClick={function () {
                setIsShow(false);
                setErrors({ firstName: '', lastName: '', email: '', number: '', })
            }} initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
                <div className={`w-[400px] flex flex-col gap-10 p-5 rounded-2xl mt-10 mx-5 ${darkTheme ? 'bg-[#1f2937]' : 'bg-white'}`} onClick={function (e) { e.stopPropagation(); }}>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-4xl font-semibold'>Sign Up</h1>
                        <button className='p-1 rounded-full cursor-pointer text-white hover:bg-gray-200' onClick={function () {
                            setIsShow(false);
                            setErrors({ firstName: '', lastName: '', email: '', number: '', })
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                            </svg>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <div>
                            <input className='focus:outline-none border-1 w-full p-2 border-[#d3caca] rounded-md' type="text" name='firstName' placeholder='First Name' onChange={handleChange} />
                            {errors.firstName && <p className='text-[13px] pl-2 text-red-500'>{errors.firstName}</p>}
                        </div>
                        <div>
                            <input className='focus:outline-none border-1 w-full p-2 border-[#d3caca] rounded-md' type="text" name='lastName' placeholder='Last Name' onChange={handleChange} />
                            {errors.lastName && <p className='text-[13px] pl-2 text-red-500'>{errors.lastName}</p>}
                        </div>
                        <div>
                            <input className='focus:outline-none border-1 w-full p-2 border-[#d3caca] rounded-md' type="text" name="email" placeholder='Email' onChange={handleChange} />
                            {errors.email && <p className='text-[13px] pl-2 text-red-500'>{errors.email}</p>}
                        </div>
                        <div>
                            <input className='focus:outline-none border-1 w-full p-2 border-[#d3caca] rounded-md' type="text" name="number" placeholder='Number' onChange={handleChange} />
                            {errors.number && <p className='text-[13px] pl-2 text-red-500'>{errors.number}</p>}
                        </div>
                        <div>
                            <button disabled={loading} className='w-full p-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition' type='submit' value='signup'>{loading ? 'Please Wait' : 'Sign Up'}</button>
                        </div>
                        <div className='mt-4'> Already have an account?
                            <span className='text-blue-400 cursor-pointer font-semibold ml-1' onClick={function () {
                                setIsShow(false);
                                setShowLogin(true);
                                setErrors({ firstName: '', lastName: '', email: '', number: '', });
                            }} > Login
                            </span>
                        </div>
                    </form>
                </div>
            </motion.div>

        </>
    )
}

export default SignUp
