import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DecisionPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1.5, type: 'spring', stiffness: 120 }}
                className="text-center max-w-lg p-6 bg-white bg-opacity-20 rounded-lg shadow-lg"
            >
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, type: 'spring', stiffness: 120 }}
                    className="text-4xl font-bold mb-6 text-yellow-300"
                >
                    Are You Sure?
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, x: -30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg mb-8 text-gray-200"
                >
                    Your decision means a lot to me. Please take a moment to reconsider.
                </motion.p>
                <div className="flex flex-col items-center space-y-4">
                    <motion.button 
                        onClick={() => navigate('/result')} 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 1 }}
                        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition"
                    >
                        Change Your Mind?
                    </motion.button>
                    <motion.button 
                        onClick={() => navigate('/sadness')} 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 1.5 }}
                        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition"
                    >
                        No, I’m sure
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default DecisionPage;
