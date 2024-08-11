import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoveLetter = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 p-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1, type: 'spring', stiffness: 150 }}
                className="text-center max-w-md p-8 bg-gradient-to-r from-pink-100 via-yellow-100 to-red-100 rounded-2xl shadow-2xl"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl font-extrabold mb-6 text-gray-800"
                >
                    To My Dearest Hinata...
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-lg text-gray-700 mb-8"
                >
                    From the moment our paths crossed, you’ve been like a dream come true. Your smile lights up even the darkest days, and your laughter is my favorite melody. Every moment with you is a cherished memory, and I would love to create many more with you. 
                    I hope this message brings a smile to your face as you have brought countless to mine.
                </motion.p>
                <motion.button 
                    onClick={() => navigate('/ask-for-date')} 
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    Continue
                </motion.button>
            </motion.div>
        </div>
    );
};

export default LoveLetter;
