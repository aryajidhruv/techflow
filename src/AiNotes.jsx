import React from 'react';
import { Link } from 'react-router-dom';

const AiNotes = () => {
  return (
    <div className="min-h-screen bg-amber-200 p-10">
      <h1 className="text-4xl font-bold text-indigo-800">AI Notes</h1>
      <p className="mt-4 text-gray-600">
        This is where your AI Notes feature content will live. 
        You can build your upload forms or note displays here.
      </p>
      <link to ="/" className="mt-8 inline-block text-indigo-600 underline">Back to Home</link>
    </div>
  );
};

export default AiNotes;