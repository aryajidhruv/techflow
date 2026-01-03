import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
    const[showPdf,setShowPdf]=useState(true)
  

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
        <h4 className="text-indigo-800  font-bold text-m">What’s New?</h4>
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


   

   
    
</>
  )
}

export default App
