import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AiNotes = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // States
  const [activeAuth, setActiveAuth] = useState('signup');
  const [activeTab, setActiveTab] = useState('notes');
  const [dragActive, setDragActive] = useState(false);
  
  // NEW: App Phase States
  const [status, setStatus] = useState('idle'); // 'idle' | 'processing' | 'completed'
  const [fileName, setFileName] = useState('');

  // Styles Helper
  const getBtnClass = (tabName) => {
    const baseClass = "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ";
    const activeClass = "bg-indigo-600 text-white shadow-md shadow-indigo-200";
    const inactiveClass = "text-gray-600 hover:bg-gray-50 hover:text-indigo-600";
    return baseClass + (activeTab === tabName ? activeClass : inactiveClass);
  };

  const onButtonClick = () => fileInputRef.current.click();

  const handleFile = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    if (files && files[0]) {
      setFileName(files[0].name);
      setStatus('processing');
      
      // Simulate Backend AI Processing (Replace with real API call later)
      setTimeout(() => {
        setStatus('completed');
      }, 3500);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* 1. SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col p-6">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <img src="StudySyn.svg" alt="logo" className="h-8" />
          <span className="text-xl font-bold text-gray-800">TechFlow</span>
        </Link>
        
        <nav className="space-y-2 flex-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">Tools</div>
          <button onClick={() => setActiveTab('notes')} className={getBtnClass('notes')}><span>📝</span> AI Notes</button>
          <button onClick={() => setActiveTab('quiz')} className={getBtnClass('quiz')}><span>❓</span> AI Quizzes</button>
          <button onClick={() => setActiveTab('flashcards')} className={getBtnClass('flashcards')}><span>🃏</span> AI Flashcards</button>
        </nav>

        <div className="mt-auto p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
          <p className="text-indigo-900 font-bold text-xs uppercase mb-1">Tokens Remaining</p>
          <div className="w-full bg-indigo-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-indigo-600 h-full w-2/3"></div>
          </div>
          <p className="mt-2 text-[10px] text-indigo-500 font-medium">Upgrade for unlimited uploads</p>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            {status === 'completed' ? `Viewing: ${fileName}` : 'AI Workspace'}
          </h2>
          <div className='flex gap-4'>
            <button onClick={() => navigate('/login')} className="text-sm font-bold text-gray-500 hover:text-indigo-600">Log In</button>
            <button onClick={() => navigate('/signup')} className="h-9 px-5 bg-indigo-600 text-white rounded-lg font-bold text-sm shadow-lg shadow-indigo-100">Sign Up</button>
          </div>
        </header>

        {/* Content Switcher */}
        <div className="flex-1 overflow-y-auto p-8">
          
          {/* PHASE A: IDLE (UPLOAD) */}
          {status === 'idle' && (
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Generate Smart Notes</h1>
                <p className="text-gray-500 mt-3 text-lg">Upload your materials and let AI transform them into structured study guides.</p>
              </div>

              <input type="file" ref={fileInputRef} onChange={handleFile} className='hidden' accept='.pdf,.doc,.docx,.mp3,.mp4' />

              <div 
                onDragOver={(e) => {e.preventDefault(); setDragActive(true);}}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => {e.preventDefault(); setDragActive(false); handleFile(e);}}
                className={`border-3 border-dashed rounded-[2.5rem] p-20 flex flex-col items-center justify-center transition-all ${
                  dragActive ? 'border-indigo-500 bg-indigo-50 scale-[1.01]' : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                <div className="bg-indigo-600 p-6 rounded-3xl mb-6 shadow-xl shadow-indigo-100">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Drop your lecture files</h3>
                <p className="text-gray-400 mt-2 mb-8 text-center">We support PDF, Word, and even MP3 audio files.</p>
                <button onClick={onButtonClick} className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all transform active:scale-95 shadow-xl">
                  Browse My Computer
                </button>
              </div>
            </div>
          )}

          {/* PHASE B: PROCESSING (LOADING) */}
          {status === 'processing' && (
            <div className="h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-indigo-600 rounded-full animate-spin"></div>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Analyzing {fileName}</h2>
              <p className="text-gray-500 text-center max-w-sm">Our AI is reading your document, identifying key concepts, and creating headers...</p>
            </div>
          )}

          {/* PHASE C: COMPLETED (WORKSPACE) */}
          {status === 'completed' && (
            <div className="flex gap-8 h-full max-w-[1400px] mx-auto animate-in fade-in slide-in-from-right-8 duration-700">
              {/* Note Display Area */}
              <div className="flex-1 bg-white rounded-[2rem] border border-gray-100 shadow-sm p-10 overflow-y-auto custom-scrollbar">
                <div className='flex items-center justify-between mb-8 pb-4 border-b border-gray-50'>
                  <h1 className="text-3xl font-black text-gray-900">Study Guide</h1>
                  <button onClick={() => setStatus('idle')} className="text-xs font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full hover:bg-indigo-100">Upload New</button>
                </div>
                
                <div className="prose prose-indigo max-w-none space-y-6">
                  <section>
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">1. Executive Summary</h3>
                    <p className="text-gray-600 leading-relaxed">Based on your upload, this document focuses on the core principles of [Document Subject]. Key takeaways include the relationship between system architecture and user performance.</p>
                  </section>
                  <section>
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">2. Key Concepts</h3>
                    <ul className="list-disc ml-5 text-gray-600 space-y-2">
                      <li><strong>Primary Goal:</strong> Efficient data retrieval and management.</li>
                      <li><strong>Structural Integrity:</strong> Maintaining balance between speed and security.</li>
                      <li><strong>User Impact:</strong> How these changes affect end-to-level navigation.</li>
                    </ul>
                  </section>
                </div>
              </div>

              {/* Chat Sidebar */}
              <div className="w-80 flex flex-col bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">AI Tutor</h4>
                </div>
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="bg-indigo-50 p-3 rounded-2xl rounded-bl-none text-[13px] text-indigo-900 font-medium">
                    I've finished your notes! What would you like to clarify?
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <div className="relative">
                    <input type="text" placeholder="Ask a question..." className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <button className="absolute right-2 top-1.5 bg-indigo-600 text-white w-7 h-7 rounded-lg flex items-center justify-center shadow-md">➹</button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default AiNotes;