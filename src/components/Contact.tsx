"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa'; // Importing icons from React Icons

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [loading, setLoading] = useState(false); // Add loading state

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the error message for the input being changed
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        const newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        };

        let isValid = true;

        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
            isValid = false;
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        }
        if (!formData.message) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop submission if validation fails
        }

        setLoading(true); // Set loading state to true

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "94515993-cc6b-4d34-b268-5e1e8d5b41d5"); // Replace with your actual access key

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();

            if (result.success) {
                toast.success("Your message has been sent successfully!", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                // Reset form data
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                toast.error("There was an error sending your message. Please try again.", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            toast.error("There was an error sending your message. Please try again.", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div id='contact' className="isolate relative px-6 py-24 sm:py-32 lg:px-8">
            {/* Background with Radial Gradient for Both Light and Dark Modes */}
            <div className="absolute inset-0 -z-10 h-full w-full">
                {/* Light mode radial gradient */}
                <div className="relative hidden dark:block h-full w-full bg-slate-950">
                    {/* Gradient circle centered and responsive */}
                    <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                {/* Dark mode radial gradient */}
                <div className="relative dark:hidden h-full w-full bg-white">
                    {/* Gradient circle centered and responsive */}
                    <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
            <ToastContainer 
                style={{ zIndex: 9999 }} // Ensure it's above other elements
            />
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Contact Us</h2>
                <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
                    Get in touch with Rosales Home Innovations today! Whether you have a question, need a consultation, or are ready to start your next project, we’re here to help. Reach out to discuss how we can bring your vision to life.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-1 relative">
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
                            First name
                        </label>
                        <div className="mt-2.5 flex items-center border border-gray-300 rounded-md shadow-sm">
                            <FaUser className="w-5 h-5 text-gray-400 mx-2" />
                            <input
                                id="first-name"
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                autoComplete="given-name"
                                className={`block w-full rounded-sm border-0 p-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.firstName ? 'border-red-500' : ''}`}
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="sm:col-span-1 relative">
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
                            Last name
                        </label>
                        <div className="mt-2.5 flex items-center border border-gray-300 rounded-md shadow-sm">
                            <FaUser className="w-5 h-5 text-gray-400 mx-2" />
                            <input
                                id="last-name"
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                autoComplete="family-name"
                                className={`block w-full rounded-sm border-0 p-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.lastName ? 'border-red-500' : ''}`}
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                    <div className="sm:col-span-2 relative">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
                            Email
                        </label>
                        <div className="mt-2.5 flex items-center border border-gray-300 rounded-md shadow-sm">
                            <FaEnvelope className="w-5 h-5 text-gray-400 mx-2" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                className={`block w-full rounded-sm border-0 p-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="sm:col-span-2 relative">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
                            Phone number
                        </label>
                        <div className="mt-2.5 flex items-center border border-gray-300 rounded-md shadow-sm">
                            <FaPhone className="w-5 h-5 text-gray-400 mx-2" />
                            <input
                                id="phone-number"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                autoComplete="tel"
                                className={`block w-full rounded-sm border-0 p-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.phone ? 'border-red-500' : ''}`}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                    <div className="sm:col-span-2 relative">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
                            Message
                        </label>
                        <div className="mt-2.5 flex items-center border border-gray-300 rounded-md shadow-sm">
                            <FaComment className="w-5 h-5 text-gray-400 mx-2" />
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className={`block w-full rounded-sm border-0 p-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.message ? 'border-red-500' : ''}`}
                                placeholder="Enter your message"
                                required
                            />
                        </div>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <button
                        type="submit"
                        className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Sending...' : "Send Message"} {/* Conditional button text */}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
