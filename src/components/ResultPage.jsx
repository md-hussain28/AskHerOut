import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ohYayGif from '../assets/oh-yay.gif';

const ResultPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 text-white p-4 sm:p-6">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
                className="text-center max-w-lg p-6 bg-white bg-opacity-40 rounded-lg shadow-lg"
            >
                <motion.img 
                    src={ohYayGif} 
                    alt="Celebration GIF" 
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ type: 'spring', stiffness: 100, duration: 1.5 }}
                    className="mb-8 w-64 mx-auto"
                />
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl font-bold mb-4 text-yellow-300"
                >
                    Awesome! 🎉
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg mb-6 text-gray-200"
                >
                    Hinata, I'm thrilled that you said yes! I can’t wait for our movie date to watch "Stree 2" on August 17th, 2024. It's going to be a fantastic time filled with fun and laughter. 
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, delay: 1.5 }}
                    className="text-lg mb-6 text-gray-200"
                >
                    If the date needs any adjustment, just let me know. I'm flexible and we can plan it according to your availability. 
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, delay: 2 }}
                    className="text-lg font-semibold text-pink-200"
                >
                    Looking forward to creating wonderful memories together. See you soon!
                </motion.p>
                <motion.button 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
                    onClick={() => navigate('/thank-you')} // Navigate to the new page
                    className="mt-6 px-6 py-3 bg-pink-500 rounded-lg text-white font-semibold text-lg shadow-lg hover:bg-pink-600 transition"
                >
                    Thank You, Click Me
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ResultPage;
