import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your existing components
import AiNotes from './AiNotes';
import SignUp from './Signup';
import Login from './Login';
import Pricing from './Pricing';
import Blog from './Blog';
import About from './About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  // NEW: State for the interactive preview tabs
  const [activeTab, setActiveTab] = useState('Original Content');
  
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => { observer.disconnect(); clearTimeout(timer); };
  }, []);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const logos = [
    { src: "i2.webp", p: "" }, { src: "i1.webp", p: "" }, { src: "i3.webp", p: "" },
    { src: "i4.webp", p: "" }, { src: "i5.webp", p: "" }, { src: "i6.webp", p: "" },
    { src: "i7.webp", p: "p-2" }, { src: "i8.webp", p: "p-2" }, { src: "i9.webp", p: "p-1" },
    { src: "i10.webp", p: "" }, { src: "i11.svg", p: "p-2" }, { src: "i12.webp", p: "p-1.5" },
    { src: "i13.webp", p: "" }, { src: "i14.webp", p: "p-0.5" }, { src: "i15.webp", p: "p-3" }
  ];

  return (
    <div className='bg-white font-sans selection:bg-indigo-100 overflow-x-hidden'>
      
      {/* --- HEADER (Same as your code) --- */}
      <header className='px-6 py-8 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-[100] border-b border-slate-50'>
        <Link to="/" className='flex items-center gap-2'>
          <img src="StudySyn.svg" alt="logo" className='h-9 w-auto' />
          <span className='text-2xl font-black tracking-tighter text-slate-900'>TechFlow</span>
        </Link>

        <nav className='hidden md:flex gap-8 items-center font-bold'>
          <Link to="/" className='text-sm text-slate-600 hover:text-[#5254f8] transition-colors'>Home</Link>
          <button className='group relative cursor-pointer text-sm text-slate-600 hover:text-[#5254f8] transition-colors'>
            Features
            <div className='absolute hidden group-hover:grid grid-cols-2 gap-4 w-[500px] p-6 rounded-2xl bg-white shadow-2xl border border-slate-100 -translate-x-1/4 top-full mt-0'>
              <Link to="/ai-notes" className='p-3 rounded-lg hover:bg-indigo-50'>
                <h4 className="text-indigo-800 font-bold">AI Notes</h4>
                <p className="text-slate-500 text-xs font-normal">Lectures to notes instantly.</p>
              </Link>
              <Link to="/ai-tutor" className='p-3 rounded-lg hover:bg-indigo-50'>
                <h4 className="text-indigo-800 font-bold">AI Tutor</h4>
                <p className="text-slate-500 text-xs font-normal">Answers from your content.</p>
              </Link>
              <Link to="/ai-quiz" className='p-3 rounded-lg hover:bg-indigo-50'>
                <h4 className="text-indigo-800 font-bold">AI Quizzes</h4>
                <p className="text-slate-500 text-xs font-normal">Auto-generate test questions.</p>
              </Link>
              <Link to="/ai-flashcards" className='p-3 rounded-lg hover:bg-indigo-50'>
                <h4 className="text-indigo-800 font-bold">AI Flashcards</h4>
                <p className="text-slate-500 text-xs font-normal">Master concepts with smart cards.</p>
              </Link>
            </div>
          </button>
          <Link to="/pricing" className='text-sm text-slate-600 hover:text-[#5254f8] transition-colors'>Pricing</Link>
          <Link to="/blog" className='text-sm text-slate-600 hover:text-[#5254f8] transition-colors'>Blog</Link>
          <Link to="/about" className='text-sm text-slate-600 hover:text-[#5254f8] transition-colors'>About</Link>
        </nav>

        <div className='flex items-center gap-4'>
          <Link to="/login" className='hidden sm:block text-sm font-bold text-slate-600 hover:text-slate-900'>Log In</Link>
          <Link to="/signup" className='px-6 py-3 bg-[#5254f8] text-white text-sm font-black rounded-full shadow-lg hover:scale-105 transition-all uppercase tracking-widest'>
            Sign Up
          </Link>
          <button className='md:hidden' onClick={() => setIsMenuOpen(true)}>
            <img src="Hamburger.svg" alt="menu" className='w-8 h-8' />
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className='max-w-[1440px] mx-auto px-6 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-16'>
        <div className='lg:w-1/2 text-center lg:text-left'>
          <p className='inline-block px-4 py-2 bg-indigo-50 text-[#5254f8] text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6'>Very proud to introduce</p>
          <h1 className='text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 leading-[0.9] tracking-tighter mb-8'>
            Seamless Learning for <span className='text-[#5254f8]'>Brighter</span> Futures
          </h1>
          <p className='text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-10'>
            Our platform offers an effortless approach to learning, empowering students to achieve mastery through ethical AI.
          </p>
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <Link to="/signup" className='px-10 py-5 bg-[#5254f8] text-white text-lg font-black rounded-2xl shadow-xl hover:bg-indigo-700 transition-all'>
              Start Now
            </Link>
            <button onClick={scrollToFeatures} className='px-10 py-5 bg-slate-800 text-white text-lg font-black rounded-2xl shadow-xl hover:bg-black transition-all'>
              Take Tour
            </button>
          </div>
        </div>

        {/* --- DYNAMIC PREVIEW SECTION --- */}
        <div className='lg:w-1/2 w-full'>
          <div className='p-4 bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-xl relative'>
            <div className='bg-white rounded-[2rem] overflow-hidden shadow-inner h-[680px] flex flex-col border border-slate-100'>
              
              {/* Top Bar */}
              <div className='h-14 border-b border-slate-100 flex items-center px-6 justify-between bg-white'>
                <div className='flex items-center gap-4'>
                  <div className='flex gap-1.5'>
                    <div className='w-3 h-3 rounded-full bg-red-400'></div>
                    <div className='w-3 h-3 rounded-full bg-amber-400'></div>
                    <div className='w-3 h-3 rounded-full bg-emerald-400'></div>
                  </div>
                  <div className='h-4 w-px bg-slate-100 mx-2'></div>
                  <div className='flex items-center gap-2'>
                    <span className='text-indigo-600 font-bold text-[10px]'>Home</span>
                    <span className='text-slate-300 text-[10px]'>&gt;</span>
                    <span className='text-slate-800 font-black text-[10px] tracking-tight'>Earth Wiki Session</span>
                  </div>
                </div>
                <Link to='/signup' className='bg-[#5254f8] text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider'>+ New Session</Link>
              </div>

              {/* Tabs with onClick state change */}
              <div className='h-11 border-b border-slate-50 flex items-center px-6 gap-5 bg-slate-50/30 overflow-x-auto no-scrollbar'>
                {['Original Content', 'AI Notes', 'AI Summary', 'AI Flashcards', 'AI Quizzes'].map((tab) => (
                  <span 
                    key={tab} 
                    onClick={() => setActiveTab(tab)}
                    className={`text-[9px] font-black whitespace-nowrap cursor-pointer transition-all h-full flex items-center ${
                      activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <div className='flex-1 flex overflow-hidden'>
                {/* LEFT SIDE: DYNAMIC CONTENT */}
                <div className='w-1/2 border-r border-slate-100 p-6 overflow-y-auto bg-white custom-scrollbar'>
                  {activeTab === 'Original Content' && (
                    <div className='max-w-md mx-auto animate-in fade-in duration-500'>
                      <div className='flex items-center gap-2 mb-4'>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png" className='h-6' alt="wiki"/>
                        <span className='text-[10px] font-black text-slate-800'>Earth - Wikipedia</span>
                      </div>
                      <h3 className='text-xl font-black text-slate-900 mb-4'>Earth</h3>
                      <p className='text-[10px] leading-relaxed text-slate-600 mb-4'>
                        Earth is the third planet from the Sun and the only astronomical object known to harbor life...
                      </p>
                      <div className='rounded-xl overflow-hidden border border-slate-100 shadow-sm mb-6'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" className='w-full h-36 object-cover' alt="earth"/>
                      </div>
                      <div className='border border-slate-100 rounded-lg p-3 bg-slate-50/50'>
                        <p className='text-[9px] font-black text-slate-800 mb-2 border-b border-slate-200 pb-1'>Quick Facts</p>
                        <div className='space-y-1 text-[8px]'>
                          <div className='flex justify-between'><span className='text-slate-500'>Surface Area</span><span className='font-bold'>510.1M km²</span></div>
                          <div className='flex justify-between'><span className='text-slate-500'>Age</span><span className='font-bold'>4.54B years</span></div>
                          <h4 className='text-[12px] font-black text-slate-900 mb-2'>Physical Characteristics</h4>
      <p className='text-[10px] leading-relaxed text-slate-500'>Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical properties....</p>
    
                        </div>
                        
                      </div>
                    </div>
                  )}

                  {activeTab === 'AI Notes' && (
                    <div className='animate-in slide-in-from-left duration-500 space-y-4'>
                      <h4 className='text-xs font-black text-indigo-900 border-b pb-2'>Generated Lecture Notes</h4>
                      <div className='space-y-3'>
                        <div className='p-3 bg-indigo-50/50 rounded-xl border border-indigo-100'>
                          <p className='text-[10px] font-bold text-indigo-700 mb-1'>1. Atmospheric Composition</p>
                          <p className='text-[9px] text-slate-600'>Earth's atmosphere consists of 78% Nitrogen and 21% Oxygen.</p>
                        </div>
                        <div className='p-3 bg-slate-50 rounded-xl border border-slate-100'>
                          <p className='text-[10px] font-bold text-slate-700 mb-1'>2. Plate Tectonics</p>
                          <p className='text-[9px] text-slate-600'>The lithosphere is broken into plates that move over the asthenosphere.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'AI Summary' && (
                    <div className='animate-in fade-in zoom-in-95 duration-500'>
                      <div className=' p-5 rounded-2xl text-white shadow-lg'>
                        <h4 className='text-xs text-indigo-700 font-black mb-2'>One-Minute Summary</h4>
                        <p className='text-[9px] text-black leading-relaxed opacity-90'>
                          Earth is the only known planet with liquid surface water and life. 
                          The Great Oxidation Event 2.4B years ago paved the way for complex organisms, 
                          though human impact now threatens its 9 planetary boundaries.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'AI Flashcards' && (
                    <div className='animate-in slide-in-from-bottom duration-500 space-y-4'>
                      <div className='aspect-video bg-white border-2 border-indigo-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md'>
                        <span className='text-[8px] font-black text-indigo-700 uppercase mb-2'>Flashcard 1/15</span>
                        <p className='text-[11px] font-bold text-slate-800'>What gas produced by cyanobacteria led to the GOE?</p>
                        <button className='mt-4 text-[9px] font-black text-indigo-600 underline underline-offset-4'>Reveal Answer</button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'AI Quizzes' && (
                    <div className='animate-in fade-in duration-500 space-y-4'>
                       <h4 className='text-[10px] font-black text-slate-900 uppercase'>Quick Quiz</h4>
                       <div className='space-y-2'>
                          <p className='text-[10px] font-bold text-slate-700'>Q: How many planetary boundaries exist?</p>
                          {['7 Boundaries', '9 Boundaries', '12 Boundaries'].map((ans, i) => (
                            <div key={i} className='p-2 bg-slate-50 border border-slate-100 rounded-lg text-[9px] text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors'>
                              {ans}
                            </div>
                          ))}
                       </div>
                    </div>
                  )}
                </div>

                {/* RIGHT SIDE: AI Assistant (Static in all tabs) */}
                <div className='w-1/2 bg-slate-50/50 flex flex-col relative'>
                  <div className='flex-1 p-4 space-y-6 overflow-y-auto custom-scrollbar pb-24'>
                    {/* QUESTION 1 */}
                    <div className='flex justify-end'>
                      <div className='bg-white px-4 py-2 rounded-2xl rounded-tr-none shadow-sm border border-slate-100 text-[10px] font-bold text-slate-700 max-w-[90%]'>
                        What are the main points of this article?
                      </div>
                    </div>

                    {/* ANSWER 1 */}
                    <div className='bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3'>
                      <h4 className='text-[11px] font-black text-slate-900'>Main Points of the Article</h4>
                      <p className='text-[9px] text-slate-600 leading-tight'>Key points summarized:</p>
                      <div className='space-y-3'>
                        <div>
                          <p className='text-[10px] font-black text-indigo-700'>1. Human Impact</p>
                          <p className='text-[8px] text-slate-500'>Pollution and biodiversity loss are significant global issues.</p>
                        </div>
                        <div>
                          <p className='text-[10px] font-black text-indigo-700'>2. Population</p>
                          <p className='text-[8px] text-slate-500'>Human population has reached about 8 billion with massive urbanization.</p>
                        </div>
                      </div>
                      <div className='pt-2 border-t border-slate-100 flex items-center justify-between'>
                        <span className='text-[7px] font-black text-slate-400 uppercase tracking-widest'>References (3)</span>
                        <span className='text-[8px] text-slate-400'>▼</span>
                      </div>
                    </div>

                    {/* QUESTION 2 */}
                    <div className='flex justify-end'>
                      <div className='bg-white px-4 py-2 rounded-2xl rounded-tr-none shadow-sm border border-slate-100 text-[10px] font-bold text-slate-700 max-w-[90%]'>
                        What is the Great Oxidation Event?
                      </div>
                    </div>

                    {/* ANSWER 2 */}
                    <div className='bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3'>
                      <h4 className='text-[11px] font-black text-slate-900'>The Great Oxidation Event</h4>
                      <p className='text-[9px] text-slate-600'>Refers to a significant increase in atmospheric oxygen ~2.4 billion years ago.</p>
                      <div className='bg-slate-50 p-2 rounded-lg border border-slate-100'>
                        <p className='text-[8px] font-black text-indigo-600'>Primary Cause</p>
                        <p className='text-[7px] text-slate-500'>Cyanobacteria began producing oxygen as a byproduct.</p>
                      </div>
                    </div>

                    {/* QUESTION 3 */}
                    <div className='flex justify-end'>
                      <div className='bg-white px-4 py-2 rounded-2xl rounded-tr-none shadow-sm border border-slate-100 text-[10px] font-bold text-slate-700 max-w-[90%]'>
                        What is the impact of humans on Earth?
                      </div>
                    </div>

                    {/* ANSWER 3 */}
                    <div className='bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3'>
                      <h4 className='text-[11px] font-black text-slate-900'>Human Impact on Earth</h4>
                      <p className='text-[9px] text-slate-600'>Profoundly affected climate, ecosystems, and biodiversity through greenhouse emissions and deforestation.</p>
                    </div>

                  
                   
                    <div className='bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2'>
                      <h4 className='text-[10px] font-black text-slate-900'>Main Points of the Article</h4>
                      <p className='text-[9px] text-slate-500 leading-tight'>Human impact, physical characteristics, and long-term outlook of the planet.</p>
                      {/* <span className='block pt-2 text-[7px] font-black text-indigo-500 uppercase tracking-widest'>Reference from page 1</span> */}
                    </div>
                  </div>

                  <div className='absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100'>
                    <div className='bg-slate-50 rounded-xl px-4 py-2.5 flex items-center justify-between border border-slate-200'>
                      <input 
                        type='text' 
                        className='bg-transparent outline-none w-full text-[10px] text-slate-600 font-medium placeholder:italic placeholder:text-slate-400' 
                        placeholder='Ask AI assistant...' 
                      />
                      <Link to='/signup' className='bg-[#5254f8] w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-lg'>
                        ➹
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REST OF YOUR CODE (Logos, Features, Reviews) --- */}
      <section ref={sectionRef} className='py-32 bg-white text-center'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-black text-slate-900 mb-6'>Trusted by the best</h2>
          <p className='text-2xl md:text-3xl font-bold text-slate-500 tracking-tight leading-tight mb-20'>
            Used by thousands of students in over <span className='text-[#5254f8]'>128 countries</span> worldwide.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center'>
            {logos.map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                className={`h-12 w-auto object-contain ${logo.p} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`} 
                style={{ transitionDelay: `${index * 75}ms` }} 
                alt="Partner Logo"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURE CARDS SECTION --- */}
      <section ref={featuresRef} className='py-32 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6'>Our competitive advantage</h2>
          <p className='text-slate-500 font-medium text-lg max-w-2xl mx-auto mb-20'>Everything you need to master your studies in one platform.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { title: "Personalized Learning", color: "bg-[#4a90e2]", icon: "PersonalizedLearn (1).svg", desc: "Offer tailored learning experiences through AI and machine learning to cater to individual student needs." },
              { title: "Affordability", color: "bg-[#FF6289]", icon: "Affordability.svg", desc: "Provide high-quality education at an affordable price point, making it accessible to a broader audience." },
              { title: "Industry Partnerships", color: "bg-[#fcbf58]", icon: "IndustryPatner.svg", desc: "Collaborate with well-known companies and institutions to offer accredited courses and certifications." },
              { title: "Innovative Technology", color: "bg-[#44bfc3]", icon: "InnovativeTech.svg", desc: "Utilize cutting-edge technology, such as AI and PDF analysis, to create immersive learning experiences." },
              { title: "Responsive Support", color: "bg-[#77b05d]", icon: "InnovativeTech.svg", desc: "Provide exceptional customer support and assistance to students and educators around the clock." },
              { title: "Analytics and Insights", color: "bg-[#7d78b1]", icon: "Analytics.svg", desc: "Offer detailed progress tracking and analytics to help students and teachers monitor performance." }
            ].map((card, i) => (
              <div key={i} className={`${card.color} p-10 rounded-[3rem] text-white text-left h-80 flex flex-col justify-between hover:scale-[1.03] transition-all shadow-xl`}>
                <div className='bg-white/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md'>
                  <img src={card.icon} alt="icon" className='w-8 h-8' />
                </div>
                <div>
                  <h3 className='text-2xl font-black mb-3'>{card.title}</h3>
                  <p className='text-sm font-medium opacity-90 leading-relaxed'>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className='py-32 bg-gray-50 rounded-[5rem] mx-4 mb-20'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-4xl md:text-6xl font-black text-indigo-950 tracking-tighter mb-4'>What Students Say</h2>
          <p className='text-xl text-indigo-900/60 font-bold mb-20'>Join 100,000+ users improving their productivity with TechFlow</p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left'>
            {[
              { name: "Shiham Mahroof", img: "gary.webp", text: "Great app. Easy to navigate and input documents. User interface was clever and intuitive." },
              { name: "Jasmin S.", img: "r2.webp", text: "Hands down the best AI tool I have ever used. Saves me hours of time on any video or file." },
              { name: "Kei Camba", img: "r3.webp", text: "Highly recommend for teachers. Support team walked me through everything with visuals." },
              { name: "Benjamin Deprisco", img: "r5.webp", text: "Have been using Techflow for about a year. It gathers all the info and creates flashcards for you." },
              { name: "Tom Paladin", img: "r6.webp", text: "Great application for doctoral students. Transcribe videos to text and dissect themes easily." },
              { name: "Shiham M.", img: "r4.webp", text: "Phenomenal customer service! They resolved my subscription issue the same day I reached out." }
            ].map((review, i) => (
              <div key={i} className='bg-white p-10 rounded-[3.5rem] shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 border border-white'>
                <p className='text-slate-600 font-medium leading-relaxed mb-10'>"{review.text}"</p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <img src={review.img} className='w-12 h-12 rounded-full border-2 border-indigo-50 shadow-sm' alt={review.name} />
                    <p className='font-black text-indigo-900 text-sm'>{review.name}</p>
                  </div>
                  <img src="Frame.webp" className='h-6 opacity-20' alt="quote" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOBILE MENU --- */}
      {/* --- MOBILE MENU --- */}
{isMenuOpen && (
  <div className='fixed inset-0 bg-white z-[200] flex flex-col p-8 animate-in fade-in zoom-in-95 duration-300'>
    {/* Close Button Header */}
    <div className='flex justify-between items-center mb-12'>
      <div className='flex items-center gap-2'>
        <img src="StudySyn.svg" alt="logo" className='h-8' />
        <span className='text-xl font-black text-slate-900'>TechFlow</span>
      </div>
      <button onClick={() => setIsMenuOpen(false)}>
        <img src="close.webp" className='w-8 h-8' alt="close" />
      </button>
    </div>

    {/* Navigation Links */}
    <nav className='flex flex-col gap-6 overflow-y-auto'>
      <Link to="/" onClick={() => setIsMenuOpen(false)} className='text-2xl font-black text-slate-900 border-b border-slate-50 pb-2'>Home</Link>
      
      {/* Features Sub-Group */}
      <div className='flex flex-col gap-4'>
        <p className='text-xl font-black text-black uppercase tracking-widest'>Features</p>
        <div className='grid grid-cols-1 gap-3 ml-2  w-40 shadow-indigo-600 rounded-2xl'>
         
          <Link to="/ai-tutor" onClick={() => setIsMenuOpen(false)} className='text-lg font-bold text-green-900 shadow-2xs shadow-amber-300 w-25'>🤖 AI Tutor</Link>
          <Link to="/ai-notes" onClick={() => setIsMenuOpen(false)} className='text-lg font-bold text-green-900 shadow-2xs shadow-amber-300 w-27'>📝 AI Notes</Link>
          <Link to="/ai-quiz" onClick={() => setIsMenuOpen(false)} className='text-lg font-bold text-green-900 shadow-2xs shadow-amber-300 w-30'>❓ AI Quizzes</Link>
          <Link to="/ai-flashcards" onClick={() => setIsMenuOpen(false)} className='text-lg font-bold text-green-900 shadow-2xs shadow-amber-300 w-37'>🃏 AI Flashcards</Link>
        </div>
      </div>

      <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className='text-2xl font-black text-slate-900 border-b border-slate-50 pb-2'>Pricing</Link>
      <Link to="/blog" onClick={() => setIsMenuOpen(false)} className='text-2xl font-black text-slate-900 border-b border-slate-50 pb-2'>Blog</Link>
      <Link to="/about" onClick={() => setIsMenuOpen(false)} className='text-2xl font-black text-slate-900 border-b border-slate-50 pb-2'>About</Link>
      
      {/* Auth Buttons for Mobile */}
      <div className='flex flex-col gap-4 mt-8'>
        <Link to="/login" onClick={() => setIsMenuOpen(false)} className='w-full py-4 text-center font-bold text-slate-600 border-2 border-slate-100 rounded-2xl'>Log In</Link>
        <Link to="/signup" onClick={() => setIsMenuOpen(false)} className='w-full py-4 text-center font-black text-white bg-[#5254f8] rounded-2xl shadow-lg shadow-indigo-100'>Join TechFlow</Link>
      </div>
    </nav>
  </div>
)}
    </div>
  );
};

// ... App Component remains the same ...

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ai-notes' element={<AiNotes />} />
        <Route path='/ai-tutor' element={<AiNotes />} />
        <Route path='/ai-quiz' element={<AiNotes />} />
        <Route path='/ai-flashcards' element={<AiNotes />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;