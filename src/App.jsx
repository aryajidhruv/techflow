import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useEffect, useRef } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {

    // for pdf 
    const[showPdf,setShowPdf]=useState(true);

    // for companysection 
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // List of images to avoid repeating code
  const logos = [
    { src: "i2.webp", p: "" }, { src: "i1.webp", p: "" }, { src: "i3.webp", p: "" },
    { src: "i4.webp", p: "" }, { src: "i5.webp", p: "" }, { src: "i6.webp", p: "" },
    { src: "i7.webp", p: "p-2" }, { src: "i8.webp", p: "p-2" }, { src: "i9.webp", p: "p-1" },
    { src: "i10.webp", p: "" }, { src: "i11.svg", p: "p-2" }, { src: "i12.webp", p: "p-1.5" },
    { src: "i13.webp", p: "" }, { src: "i14.webp", p: "p-0.5" }, { src: "i15.webp", p: "p-3" }
  ];
  
 
  return (
    <> 
  <div className='bg-white  relative ' >
  <div className=' m-4 w-8xl'>
    
    {/* class="headercontent" */}
   <header className=' px-0 py-6 max-w-7xl mx-auto flex gap-85 items-center' >

       <a href="#logo" className='flex gap-1.3'>
           <img src="StudySyn.svg" alt="logoimage" className='h-8 w-[1.938rem]' />
           <span className='text-[1.3rem] font-bold'>
           TechFlow
           </span>
       </a>

       <nav className='flex gap-5.5 text-(--text-color) font-bold   ' >

           <a href="#home" className='hover:text-indigo-600 group relative cursor-pointer' >Home
           </a>
           
           {/* features */}
           <a href="#Fetures " className='hover:text-indigo-600 group relative cursor-pointer grid-cols-2 ' >Fetures
            
            <div className='absolute hidden  -translate-x-1/3 transform top-full   group-hover:grid grid-cols-2 gap-4 w-100 p-6    rounded-2xl bg-white
            
            
            '>

            <a href="#pro" className='rounded-lg p-2 hover:bg-indigo-50  text-m transition-all'>
            <h4 className="text-indigo-800 font-bold text-m">AI Notes</h4>
            <p className="text-(--dark-gray) text-s font-normal leading-relaxed">Automatically turn your lectures into easy-to-follow notes.</p>
            </a>

            <a href="#tutor" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">AI Tutor</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Instantly get clear answers from your study content.</p>
      </a>

      <a href="#quizzes" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">AI Quizzes</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Quickly generate quizzes from your materials to test understanding.</p>
      </a>

      <a href="#flashcards" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">AI Flashcards</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Create personalized flashcards automatically to memorize faster.</p>
      </a>

            </div>
           </a>

           {/* pricing */}
           <a href="#pricing" className='hover:text-indigo-600 group relative cursor-pointer grid-cols-2 ' >Pricing
           <div className='absolute hidden  -translate-x-1/3 transform top-full   group-hover:grid grid-cols-2 gap-4 w-100 p-6    rounded-2xl bg-white
            
            
            '>

            <a href="#pro" className='rounded-lg p-2 hover:bg-indigo-50  text-m transition-all'>
            <h4 className="text-indigo-800 font-bold text-m">free starter</h4>
            <p className="text-(--dark-gray) text-s font-normal leading-relaxed">5 AI uploads per month. Perfect for trying out AI notes and quizzes.</p>
            </a>

            <a href="#tutor" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">Study Pro</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Unlimited uploads, 24/7 AI Tutor access, and priority processing.</p>
      </a>

      <a href="#quizzes" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">Scholar</h4>
        <p className="text-(--dark-gray) text-s font-normal ">25 AI uploads per month, advanced PDF analysis, and custom study schedules to keep you on track.</p>
      </a>

      <a href="#flashcards" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">Ultimate</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Everything in Pro, plus collaborative study rooms, full citation management, and unlimited mock exam generation</p>
      </a>

            </div>
                    
           </a>

           {/* blog */}
           <a href="#Blog" className='hover:text-indigo-600 group relative cursor-pointer grid-cols-2 ' >Blog

           <div className='absolute hidden  -translate-x-1/3 transform top-full   group-hover:grid grid-cols-2 gap-4 w-100 p-6    rounded-2xl bg-white
            
            
            '>

            <a href="#pro" className='rounded-lg p-2 hover:bg-indigo-50  text-m transition-all'>
            <h4 className="text-indigo-800 font-bold text-m">AI Study</h4>
            <p className="text-(--dark-gray) text-s font-normal leading-relaxed">Step-by-step guides on turning messy lecture audio into perfect, structured study notes.</p>
            </a>

            <a href="#tutor" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">The Flow Method</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Science-backed tips on deep work, time-blocking, and how to beat exam season burnout.</p>
      </a>

      <a href="#quizzes" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">What's New?</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Stay ahead with the latest feature releases, from new AI models to mobile app improvements.</p>
      </a>

      <a href="#flashcards" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">Student Stories</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Real-world examples of how students are using StudyFlow to save 10+ hours of study time every week.</p>
      </a>

            </div>


            
            
            
           </a>
           {/* about */}
           <a href="#About" className= 'hover:text-indigo-600 group relative cursor-pointer grid-cols-2 '>About
           <div className='absolute hidden  -translate-x-1/3 transform top-full   group-hover:grid grid-cols-2 gap-4 w-100 p-6    rounded-2xl bg-white
            
            
            '>

            <a href="#pro" className='rounded-lg p-2 hover:bg-indigo-50  text-m transition-all'>
            <h4 className="text-indigo-800 font-bold text-m">Our Core Purpose</h4>
            <p className="text-(--dark-gray) text-s font-normal leading-relaxed">Bridging the gap between lecture hall confusion and academic mastery through ethical AI integration.</p>
            </a>

            <a href="#tutor" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">The Flow Engine</h4>
        <p className="text-(--dark-gray) text-s font-normal ">A deep dive into how our proprietary AI models process complex academic data with 99% accuracy.</p>
      </a>

      <a href="#quizzes" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">Built by Students</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Founded by a group of graduates who wanted to solve the "information overload" problem for the next generation..</p>
      </a>

      <a href="#flashcards" className="group/item p-2 rounded-lg hover:bg-indigo-50 transition-all">
        <h4 className="text-indigo-800  font-bold text-m">Data & Privacy</h4>
        <p className="text-(--dark-gray) text-s font-normal ">Your study materials are your own. We use enterprise-grade encryption to keep your academic data private and secure.</p>
      </a>

            </div>
           </a>

       </nav>
      
       <div className=''>
       <a href="#contact" className=' px-6 py-3 text-[1rem] font-semibold rounded-lg bg-indigo-400 text-white' >
           Contact Us
       </a>

       <button class="menubutton">
           <img src="Hamburger.svg" alt="menubutton" class="menuicon"/>
       </button>
       </div>
      


   </header>

   
</div>


   
   <div className='  px-4 m-3 flex w-8xl'>


   
       <div className='py-18 px-12 text-left '>
           <p className='text-1.8xl font-semibold text-(--primary-color)  '>Very proud to introduce</p>
           <h1 className=' text-[3rem] font-bold text-(--text-color)'>Seamless Learning for Brighter Futures</h1>
           <p className='text-(--dark-gray) text-[1.121rem] text-left'>Our innovative platform offers an effortless and seamless approach to learning, empowering students of all ages to achieve brighter futures. Join us on a transformative journey to simplify education and unlock your full potential.
           </p>
           <div className='flex gap-6 p-4 mt-4 text-white'>
               <a href="#start" className=' rounded-md px-4 py-3 text-[1rem] font-semibold bg-[#5254f8] '>Start Now</a>
               <a href="#tour" className=' rounded-md px-4 py-3 text-[1rem] font-semibold bg-(--dark-gray)'>Take Tour</a>
           </div>
       </div>




{/* pdf code */}
       <div className='p-2 flex justify-center items-center  bg-gray-200 rounded-3xl'>
           <div className='flex flex-col justify-start p-4'>
           <button className=' w-24 flex justify-center rounded-2xl mb-2 font-semibold text-white bg-gray-500 hover:text-gray-950' onClick={()=> setShowPdf(true)} > Content</button>

           {/* this container now uses reaxt-pdf t */}

           {showPdf&&( <div className='  overflow-y-auto   bg-white '>
              <iframe src="/Earth.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" title='PDF Document ' frameborder="0" className='h-120 w-132  r ' ></iframe>
           </div>)}
           </div>


           {/* 2nd button */}

          
                
            
           


           
       </div>
   
</div>
  </div>


  

  {/* company section */}
  <div className='flex items-center flex-col '>
        <h2 className='m-7 text-5xl font-bold'>Trusted by the best</h2>
{/* font-size: 1rem;
    font-weight: 500;
    color: var(--gray);
    display: flex;
    gap: 0.5rem;
 */}
        <div className='flex gap-[3.6rem] py-[1.8rem] px-10 bg-(--light-gray) rounded-[0.625rem] m-8'>
            <div className='flex gap-2'>
                <img src="Google.svg" alt="" className='h-[1.56rem]'/>
                <span className='text-[1rem] font-medium text-(--gray)'>Google</span>
            </div>

            <div className='flex gap-2'>
                <img src="Microsoft.svg" alt="" className='h-[1.56rem]'/>
                <span className='text-[1rem] font-medium text-(--gray)'>Microsoft</span>
            </div>

            <div className='flex gap-2'>
                <img src="linkedin-copy.svg" alt="" className='h-[1.56rem]'/>
                <span className='text-[1rem] font-medium text-(--gray)'>Linkedin</span>
            </div>

            <div className='flex gap-2'>
                <img src="VectorEdu.svg" alt="" className='h-[1.56rem]'/>
                <span className='text-[1rem] font-medium text-(--gray)'>Vector</span>
            </div>
        </div>

    </div>

{/* feature container */}
  




<div  className='text-center py-10 bg-(--light-gray)'>
        <div className='w-200 mx-auto px-8 py-0 '>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[2.5rem] font-bold'>
                    Our competitive advantage
                </h2>
                <p className='text-(--gray) text-[1rem]'>
                    This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of real written text but is random or otherwise generated.
                </p>
            </div>
            
            <div className='grid gap-8 grid-cols-2 mt-[1.3rem]'>
              
                {/* <!-- card 1 --> */}
                <div className='g-4 p-8 r-4 mt-[1.3rem] flex flex-col justify-center items-center bg-[#4a90e2] rounded-2xl'>
                    <div className='flex items-center justify-center bg-(--background-color) h-12 w-12 rounded-[50%]'>
                        <img className='w-6 h-6' src="PersonalizedLearn (1).svg"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div  className='font-bold text-[1.3rem] text-white mt-2'>
                            Personalized Learning
                        </div>
                        <div className='text-white'>
                            Offer tailored learning experiences through AI and machine learning to cater to individual student needs.
                        </div>
                    </div>
                </div>
                {/* <!-- card 2 --> */}
                <div className='g-4 p-8 r-4 mt-[1.3rem] flex flex-col justify-center items-center bg-[#FF6289] rounded-2xl'>
                    <div  className='flex items-center justify-center bg-(--background-color) h-12 w-12 rounded-[50%]'>
                        <img className='w-6 h-6' src="Affordability.svg"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div  className='font-bold text-[1.3rem] text-white mt-2'>
                            Affordability
                        </div>
                        <div className='text-white'>
                            Provide high-quality education at an affordable price point, making it accessible to a broader audience.
                        </div>
                    </div>
                </div>
                {/* <!-- card 3 --> */}
                <div className='g-4 p-8 r-4 mt-[1.3rem] flex flex-col justify-center items-center bg-[#fcbf58] rounded-2xl'>
                    <div  className='flex items-center justify-center bg-(--background-color) h-12 w-12 rounded-[50%]'>
                        <img className='w-6 h-6' src="IndustryPatner.svg"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold text-[1.3rem] text-white mt-2'>
                            Industry Partnerships
                        </div>
                        <div className='text-white'>
                            Collaborate with well-known companies and institutions to offer accredited courses and certifications, adding credibility to your offerings.
                        </div>
                    </div>
                </div>
                {/* <!-- card 4 --> */}
                <div className='g-4 p-8 r-4 mt-[1.3rem] flex flex-col justify-center items-center bg-[#44bfc3] rounded-2xl'>
                    <div  className='flex items-center justify-center bg-(--background-color) h-12 w-12 rounded-[50%]'>
                        <img className='w-6 h-6' src="InnovativeTech.svg"/>
                    </div>
                    <div className='flex flex-col gap-4=2'>
                        <div className='font-bold text-[1.3rem] text-white mt-2'>
                            Innovative Technology
                        </div>
                        <div  className='text-white'>
                            Utilize cutting-edge technology, such as augmented reality or virtual reality, to create immersive learning experiences.
                        </div>
                    </div>
                </div>
                {/* <!-- card 5 --> */}
                <div className='g-4 p-8 r-4 mt-[1.3rem] flex flex-col justify-center items-center bg-[#77b05d] rounded-2xl'>
                    <div  className='flex items-center justify-center bg-(--background-color) h-12 w-12 rounded-[50%]'>
                        <img className='w-6 h-6' src="InnovativeTech.svg"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div  className='font-bold text-[1.3rem] text-white mt-2'>
                            Responsive Support
                        </div>
                        <div  className='text-white'>
                            Provide exceptional customer support and assistance to students and educators.
                        </div>
                    </div>
                </div>
                {/* <!-- card 6 --> */}
                <div className='g-4 p-8 r-4 mt-[1.3rem] flex flex-col justify-center items-center bg-[#7d78b1] rounded-2xl'>
                    <div  className='flex items-center justify-center bg-(--background-color) h-12 w-12 rounded-[50%]'>
                        <img className='w-6 h-6' src="Analytics.svg"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold text-[1.3rem] text-white mt-2'>
                            Analytics and Insights
                        </div>
                        <div className='text-white'>
                            Offer detailed progress tracking and analytics to help students and teachers monitor performance and make data-driven decisions.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    {/* company sections for */}

    
    <div ref={sectionRef} className='min-h-175 mt-5 flex items-center flex-col overflow-hidden'>
      {/* Headlines */}
      <p className={`text-3xl font-bold text-gray-700 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
        Trusted by thousands of students in hundreds of universities and high schools
      </p>
      <p className={`text-3xl font-bold text-gray-700 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        in over 128 countries around the world.
      </p>

      {/* Company Grid */}
      <div className='grid grid-cols-5 pl-20 mt-15'>
        {logos.map((logo, index) => (
          <img 
            key={index}
            src={logo.src} 
            alt="logo" 
            className={`h-13 m-10 ${logo.p} ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} 
            style={{ animationDelay: `${0.3 + index * 0.05}s` }} 
          />
        ))}
      </div>

      {/* Compatible Section */}
      <p className={`mt-10 font-bold text-gray-700 text-xl ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
        Compatible with
      </p>

      <div className='grid grid-cols-3 w-190 pl-20 mt-8 justify-center'>
        {["i16.webp", "i17.webp", "i18.webp"].map((img, i) => (
          <img 
            key={i}
            src={img} 
            className={`h-10 ${i === 0 ? 'pl-9' : i === 1 ? 'p-2' : ''} ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} 
            style={{ animationDelay: `${1.4 + i * 0.1}s` }} 
          />
        ))}
      </div>
    </div>
  





{/* review sections */}

<div className='h-300 bg-gray-100  '>

    <p className='font-semibold text-4xl px-154 my-3 pt-6 mask-radial-from-neutral-950 '>Review</p>
   
   <div className='items-center space-y-1 mt-10 '>
   <p className='items-center text-2xl text-indigo-900 font-bold px-120'>Join 100,000+ users from across the globe</p>

<p className='text-2xl text-indigo-900 font-bold px-110'>who improve their knowledge and productivity with</p>
<p className='text-3xl text-indigo-900 font-bold px-160'>TechFLow</p>

   </div>

   
{/* review photo section */}
   <div className='grid grid-cols-3  p-10 h-250 '>
    {/* card1 */}
    <div className='bg-white h-100 w-95  p-5 ml-5 rounded-4xl shadow-2xl'>
        <div className='flex justify-between p-5'>
        <div className='flex gap-4 items-center'>
            <img src="gary.webp" alt="" className='h-15' />
            <p className='text-indigo-700 font-bold'>Shiham Mahroof</p>
            
        </div>
        <div className='flex justify-center  items-center'><img src="Frame.webp" alt="" className='h-8 ' /></div>

        </div>




        <div>

            <p>Great app. <span className='font-bold'>Easy to navigate and input documents. User interface was clever and intuitive.</span> Appearance was sleek and smooth (highly attractive to older teens and young adults especially). Students with learning disabilities may need more time to adjust. But the company seems real interested in trying to develop this area. Hats off them. Regardless excellent future prospects on an already great app. Highly recommend.</p>
        </div>

    </div>


{/* card2 */}

<div className='bg-white h-100 w-95  p-5 ml-5 rounded-4xl shadow-2xl '>
        <div className='flex justify-between p-5'>
        <div className='flex gap-4 items-center'>
            <img src="r2.webp" alt="not found" className='h-15' />
            <p className='text-indigo-700 font-bold'>Jasmin S.</p>
            
        </div>
        <div className='flex justify-center  items-center'><img src="Frame.webp" alt="" className='h-8 ' /></div>

        </div>




        <div>

            <p>This is hands down the best AI tool I have ever used. There's a free trial but i just paid for the most expensive plan and it's so worth it. <span className='font-bold'>I can ask it any question and It tells me anything i need to know about any video or file.</span> - literally saves me hours of time.
            It has completely transformed my workflow and literally saves me hours of productive time every day. I cannot imagine going back to my old study routine!"</p>
        </div>

    </div>




{/* card3 */}
<div className='bg-white h-100 w-95  p-5 ml-5 rounded-4xl shadow-2xl'>
        <div className='flex justify-between p-5'>
        <div className='flex gap-4 items-center'>
            <img src="r3.webp" alt="" className='h-15' />
            <p className='text-indigo-700 font-bold'>Kei Camba</p>
            
        </div>
        <div className='flex justify-center  items-center'><img src="Frame.webp" alt="" className='h-8 ' /></div>

        </div>




        <div>

            <p>I highly recommend their tools. <span className='font-bold'>Very helpful for a teacher that needs to create quizzes from video modules.</span>Good customer service too. Just look for their support named [Tommy], he can walk you through their products with some visuals .Just look for their support specialist named Tommy; he is a lifesaver and can walk you through their products with some great visuals. It has made my lesson planning so much more efficient!</p>
        </div>

    </div>



{/* card4 */}
<div className='bg-white h-100 w-95  p-5 ml-5 rounded-4xl shadow-2xl'>
        <div className='flex justify-between p-5'>
        <div className='flex gap-4 items-center'>
            <img src="r4.webp" alt="" className='h-15' />
            <p className='text-indigo-700 font-bold'>Shiham Mahroof</p>
            
        </div>
        <div className='flex justify-center  items-center'><img src="Frame.webp" alt="" className='h-8 ' /></div>

        </div>




        <div>

            <p>Probably one of the most useful AI services I've used. Not only that, but they have phenomenal customer service!  <span className='font-bold'>EI made a mistake with my subscription plan, and they resolved it the same day I reached out</span>  Highly recommend!
            It is rare to find a company that cares this much about their users. I’ve already told my whole department about it. Highly recommend for anyone who needs reliable AI support!"

</p>
        </div>

    </div>




{/* card5 */}
<div className='bg-white h-100 w-95  p-5 ml-5 rounded-4xl shadow-2xl'>
        <div className='flex justify-between p-5'>
        <div className='flex gap-4 items-center'>
            <img src="r5.webp" alt="" className='h-15' />
            <p className='text-indigo-700 font-bold'>Benjamin Deprisco</p>
            
        </div>
        <div className='flex justify-center  items-center'><img src="Frame.webp" alt="" className='h-8 ' /></div>

        </div>




        <div>

            <p> <span className='font-bold'>Have been using Techflow for about a year.</span>now and can honestly say that it has boosted my academic performance so much. It has many great features but my favourite would be the flashcards option. It gathers all the info from any document and creates flashcards for you to study from.
            <span className='font-bold'> It's great when you're juggling 7 classes</span> 
            and don't have time to write out flashcards yourself. Excited for whats next to come!</p>
        </div>

    </div>




{/* card6 */}
<div className='bg-white h-100 w-95  p-5 ml-5 rounded-4xl shadow-2xl'>
        <div className='flex justify-between p-5'>
        <div className='flex gap-4 items-center'>
            <img src="r6.webp" alt="" className='h-15' />
            <p className='text-indigo-700 font-bold'>Tom Paladin</p>
            
        </div>
        <div className='flex justify-center  items-center'><img src="Frame.webp" alt="" className='h-8 ' /></div>

        </div>




        <div>

            <p> <span className='font-bold'>Great application for graduate/doctoral level students in research</span> I used this app to help guide my research project. I used videos to transcribe to text, created qualitative surveys in which I used the responses to help create table charts, dissect themes, insights/findings. The best thing about this app is the AI chatbox where you can save your previous convos, but also you can upload images! 11/10 would recommend.</p>
        </div>

    </div>
        


    

   </div>

 


</div>



   

   
    
</>
  )
}

export default App
