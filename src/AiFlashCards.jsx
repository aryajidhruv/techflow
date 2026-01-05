import React from 'react';
import { Link } from 'react-router-dom';

const AiFlashCards = () => {
  return (
    <div className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold text-indigo-800">AI Flashcards</h1>
      <Link to="/" className="mt-8 inline-block text-indigo-600 underline">Back to Home</Link>
    </div>
  );
};

export default AiFlashCards; // This must match your import name