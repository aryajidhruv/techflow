import React from 'react'
import { Link } from 'react-router-dom';
const AiQuiz = () => {
  return (
    <div className='min-h-screen '>
        <p className='mt-4 text-2xl text-black'>Ai quiz here</p>
      <Link to ="/" className="mt-8 inline-block text-indigo-600 underline">Back to Home</Link>
    </div>
  )
}

export default AiQuiz;
