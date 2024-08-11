import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoveLetter from './components/LoveLetter';
import AskForDate from './components/AskForDate';
import DecisionPage from './components/DecisionPage';
import FinalSadness from './components/FinalSadness';
import ResultPage from './components/ResultPage';
import ThankYouPage from './components/ThankYouPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoveLetter />} />
                <Route path="/ask-for-date" element={<AskForDate />} />
                <Route path="/decision" element={<DecisionPage />} />
                <Route path="/sadness" element={<FinalSadness />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
            </Routes>
        </Router>
    );
}

export default App;
