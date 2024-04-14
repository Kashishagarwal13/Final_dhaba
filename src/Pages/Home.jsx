import React, { useRef, useEffect , useState } from 'react'


import ScrollReveal from 'scrollreveal';
import hour from '../assets2/Hour.png';

import img40 from '../assets/img/img40.png'
import leafBranch2 from "../assets/img/leaf-branch-2.png"
import leafBranch3 from '../assets/img/leaf-branch-3.png';

import spinachLeaf from '../assets/img/spinach-leaf.png';

import home1 from '../assets2/home1.png';
import home2 from '../assets2/home2.png';
import home3 from '../assets2/home3.png';
import skill1 from '../assets2/skill1.png';
import skill2 from '../assets2/skill2.png';
import skill3 from '../assets2/skill3.png';
import today from '../assets2/today.jpg.avif';
import chef1 from '../assets2/chef1.png';
import { Link } from 'react-router-dom';
import vid from '../assets2/vidone.mp4';
import svg1 from '../assets2/svg1.svg';
import svg2 from '../assets2/svg2.svg';
import svg3 from '../assets2/svg3.svg';
import svg41 from '../assets2/svg41.svg';

import wine from '../assets2/wine.mp4';
import home11 from '../assets2/home11.png';
import home12 from '../assets2/home12.png';
import home13 from '../assets2/home13.png';


const Home = () => { 

    const images = [home1, home2, home3];

  // Initialize state for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect hook to update image index at an interval
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Interval set to 1 second (1000 milliseconds)

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);
    

    
    const leftDivRef = useRef(null);
    const rightDivRef = useRef(null);
    const leftDivRef2 = useRef(null);
    const rightDivRef2 = useRef(null);  
    const leftDivRef31 = useRef(null);
    const rightDivRef31 = useRef(null);  
    const leftDivRef4 = useRef(null);
    const rightDivRef4 = useRef(null); 
    const mleftDivRef4 = useRef(null);
    const mrightDivRef4 = useRef(null); 
    
    

   
    const newsletterRef = useRef(null);

    useEffect(() => {
        if (leftDivRef.current && rightDivRef.current) {
            ScrollReveal().reveal(leftDivRef.current, {
                origin: 'top', // Start the animation from the bottom
                duration: 1000,
                delay: 250,
                distance: '50px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef.current, {
                origin: 'bottom', // Start the animation from the top
                duration: 1000,
                delay: 250,
                distance: '150px', // Distance to move
                easing: 'ease',
            });
        }
        if (leftDivRef2.current && rightDivRef2.current) {
            ScrollReveal().reveal(leftDivRef2.current, {
                origin: 'left', // Start the animation from the bottom
                duration: 1000,
                delay: 150,
                distance: '100px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef2.current, {
                origin: 'right', // Start the animation from the top
                duration: 1000,
                delay: 150,
                distance: '200px', // Distance to move
                easing: 'ease',
            });
        }
        if (leftDivRef31.current && rightDivRef31.current) {
            ScrollReveal().reveal(leftDivRef31.current, {
                origin: 'right', // Start the animation from the bottom
                duration: 1000,
                delay: 250,
                distance: '50px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef31.current, {
                origin: 'left', // Start the animation from the top
                duration: 1000,
                delay: 250,
                distance: '150px', // Distance to move
                easing: 'ease',
            });
        }
        if (leftDivRef4.current && rightDivRef4.current) {
            ScrollReveal().reveal(leftDivRef4.current, {
                origin: 'left', // Start the animation from the bottom
                duration: 1000,
                delay: 150,
                distance: '100px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef4.current, {
                origin: 'right', // Start the animation from the top
                duration: 1000,
                delay: 150,
                distance: '200px', // Distance to move
                easing: 'ease',
            });
        }

        if (newsletterRef.current) {
            ScrollReveal().reveal(newsletterRef.current, {
                origin: 'bottom',
                duration: 2000,
                delay: 250,
                distance: '200px',
                scale: 1,
                easing: 'ease',
            });
        }
        if (mleftDivRef4.current && mrightDivRef4.current) {
            ScrollReveal().reveal(mleftDivRef4.current, {
                origin: 'top', // Start the animation from the bottom
                duration: 1000,
                delay: 250,
                distance: '50px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(mrightDivRef4.current, {
                origin: 'bottom', // Start the animation from the top
                duration: 1000,
                delay: 250,
                distance: '150px', // Distance to move
                easing: 'ease',
            });
        }
    
    }, []);

    return (

        <div className=' mainhome overflow-x-hidden relative w-full  '>
        
        {/*first div overall*/}
            <section className=' relative  w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between items-center  mx-auto mt-[110px] bg-black    ' >
            {/*First div*/}
            <div class='   lg:w-[60%] flex flex-col  space-y-4  lg:text-left   pl-5  lg:h-fit pt-20 lg:pl-20  lg:pr-20  text-left  ' ref={leftDivRef}>

<p class='para text-[#EEA33E] font-semibold    lg:text-left flex-1 text-10px'>WELCOME TO DELUX DHABA</p>
<span class='text-white text-lg lg:text-3xl lg:text-[2.5rem] lg:leading-[1.2]     uppercase lg:text-left inline-block'>Savor authentic Indian cuisine in Deluxe Dhaba's cozy ambiance.</span>
<p class=' text-slate-200  text-lg xl:text-xl 3xl:text-2xl 2xl:mt-5  text-left opacity-1'>Indulge in our sumptuous tandoori specialties, crafted with the finest ingredients and cooked to perfection in our traditional clay oven.</p>
<Link to="/about">
<a class="px-7 py-[11px] border-2 border-white  shadow-lg bg-white text-black hover:bg-white font-semibold rounded-full text-[13px] md:text-lg transition duration-300 w-fit" href="">Know More</a>
</Link>
<video src={vid} autoPlay muted loop  className='vid w-full bottom-0 lg:bottom-0 video-no-controls'></video>

</div>
{/*Second Div*/}
                <div className='  max-w-[800px]  w-full  ' ref={rightDivRef}>
                <img src={images[currentImageIndex]}  alt="" className="  "  />

                </div>
                <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
                <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />
            </section>

            {/* Second Section */}
            <section className=' relative max-w-[1080px]  mx-auto flex flex-col lg:flex-row   mt-[100px] p-[30px]  bg-[#F2ECE0]   lg:justify-evenly ' >
 
            <div className=' max-w-[500px] w-full  min-h-[520px] ' ref={leftDivRef31}>
                <div className='flex flex-col justify-evenly space-y-24'>
                    <img src={hour} className=''></img>
                    <img src={svg1} className='  '></img>
                </div>
                <div></div>
            </div>

            <div className='flex flex-col max-w-[500px]  min-h-[680px]    ' ref={rightDivRef31}>
            <p className='text-[#ED9D3A] text-bold text-[48px]  '>ABOUT HAPPY HOUR</p>
            <p className='text-[#1E1E1E] text-[1.5rem]   '>OFFERING BY ~ THE GREAT DELUX DHABA</p>
            <span className=' text-[14px] md:text-xl  text-[#505050]   text-left  p-10 '>Deluxe Dhaba beckons you to relish the joy of Happy Hours from 8 to 9 PM, where flavors meet festivity and every moment is a delight. Join us to indulge in our special deals and double the happiness during this magical hour! . Experience the warmth of camaraderie and the allure of discounted delights during our lively happy hour.</span>
            <video src={wine} autoPlay muted loop  className='vid w-full h-[400px]  '   ></video>

            

            

            </div>
        
            <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
                <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />


               
            </section>

            <section className=' relative mx-auto max-w-[1080px] bg-[#f5f5f5]   p-[50px] mt-[100px] ' >

                <div className=' w-full mx-auto max-w-[500px] ' >
                <p className='text-[#1E1E1E] text-3xl lg:text-[2.5rem] xl:text-5xl   mb-2 p-12  text-ellipsis'> OUR <br/> 
                DELICIOUS MENU</p>
                <img src={svg2} className='w-full mx-auto -mt-16'></img>

                <p className='xl:text-[16px] mx-auto max-w-[30rem] -mt-10 '>The Delux Dhaba  is serving traditional Indian food <br></br> that is rich, plentiful and meticulously prepared.</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:justify-between   text-justify w-full max-w-[620px] justify-evenly mt-10 space-y-10 '>
                    <div className='space-y-4 ' ref={mleftDivRef4}>
                        <p >
                            <span className='text-[#ED9D3A] font-bold'> The Delux Dhaba</span>
                        </p>
                        <p className='text-[14px] md:text-xl  text-[#505050]   text-left   '>India is the land of many exclusive and exotic spices. Every single corner of India boasts food which is unique to that place. </p>
                        <p className='text-[14px] md:text-xl  text-[#505050]   text-left   '>We are supremely confident that our sublime food set in an ostentatious environment supported by attentive service will satiate your desire to have a unique dining experience.</p>
                        <p className='text-[14px] md:text-xl  text-[#505050]   text-left    '>At the Delux Dhaba you can dine like royalty, but you can also feel like it too. </p>
<div className=' mt-10 pb-6'>
<Link to="/menu">
<a class="px-7 py-[11px] border-2 border-white  shadow-lg bg-black text-white  font-semibold rounded-full text-[13px] md:text-lg transition duration-300 w-fit" href="">Know More</a>
</Link>
</div>
                        
                    </div>

                    <div className=' flex flex-row  gap-x-5 w-full max-w-[300px]  ' ref={mrightDivRef4} >
                        <img src={home11} className='w-full hidden lg:block'></img>
                        <img src={home12} className='w-full hidden lg:block'></img>
                        <img src={home13} className='w-full hidden lg:block'></img>
                        <img src={home12} className='w-full lg:hidden '></img>

                    </div>
                    
                </div>
                
            </section>



{/*Rajma rice*/}
            <section className=" relative mx-auto max-w-[1080px]   p-[50px] mt-[100px] "  >
                <div className="  flex lg:flex-row  flex-col  justify-between w-full lg:space-x-16  " >

                    {/*left Section*/}
                    <div ref={leftDivRef2} >
                         <img src={today} className=" rounded-3xl"  />
                    </div>
                    {/*right Section*/}
                   
                    <div className=" w-full  flex flex-col align-center justify-center max-w-[500px] space-y-6" ref={rightDivRef2} >
                    <img src={svg41}></img>
                        <span className="section__subtitle">Today's Special</span> 
                        <h2 className="section__title">Rajma Rice<br />With Gravy</h2>
                        <p className=" ">
                            Take a look at Today's Special. And do not deprive yourself of a good
                            meal, enjoy and be happy.
                        </p>
                        <Link to="/menu">
                        <a href="  " className="button mx-auto">
                            Visit Menu <i className="ri-arrow-right-line"></i>
                        </a>
                        </Link>
                        <img src={spinachLeaf} className="recently__data-img" alt="Spinach Leaf" /> 
                    </div>
                  
                   

                   
                </div>
                <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
                <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />
            </section>
{/*chef section*/}
            <section className=' relative mx-auto max-w-[1080px]    bg-[#F2ECE0]   flex flex-col '>
            <div className='flex flex-col lg:flex-row  justify-between  p-[30px] mt-[100px]'>
            <div className='mx-auto w-full text-[#1E1E1E] text-3xl lg:text-[2.5rem] xl:text-5xl   space-y-1 max-w-[300px]' ref={leftDivRef4}> 
                Our Experienced <br/> Chef <br/> Mr. bhupinder Singh
                <img src={svg2} className='w-[300px] mx-auto -mt-16'></img> 
            </div>
            <div className='w-full max-w-[500px] text-[8px] md:text-xl  text-[#505050]  text-justify flex lg:flex-col flex-col-reverse' ref={rightDivRef4}>
            <img src={svg3} className='w-full mx-auto  max-h-[100px] mt-4'></img>
                <p>Has worked in the F&B industry in UK and has 5 years of experience in the industry.</p>
                <p> Chef Bhupinder demonstrates innovative thinking and creativity in creating unique and delicious dishes, showcasing a passion for culinary arts.</p>
                <p className='pb-3'>With meticulous attention to detail, Chef Bhupinder ensures that every dish is executed to perfection, from ingredient selection to plating presentation.

              Chef Bhupinder  motivates the team, fostering a collaborative work environment.</p>
            </div>
           
                
            </div>
            <div className=' -mt-18 w-full ' ref={newsletterRef}>
            <img src={chef1}></img>

            </div>
            
                 
            </section>
            {/*Skill's section*/}
            <section
            className=' relative mx-auto max-w-[1080px]   p-[50px] mt-[100px] bg-[#f5f5f5]   '>
            <p className='text-[#1E1E1E] text-3xl lg:text-[2.5rem] xl:text-5xl    '>PREMIUM OFFERING BY  DELUX DHABA</p>
            <img src={svg2} className='  w-[300px] mx-auto h-[300px] -mt-28'></img>
            <div className='flex flex-col lg:flex-row mx-auto w-full justify-evenly   lg:space-x-8 space-y-7'  >
                <div className='  w-full  flex flex-col justify-evenly space-y-3 '>
                <h1 className=' text-black'>MAGICAL ATMOSPHERE</h1>
                    <img src={skill1} className=' hover:animate-pulse ease-in'></img>
                    <p className='text-justify'>Dont we all love the perfect blend of good vibes and food in any restaurant? Isnt that something which makes the experience memorable? If youre in for a spellbinding atmosphere and feel-good vibe, let us welcome you to the choicest Indian restaurant in Calgary.

</p>
                </div>
           
                <div className='  w-full  flex flex-col justify-evenly space-y-3'>
                <h1 className=' text-black'>BEST QUALITY FOOD</h1>
                    <img src={skill2} className='  hover:animate-pulse'></img>
                    <p className='text-justify'>If there’s one thing we don’t like to compromise with, it’s the quality of food created in our restaurant. We strictly adhere to the cleaning and sanitizing guidelines for restaurants and food joints. The restaurant does not only provide the meal of your choice but also offers a hygienic and healthy setting for our food lovers..

</p>
                </div>
                <div className='  w-full  flex flex-col justify-evenly space-y-3 '>
                <h1 className=' text-black'>LOW COSTING FOOD</h1>
                    <img src={skill3} className=' hover:animate-pulse '></img>
                    <p className='text-justify'>Yes, you don’t have to burn a hole in your pocket to enjoy fine dining with your loved ones. The restaurant offers a budget-friendly and economical menu for its customers and assures you to have the delectable Indian dishes without worrying about the bill. Yes, you don’t have to burn a hole in your pocket to .
                    restaurant offers a budget-friendly.

</p>
                </div>
            </div>
            


            
    

            </section>


            {/* Newsletter Section */}
            <section className="newsletter section flex " ref={newsletterRef}>
               
                    <img src={spinachLeaf} className="newsletter__spinach" alt="Spinach Leaf" />
            
            </section>


        </div>
        

    );
};

export default Home