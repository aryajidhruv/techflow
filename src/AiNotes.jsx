import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AiNotes = () => {

  const navigate  = useNavigate(); // this is the gps to change the phase

  const [activeAuth, setActiveAuth] = useState('signup'); // Default to signup 

  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null) //create the remove control

  const [activeTab, setActiveTab] = useState('notes'); // Default to AI Notes

// Helper function to handle styles
const getBtnClass = (tabName) => {
  const baseClass = "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ";
  const activeClass = "bg-indigo-600 text-white shadow-md shadow-indigo-200";
  const inactiveClass = "text-gray-600 hover:bg-gray-50 hover:text-indigo-600";
  
  return baseClass + (activeTab === tabName ? activeClass : inactiveClass);
};


  //this function opens the file selector
  const onButtonClick = ()=>{
    fileInputRef.current.click();

  };

  //this function handles what happens after you pick a file
  const handleFile =(e)=>{
    const files = e.target.files;
    if(files && files[0]){
      console.log("file selected:" ,files[0].name);
      alert("You selected :" + files[0].name);
      //here you would normally upload the file to your server

    }
  }

  

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* 1. Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col p-6">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <img src="StudySyn.svg" alt="logo" className="h-8" />
          <span className="text-xl font-bold text-gray-800">TechFlow</span>
        </Link>
        
        <nav className="space-y-2 flex-1">
    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">Tools</div>
    
    {/* AI Notes Button */}
    <button 
      onClick={() => setActiveTab('notes')}
      className={getBtnClass('notes')}
    >
      <span>📝</span> AI Notes
    </button>

    {/* AI Quizzes Button */}
    <button 
      onClick={() => setActiveTab('quiz')}
      className={getBtnClass('quiz')}
    >
      <span>❓</span> AI Quizzes
    </button>

    {/* AI Flashcards Button */}
    <button 
      onClick={() => setActiveTab('flashcards')}
      className={getBtnClass('flashcards')}
    >
      <span>🃏</span> AI Flashcards
    </button>
  </nav>

        {/* <div className="mt-auto p-4 bg-indigo-600 rounded-2xl text-white text-sm">
          <p className="font-semibold">Pro Plan</p>
          <p className="opacity-80 text-xs">80% of storage used</p>
          <button className="mt-3 w-full py-2 bg-white text-indigo-600 rounded-lg font-bold text-xs uppercase">Upgrade</button>
        </div> */}
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-lg font-bold text-gray-800">AI Notes Generator</h2>
          <div className='flex gap-2'>
          <div className="flex  gap-2">
            
            <button onClick={() => {setActiveAuth('signup');
            setTimeout(() => { navigate('/signup')
              
            }, 20);}}
      className={`h-10 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
        activeAuth === 'signup' 
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
          : 'bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50'
      }`} >sign up</button>
          </div>

          <button onClick={() => {setActiveAuth('login');
            setTimeout(() => { navigate('/login')
              
            }, 20);}}
          
      className={`h-10 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
        activeAuth === 'login' 
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
          : 'bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50'
      }`}  >
            Log in
          </button>
          </div>
          

        </header>

        {/* Content Workspace */}
        <div className="p-8 max-w-5xl mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Create New Notes</h1>
            <p className="text-gray-500 mt-2">Upload your lecture PDF, audio, or video to generate structured study notes.</p>
          </div>

        {/* hidden file input */}

        <input type="file"
        ref = {fileInputRef}
        onChange={handleFile}
        className='hidden'
        accept='.pdf,.doc,.docx,.mp3,.mp4"' />

        {/* The dropzone */}

        <div onDragOver={(e) => {e.preventDefault();setDragActive(true);}}//added preventdefault to allow dropping
        onDragLeave={()=> setDragActive(false)}
        onDrop={(e)=>{e.preventDefault(); setDragActive(false); handleFile(e); }}
        className={`relative border-2 border-dashed rounded-3xl p-16 flex flex-col items-center justify-center transition-all ${
          dragActive ? 'border-indigo-500 bg-indigo-50 scale-[1.01]' : 'border-gray-200 bg-white'
        }`}
        >
          <div className="bg-indigo-100 p-5 rounded-2xl mb-4">
              <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Drag & Drop files here</h3>
            <p className="text-gray-400 mt-1">PDF, MP4, MP3, or YouTube links</p>


            <button 
              onClick={onButtonClick} // Added the click trigger
              className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
            >
              Browse Files
            </button>
          
        </div>
          

          {/* Recent Section */}
          {/* <div className="mt-12">
            <h3 className="font-bold text-gray-700 mb-4">Recent Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-gray-100 rounded-2xl flex items-center justify-between hover:shadow-md cursor-pointer transition-all">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-red-100 text-red-600 flex items-center justify-center rounded-lg">PDF</div>
                  
                </div>
                <span className="text-gray-300">→</span>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};



export default AiNotes;