import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Blog = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const articles = [
    { 
      id: "ai-study", 
      title: "Mastering AI Study Techniques", 
      date: "Oct 12, 2025",
      readTime: "5 min read",
      category: "AI Study",
      icon: "🧠",
      content: `In the modern academic landscape, information overload is the biggest hurdle. TechFlow's AI Study engine isn't just a transcription tool; it's a cognitive partner. 
      
      Step 1: Record your lecture. 
      Step 2: Upload to TechFlow. 
      Step 3: Our proprietary models identify key concepts, dates, and formulas automatically. 
      
      The result? A structured outline that highlights what's actually going to be on the exam.` 
    },
    { 
      id: "flow-method", 
      title: "The Flow Method Explained", 
      date: "Oct 10, 2025",
      readTime: "7 min read",
      category: "Efficiency",
      icon: "🌊",
      content: `The 'Flow Method' is based on the psychology of deep work. It suggests that humans are most productive in 90-minute sprints of uninterrupted focus. 
      
      At TechFlow, we've integrated 'The Flow Engine' to help you reach this state. By eliminating the friction of organizing your notes, we allow your brain to stay in the 'zone'.` 
    },
    { 
      id: "whats-new", 
      title: "October Feature Drop", 
      date: "Oct 05, 2025",
      readTime: "3 min read",
      category: "Updates",
      icon: "✨",
      content: `This month, we are introducing 'OCR Pro'—you can now snap a photo of your handwritten whiteboard notes, and TechFlow will convert them into editable digital text. 
      
      We've also upgraded our AI Tutor to 'Model 4.0', offering 99% accuracy in mathematical equation solving.` 
    },
    { 
      id: "stories", 
      title: "How Sarah Saved Her Semester", 
      date: "Sept 28, 2025",
      readTime: "6 min read",
      category: "Student Stories",
      icon: "🌟",
      content: `Sarah, a medical student, was drowning in 500-slide anatomy presentations. Switching to TechFlow allowed her to turn her entire syllabus into active-recall decks in under ten minutes. 
      
      She improved her mid-term score by 25% and reclaimed her weekends. Her story is a testament to working smarter.` 
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section - Matching Landing Page Header Style */}
      <section className="pt-44 pb-32 px-6 bg-slate-50 relative overflow-hidden">
        {/* Modern Gradient Backgrounds matching Landing Page */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] -mr-40 -mt-40 opacity-70"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-[11px] font-black tracking-[0.15em] uppercase mb-10 border border-indigo-100/50 hover:bg-indigo-100 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            Back to Dashboard
          </Link>
          <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            The Flow <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Journal.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Deep dives into the science of learning, product updates, and stories from the students changing the world.
          </p>
        </div>
      </section>

      {/* Blog Articles Content */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 relative z-20 space-y-16">
        {articles.map((article) => (
          <article 
            key={article.id} 
            id={article.id} 
            className="group bg-white rounded-[3rem] p-8 md:p-14 border border-slate-100 shadow-2xl shadow-indigo-900/5 transition-all duration-500 hover:shadow-indigo-900/10 hover:-translate-y-1 scroll-mt-32"
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              
              {/* Feature Icon - Matching Landing Page UI Mockup style */}
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-indigo-600 flex items-center justify-center text-4xl md:text-5xl shadow-xl shadow-indigo-200 shrink-0 text-white">
                {article.icon}
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.15em]">
                    {article.category}
                  </span>
                  <div className="flex items-center text-slate-400 text-xs font-bold gap-3 uppercase tracking-widest">
                    <span>{article.date}</span>
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
                  {article.title}
                </h2>
                
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium mb-10 opacity-80">
                  {article.content}
                </p>

                <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-black">TF</div>
                      <div>
                          <p className="text-slate-900 font-black text-sm">TechFlow Editorial</p>
                          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Product Insights</p>
                      </div>
                  </div>
                  <button className="group/btn flex items-center gap-2 text-indigo-600 font-black uppercase text-[11px] tracking-widest">
                    Expand Article <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* --- Newsletter Section matching the "About" CTA style --- */}
        <div className="mt-32 mb-20 p-12 md:p-20 bg-slate-900 rounded-[4rem] text-center text-white relative overflow-hidden shadow-3xl shadow-indigo-900/20">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Stay in the flow.</h3>
            <p className="text-slate-400 mb-12 max-w-lg mx-auto text-xl font-medium">Join 100,000+ students receiving the latest in AI study science.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="university@email.edu" 
                className="px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white placeholder:text-slate-500 flex-grow focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all text-lg font-medium" 
              />
              <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-[2rem] hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-xl text-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="py-12 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">© 2024 TechFlow Journal</p>
      </footer>
    </div>
  );
};

export default Blog;