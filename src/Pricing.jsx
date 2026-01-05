import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Pricing = () => {
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

  const plans = [
    { 
      id: "pro", 
      name: "Free Starter", 
      price: "0", 
      desc: "Perfect for students just starting their journey into AI-enhanced learning.",
      features: ["5 AI Uploads per month", "Standard AI Notes", "Basic Quiz Generation", "Community Support"],
      badge: "Free Forever",
      buttonStyle: "bg-slate-900 hover:bg-black",
      isPrimary: false
    },
    { 
      id: "tutor", 
      name: "Study Pro", 
      price: "15", 
      desc: "Our most popular plan for power learners who need unlimited resources.",
      features: ["Unlimited AI Uploads", "24/7 AI Tutor Access", "Priority Processing", "Advanced PDF Analysis"],
      badge: "Most Popular",
      buttonStyle: "bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-100",
      isPrimary: true
    },
    { 
      id: "quizzes", 
      name: "Scholar", 
      price: "9", 
      desc: "Focused on testing and scheduled improvement for dedicated academics.",
      features: ["25 AI Uploads per month", "Custom Study Schedules", "Advanced Quiz Types", "Performance Analytics"],
      badge: "Academic Choice",
      buttonStyle: "bg-slate-900 hover:bg-black",
      isPrimary: false
    },
    { 
      id: "flashcards", 
      name: "Ultimate", 
      price: "29", 
      desc: "The complete toolkit for high-stakes exam prep and medical/law students.",
      features: ["Everything in Pro", "Collaborative Study Rooms", "Unlimited Mock Exams", "Citation Management"],
      badge: "Power User",
      buttonStyle: "bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-100",
      isPrimary: true
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section - Matching Landing Page refined style */}
      <section className="pt-44 pb-32 px-6 bg-slate-50 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] -mr-40 -mt-40 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-60"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-[11px] font-black tracking-[0.15em] uppercase mb-10 border border-indigo-100/50 hover:bg-indigo-100 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            Return Home
          </Link>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Pricing.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Choose the plan that matches your pace. No hidden fees, no surprises—just <span className="text-slate-900">academic excellence.</span>
          </p>
        </div>
      </section>

      {/* Pricing Cards Container */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 relative z-20 space-y-12 pb-32">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            id={plan.id} 
            className={`group relative p-8 md:p-14 bg-white rounded-[3.5rem] border ${plan.isPrimary ? 'border-indigo-100 ring-4 ring-indigo-50/50' : 'border-slate-100'} shadow-2xl shadow-indigo-900/5 transition-all duration-500 hover:shadow-indigo-900/15 hover:-translate-y-1 scroll-mt-32`}
          >
            {/* Badge Overlay */}
            <div className="absolute -top-4 right-10">
              <span className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm ${plan.isPrimary ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white'}`}>
                {plan.badge}
              </span>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 items-center">
              
              {/* Left Column: Price & Info */}
              <div className="lg:col-span-3">
                <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.2em] mb-4">Plan Category</p>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{plan.name}</h2>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-7xl font-black text-slate-900 tracking-tighter">${plan.price}</span>
                  <span className="text-slate-400 font-bold text-lg uppercase tracking-widest">/mo</span>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md font-medium">
                  {plan.desc}
                </p>
                <button className={`${plan.buttonStyle} w-full md:w-auto px-12 py-5 text-white rounded-[2rem] font-black text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95`}>
                  Start Your Journey
                </button>
              </div>

              {/* Right Column: Features List */}
              <div className={`lg:col-span-2 p-10 rounded-[2.5rem] border ${plan.isPrimary ? 'bg-indigo-50/30 border-indigo-100' : 'bg-slate-50 border-slate-100'}`}>
                <h4 className="font-black text-slate-400 mb-8 uppercase text-[10px] tracking-[0.3em]">Included Features</h4>
                <ul className="space-y-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-800 font-bold group/item">
                      <div className={`mt-1 rounded-full p-1 ${plan.isPrimary ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white'}`}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                          </svg>
                      </div>
                      <span className="text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}

        {/* --- Refined FAQ Section --- */}
        <section className="mt-32">
            <div className="text-center mb-16">
                <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Questions?</h3>
                <p className="text-slate-500 font-medium">Everything you need to know about the Flow Engine subscriptions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:border-indigo-100">
                    <h5 className="font-black text-slate-900 mb-4 text-lg">Can I cancel anytime?</h5>
                    <p className="text-slate-500 font-medium leading-relaxed">Absolutely. No commitments. You can cancel your subscription from your account dashboard with a single click.</p>
                </div>
                <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:border-indigo-100">
                    <h5 className="font-black text-slate-900 mb-4 text-lg">Is there a student discount?</h5>
                    <p className="text-slate-500 font-medium leading-relaxed">Our pricing is built specifically for students. We keep our margins slim to ensure every learner has access to the best AI tools.</p>
                </div>
            </div>
        </section>
      </div>

      <footer className="py-12 text-center border-t border-slate-50">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">© 2024 TechFlow Global Billing</p>
      </footer>
    </div>
  );
};

export default Pricing;