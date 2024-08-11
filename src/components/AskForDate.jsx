import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ermFingersGif from '../assets/erm-fingers.gif';

const AskForDate = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-center max-w-lg p-6 bg-white bg-opacity-20 rounded-lg shadow-lg"
            >
                <h1 className="text-4xl font-semibold mb-4">A Special Request...</h1>
                <p className="mb-6 text-lg">
                    Hinata, I've been thinking a lot about us and how amazing it would be to spend some quality time together. How about we go out for a movie date and make some beautiful memories?
                </p>
                <motion.img 
                    src={ermFingersGif} 
                    alt="Asking GIF" 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1.5, type: 'spring', stiffness: 120 }}
                    className="mb-8 w-64 mx-auto"
                />
                <div className="flex space-x-4 justify-center">
                    <button 
                        onClick={() => navigate('/result')} 
                        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
                    >
                        Yes, I'd Love To!
                    </button>
                    <button 
                        onClick={() => navigate('/decision')} 
                        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
                    >
                        Not This Time
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default AskForDate;
