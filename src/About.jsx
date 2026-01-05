import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Sub-Hero Section --- */}
      <section className="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
        {/* Decorative background element matching your LandingPage style */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] -mr-40 -mt-40 opacity-60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="text-indigo-600 font-black tracking-[0.2em] uppercase text-xs mb-4">Our Mission</p>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
            Solving the <span className="text-indigo-600">Information Overload</span> <br/> for Every Student.
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            TechFlow was founded by a group of graduates who realized that while technology was advancing, the way we study was stuck in the past. We built the "Flow Engine" to bridge that gap.
          </p>
        </div>
      </section>

      {/* --- Stats/Trust Bar --- */}
      <div className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-slate-900">128</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-black text-indigo-600">99%</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">AI Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-black text-slate-900">100k+</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-black text-slate-900">24/7</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">AI Support</p>
          </div>
        </div>
      </div>

      {/* --- Our Core Pillars --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Built by Students, <br/> Powered by Ethics.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At TechFlow, we believe AI shouldn't replace the student—it should empower them. Our platform is designed to handle the "mechanical" parts of learning—transcribing, summarizing, and organizing—so you can focus on deep comprehension and critical thinking.
            </p>
            <ul className="space-y-4">
              {[
                { title: "Privacy First", desc: "Your study materials are encrypted and never sold." },
                { title: "Academic Integrity", desc: "Designed to help you learn, not just give answers." },
                { title: "Seamless Design", desc: "Zero friction between your files and your notes." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">✓</div>
                  <div>
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <div className="aspect-square bg-indigo-600 rounded-[3rem] overflow-hidden rotate-3 shadow-3xl shadow-indigo-100">
                {/* Replace with a real team/office photo later */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center p-12 text-white text-center">
                   <p className="text-2xl font-black italic">"Our goal is to save students 10+ hours of study time every single week."</p>
                </div>
             </div>
             {/* Decorative floating card */}
             <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <p className="text-indigo-600 font-black text-4xl">4.0</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Model Version</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 relative z-10">Ready to join the <br/> future of education?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
             <Link to="/signup" className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all">
                Create Free Account
             </Link>
             <Link to="/" className="px-10 py-5 bg-white/10 text-white font-black rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm">
                Back to Home
             </Link>
          </div>
        </div>
      </section>

      {/* Footer Placeholder matching your style */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">© 2024 TechFlow Intelligence Inc.</p>
      </footer>
    </div>
  );
};

export default About;