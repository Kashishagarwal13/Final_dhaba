import React, { useRef, useEffect , useState } from 'react'
import { ReactTyped } from "react-typed";

import ScrollReveal from 'scrollreveal';
import hour from '../assets2/Hour.png';

import img40 from '../assets/img/img40.png'
import leafBranch2 from "../assets/img/leaf-branch-2.png"
import leafBranch3 from '../assets/img/leaf-branch-3.png';
import leafBranch4 from "../assets/img/leaf-branch-4.png"
import homeSushiTitle from '../assets/img/home-sushi-title.png'
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
   
    const newsletterRef = useRef(null);

    useEffect(() => {
        if (leftDivRef.current && rightDivRef.current) {
            ScrollReveal().reveal(leftDivRef.current, {
                origin: 'bottom', // Start the animation from the bottom
                duration: 1000,
                delay: 250,
                distance: '50px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef.current, {
                origin: 'top', // Start the animation from the top
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
                origin: 'bottom', // Start the animation from the bottom
                duration: 1000,
                delay: 250,
                distance: '50px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef31.current, {
                origin: 'top', // Start the animation from the top
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
                origin: 'top',
                duration: 2000,
                delay: 200,
                distance: '100px',
                scale: 1,
                easing: 'ease',
            });
        }
    }, []);

    return (

        <div className=' mainhome '>
        
        {/*first div overall*/}
            <section className='flex flex-col lg:flex-row gap-y-20 lg:gap-x-2 h-[100vh] w-[100vw] mt-52 items-center justify-center lg:mt-12   '>
                <div className=' w-full lg:w-[600px] flex flex-col lg:items-start gap-y-3 align-center justify-center lg:text-left text-center bg-black pl-8 h-[auto] lg:h-[700px] '>

                <p className=' para text-[#EEA33E] font-semibold mb-3 md:text-xl mt-10 text-left'>WELCOME TO DELUX DHABA</p>
                <span className='text-white text-3xl lg:text-[2.5rem] lg:leading-[1.2] 2xl:text-[2rem] 2xl:leading-[1.1] 3xl:text-[3.2rem] 3xl:leading-[1.1] 4xl:text-7xl trojan-font mb-4  uppercase text-left hover:text-4xl '>Savor authentic Indian cuisine in Deluxe Dhaba's cozy ambiance.
</span>
<p className='sub-title text-slate-200 mt-2 xl:mt-3 text-lg xl:text-xl 3xl:text-2xl 2xl:mt-5 hidden lg:block text-left opacity-1'  >Indulge in our sumptuous tandoori specialties, crafted with the finest ingredients and cooked to perfection in our traditional clay oven.</p>
<video src={vid} autoPlay muted loop className='vid' ></video>

                
                </div>
                <div className='lg:w-[700px] lg:h-[700px]  w-full '>
                <img src={images[currentImageIndex]}  alt="" className=" h-[700px]  "  />

                </div>
                <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
                <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />
            </section>

            {/* Second Section */}
            <section className='flex flex-col lg:flex-row gap-y-20  h-[100vh] w-[100vw] mt-52   bg-[#F2ECE0] lg:mt-6 lg:ml-16 mx-auto lg:gap-x-12'>

            <div className=' m-20 w-[500px] ' >
                <div className='flex flex-col gap-y-14'>
                    <img src={hour} className='w-[500px]'></img>
                    <img src={svg1} className=' h-28 '></img>
                </div>
                <div></div>
            </div>

            <div className='flex flex-col  m-20  -ml-28 w-[500px] gap-y-8 text-lg mb-1  '>
            <p className='text-[#ED9D3A]  '>ABOUT HAPPY HOUR</p>
            <p className='text-[#1E1E1E] text-[1.5rem] md:text-[2.5rem] xl:text-4xl 3xl:text-[40px]  4xl:text-7xl  mb-2 md:mb-4'>OFFERING BY ~ THE GREAT DELUX DHABA</p>
            <span className=' text-[14px] md:text-xl mb-6 text-[#505050]   text-left   p-7 '>Deluxe Dhaba beckons you to relish the joy of Happy Hours from 8 to 9 PM, where flavors meet festivity and every moment is a delight. Join us to indulge in our special deals and double the happiness during this magical hour! . Experience the warmth of camaraderie and the allure of discounted delights during our lively happy hour.</span>
            <video src={wine} autoPlay muted loop className='vid w-[800px] h-[500px]'   ></video>

            

            </div>
            <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
                <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />


               
            </section>

            <section className=' mt-80 bg-[#f5f5f5] h-[900px] lg:ml-16'>

                <div className='h-[300px]  '>
                <p className='text-[#1E1E1E] text-3xl lg:text-[2.5rem] xl:text-5xl 3xl:text-6xl  4xl:text-7xl  mb-2 p-12 x text-ellipsis'> OUR <br/> 
                DELICIOUS MENU</p>
                <img src={svg2} className='w-[300px] mx-auto -mt-16'></img>

                <p className='xl:text-[16px] mx-auto max-w-[30rem] mt-2'>The Delux Dhaba  is serving traditional Indian food <br></br> that is rich, plentiful and meticulously prepared.</p>
                </div>

                <div className='flex flex-row m-10 p-4  text-justify gap-x-4 w-[700px] mb-6 '>
                    <div className='space-y-4 '>
                        <p >
                            <span className='text-[#ED9D3A] font-bold'> The Delux Dhaba</span>
                        </p>
                        <p className='text-[8px] md:text-xl  text-[#505050]   text-left   '>India is the land of many exclusive and exotic spices. Every single corner of India boasts food which is unique to that place. At The Grand Palace, we pride ourselves in bringing that distinct Indian cuisine to Sydney, Mona Vale and Terrigal for relishing by food connoisseurs.</p>
                        <p className='text-[8px] md:text-xl  text-[#505050]   text-left   '>We are supremely confident that our sublime food set in an ostentatious environment supported by attentive service will satiate your desire to have a unique dining experience.</p>
                        <p className='text-[8px] md:text-xl  text-[#505050]   text-left mb-7   '>At the Delux Dhaba you can dine like royalty, but you can also feel like it too. </p>
<div className=' mt-10'>
<a className="px-7 py-[11px] border-2 border-black  tracking-wide shadow-lg bg-[#000]  text-[#fff]  hover:bg-transparent hover:text-[#000]  font-semibold rounded-full text-[13px] md:text-lg transition duration-300  " href="/menu">Explore Our Menu</a>
</div>
                        
                    </div>

                    <div className='flex flex-row gap-x-5 w-[800px] '>
                        <img src={home11} className='w-[350px] h-[400px]'></img>
                        <img src={home12} className='w-[300px] h-[400px]'></img>
                        <img src={home13} className='w-[300px] h-[400px]'></img>

                    </div>
                    
                </div>
                
            </section>



{/*Rajma rice*/}
            <section className=" w-[100vw] " id="recently" >
                <div className="  flex flex-row m-20 justify-between " >

                    
                    <div >
                         <img src={today} className="recently__img rounded-3xl" alt="Recently Added Dish " />
                    </div>
                   
                    <div className=" mx-auto ml-20 flex flex-col align-center justify-center w-[500px] space-y-6">
                    <img src={svg41}></img>
                        <span className="section__subtitle">Today's Special</span>
                        <h2 className="section__title">Rajma Rice<br />With Gravy</h2>
                        <p className=" ">
                            Take a look at Today's Special. And do not deprive yourself of a good
                            meal, enjoy and be happy.
                        </p>
                        <a href=" /menu " className="button mx-auto">
                            Visit Menu <i className="ri-arrow-right-line"></i>
                        </a>
                        {/* <img src={spinachLeaf} className="recently__data-img" alt="Spinach Leaf" /> */}
                    </div>
                  
                   

                   
                </div>
                <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
                <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />
            </section>
{/*chef section*/}
            <section className='  bg-[#F2ECE0] h-[1100px] lg:ml-16 flex flex-col '>
            <div className='flex flex-row justify-between mt-8 p-10'>
            <div className='mx-auto text-[#1E1E1E] text-3xl lg:text-[2.5rem] xl:text-5xl 3xl:text-6xl  4xl:text-7xl  mb-2 p-12 x text-ellipsis space-y-1'> 
                Our Experienced <br/> Chef <br/> Mr. bhupinder Singh
                <img src={svg2} className='w-[300px] mx-auto -mt-16'></img> 
            </div>
            <div className='w-[600px] text-[8px] md:text-xl  text-[#505050]  space-y-3 '>
            <img src={svg3} className='w-[200px] mx-auto h-[100px]'></img>
                <p>Has worked in the F&B industry in UK and has 5 years of experience in the industry.</p>
                <p> Chef Bhupinder demonstrates innovative thinking and creativity in creating unique and delicious dishes, showcasing a passion for culinary arts.</p>
                <p className='pb-3'>With meticulous attention to detail, Chef Bhupinder ensures that every dish is executed to perfection, from ingredient selection to plating presentation.

              Chef Bhupinder  motivates the team, fostering a collaborative work environment.</p>
            </div>
           
                
            </div>
            <div className=' -mt-18'>
            <img src={chef1}></img>

            </div>
            
                 
            </section>
            {/*Skill's section*/}
            <section
            className=' mt-80 bg-[#f5f5f5] h-[1100px] lg:ml-16 '>
            <p className='text-[#1E1E1E] text-3xl lg:text-[2.5rem] xl:text-5xl 3xl:text-6xl  4xl:text-7xl  mb-2 p-12 x text-ellipsis'>PREMIUM OFFERING BY  DELUX DHABA</p>
            <img src={svg2} className='  w-[300px] mx-auto h-[300px] -mt-28'></img>
            <div className='flex flex-row mx-auto m-7  p-7 justify-evenly -mt-24 ' >
                <div className='  w-[300px] h-[750px] flex flex-col justify-evenly space-y-3 '>
                <h1 className=' text-black'>MAGICAL ATMOSPHERE</h1>
                    <img src={skill1} className='w-full hover:animate-pulse ease-in'></img>
                    <p className='text-justify'>Dont we all love the perfect blend of good vibes and food in any restaurant? Isnt that something which makes the experience memorable? If youre in for a spellbinding atmosphere and feel-good vibe, let us welcome you to the choicest Indian restaurant in Calgary.

</p>
                </div>
           
                <div className='  w-[300px] h-[750px] flex flex-col justify-evenly space-y-3'>
                <h1 className=' text-black'>BEST QUALITY FOOD</h1>
                    <img src={skill2} className='w-full  hover:animate-pulse'></img>
                    <p className='text-justify'>If there’s one thing we don’t like to compromise with, it’s the quality of food created in our restaurant. We strictly adhere to the cleaning and sanitizing guidelines for restaurants and food joints. The restaurant does not only provide the meal of your choice but also offers a hygienic and healthy setting for our food lovers..

</p>
                </div>
                <div className='   w-[300px] h-[750px] flex flex-col justify-evenly space-y-3 '>
                <h1 className=' text-black'>LOW COSTING FOOD</h1>
                    <img src={skill3} className='w-full hover:animate-pulse '></img>
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