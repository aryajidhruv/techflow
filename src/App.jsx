import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your existing components
import AiNotes from './AiNotes';
import SignUp from './Signup';
import Login from './Login';
import Pricing from './Pricing';
import Blog from './Blog';
import About from './About';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    // Safety fallback: if user doesn't scroll, show logos anyway after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const logos = [
    { src: "i2.webp", p: "" }, { src: "i1.webp", p: "" }, { src: "i3.webp", p: "" },
    { src: "i4.webp", p: "" }, { src: "i5.webp", p: "" }, { src: "i6.webp", p: "" },
    { src: "i7.webp", p: "p-2" }, { src: "i8.webp", p: "p-2" }, { src: "i9.webp", p: "p-1" },
    { src: "i10.webp", p: "" }, { src: "i11.svg", p: "p-2" }, { src: "i12.webp", p: "p-1.5" },
    { src: "i13.webp", p: "" }, { src: "i14.webp", p: "p-0.5" }, { src: "i15.webp", p: "p-3" }
  ];

  return (
    <div className='bg-white font-sans selection:bg-indigo-100 overflow-x-hidden'>
      
      {/* --- HEADER --- */}
      <header className='px-6 py-8 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-[100] border-b border-slate-50'>
        <Link to="/" className='flex items-center gap-2'>
          <img src="StudySyn.svg" alt="logo" className='h-9 w-auto' />
          <span className='text-2xl font-black tracking-tighter text-slate-900'>TechFlow</span>
        </Link>

        <nav className='hidden md:flex gap-8 items-center font-bold'>
          <Link to="/" className='text-sm text-slate-600 hover:text-[#5254f8] transition-colors'>Home</Link>
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
            Our innovative platform offers an effortless and seamless approach to learning, empowering students of all ages to achieve mastery.
          </p>
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <Link to="/signup" className='px-10 py-5 bg-[#5254f8] text-white text-lg font-black rounded-2xl shadow-xl hover:bg-indigo-700 transition-all'>
              Start Now
            </Link>
            <button className='px-10 py-5 bg-slate-800 text-white text-lg font-black rounded-2xl shadow-xl hover:bg-black transition-all'>
              Take Tour
            </button>
          </div>
        </div>

        <div className='lg:w-1/2 w-full'>
          <div className='p-2 bg-slate-100 rounded-[3rem] shadow-inner'>
            <div className='bg-white rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] border border-white'>
              {showPdf && (
                <iframe src="/Earth.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" className='w-full h-full' title='Study Preview' />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPETITIVE ADVANTAGE GRID --- */}
      <section className='py-32 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6'>Our competitive advantage</h2>
          <p className='text-slate-500 font-medium text-lg max-w-2xl mx-auto mb-20'>Tailored learning experiences through AI to cater to individual student needs.</p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { title: "Personalized Learning", color: "bg-[#4a90e2]", icon: "PersonalizedLearn (1).svg", desc: "Offer tailored learning experiences through AI and machine learning." },
              { title: "Affordability", color: "bg-[#FF6289]", icon: "Affordability.svg", desc: "High-quality education at an affordable price point for everyone." },
              { title: "Industry Partnerships", color: "bg-[#fcbf58]", icon: "IndustryPatner.svg", desc: "Collaborate with institutions to offer accredited certifications." },
              { title: "Innovative Technology", color: "bg-[#44bfc3]", icon: "InnovativeTech.svg", desc: "Utilize cutting-edge tools to create immersive learning experiences." },
              { title: "Responsive Support", color: "bg-[#77b05d]", icon: "InnovativeTech.svg", desc: "Exceptional assistance dedicated to students and educators." },
              { title: "Analytics and Insights", color: "bg-[#7d78b1]", icon: "Analytics.svg", desc: "Detailed progress tracking and analytics to help students monitor performance." }
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

      {/* --- COMPANY LOGOS (Animated Section) --- */}
      <section ref={sectionRef} className='py-32 bg-white text-center'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-black text-slate-900 mb-12'>Trusted by the best</h2>
          <p className='text-2xl md:text-3xl font-bold text-slate-500 tracking-tight leading-tight mb-20'>
            Trusted by thousands of students in hundreds of universities in over <span className='text-[#5254f8]'>128 countries</span>.
          </p>
          <div className='grid grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center opacity-40 grayscale'>
            {logos.map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                className={`h-10 object-contain ${logo.p} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                style={{ transitionDelay: `${index * 50}ms` }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className='py-32 bg-gray-100 rounded-[5rem] mx-4 mb-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-6xl font-black text-indigo-950 tracking-tighter mb-4'>What Students Say</h2>
            <p className='text-xl text-indigo-900/60 font-bold'>Join 100,000+ users improving their productivity with TechFlow</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { name: "Shiham Mahroof", img: "gary.webp", text: "Great app. Easy to navigate and input documents. User interface was clever and intuitive." },
              { name: "Jasmin S.", img: "r2.webp", text: "Hands down the best AI tool I have ever used. Saves me hours of time on any video or file." },
              { name: "Kei Camba", img: "r3.webp", text: "Highly recommend for teachers. Support named Tommy walked me through everything with visuals." },
              { name: "Benjamin Deprisco", img: "r5.webp", text: "Have been using Techflow for about a year. It gathers all the info and creates flashcards for you." },
              { name: "Tom Paladin", img: "r6.webp", text: "Great application for graduate/doctoral level students. Used videos to transcribe and create insights." },
              { name: "Shiham M.", img: "r4.webp", text: "Phenomenal customer service! They resolved my subscription issue the same day I reached out." }
            ].map((review, i) => (
              <div key={i} className='bg-white p-10 rounded-[3.5rem] shadow-2xl flex flex-col justify-between border border-white hover:-translate-y-2 transition-all duration-500'>
                <p className='text-slate-600 font-medium leading-relaxed mb-10'>"{review.text}"</p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <img src={review.img} className='w-12 h-12 rounded-full border-2 border-indigo-50' alt={review.name} />
                    <p className='font-black text-indigo-900 text-sm'>{review.name}</p>
                  </div>
                  <img src="Frame.webp" className='h-6 opacity-30' alt="quote icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-white z-[200] flex flex-col items-center justify-center gap-10 p-10'>
          <button className='absolute top-8 right-8' onClick={() => setIsMenuOpen(false)}>
            <img src="close.webp" className='w-10 h-10' alt="close" />
          </button>
          <nav className='flex flex-col items-center gap-8 text-3xl font-black text-slate-900 tracking-tighter'>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/signup" className='bg-[#5254f8] text-white px-10 py-4 rounded-full text-xl' onClick={() => setIsMenuOpen(false)}>Join Now</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

// --- APP COMPONENT WITH UPDATED ROUTES ---
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