import React from 'react';
import sadGif from '../assets/sad.gif'; // Ensure this path is correct

const FinalSadness = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white p-4 sm:p-6">
            <div className="text-center max-w-md p-4 sm:p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
                {/* Display local GIF */}
                <img 
                    src={sadGif} 
                    alt="Sad GIF" 
                    className="mb-6 w-full max-w-xs mx-auto h-auto rounded-lg shadow-md"
                />
                <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-red-300">
                    Made Me Sad...
                </h1>
                <p className="text-base sm:text-lg mb-6 text-gray-200">
                    You saying no really made me sad. 😔
                </p>
                <p className="text-sm sm:text-md text-gray-300">
                    Even though I’m a bit bummed out, I’ll still cherish the fun moments we’ve had. Maybe we can plan something fun together soon. 🌟
                </p>
            </div>
        </div>
    );
};

export default FinalSadness;
