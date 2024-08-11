import React from 'react';
import runGif from '../assets/run.gif'; // Update this path if necessary

const ThankYouPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-black text-white p-4">
            <div className="text-center max-w-lg p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
                {/* Display the run GIF */}
                <img 
                    src={runGif} 
                    alt="Running GIF" 
                    className="mb-8 w-64 mx-auto h-auto rounded-lg shadow-md"
                />
                <h1 className="text-4xl font-bold mb-4 text-yellow-300">
                    Jaa Rha Hun Train Ki Ticket Katane 🚂
                </h1>
                <p className="text-lg text-gray-200">
                    Thanks for everything! I'll be heading out to get the train tickets now. See you soon!
                </p>
            </div>
        </div>
    );
};

export default ThankYouPage;
