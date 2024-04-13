import React from 'react'
import popularImage1 from '../assets/img/Popular1.png';
import img40 from '../assets/img/img40.png';
import popular3 from '../assets/img/popular3.png';
import  { useRef, useEffect , useState } from 'react';
import ScrollReveal from 'scrollreveal';
import VegFood from './VegFood';
import NonVegFood from './NonVegFood';
import PunjabiFood from './PunFood';
import IndianFood from './IndianFood';
import ChineseFood from './ChineseFood';




const Menu = () => {

  const menuRef = useRef(null);
  const menuRef1 = useRef(null);
  const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);
  const menuRef4 = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
        ScrollReveal().reveal(menuRef.current, {
            origin: 'top',
            duration: 2000,
            delay: 100,
            distance: '200px',
            scale: 1,
            easing: 'ease',
        });
    }
    if (menuRef1.current) {
      ScrollReveal().reveal(menuRef1.current, {
          origin: 'top',
          duration: 2000,
          delay: 150,
          distance: '200px',
          scale: 1,
          easing: 'ease',
      });
  }
  if (menuRef2.current) {
    ScrollReveal().reveal(menuRef2.current, {
        origin: 'top',
        duration: 2000,
        delay: 150,
        distance: '200px',
        scale: 1,
        easing: 'ease',
    });
}
if (menuRef3.current) {
  ScrollReveal().reveal(menuRef3.current, {
      origin: 'top',
      duration: 2000,
      delay: 200,
      distance: '200px',
      scale: 1,
      easing: 'ease',
  });
}
if (menuRef4.current) {
  ScrollReveal().reveal(menuRef4.current, {
      origin: 'top',
      duration: 2000,
      delay: 200,
      distance: '200px',
      scale: 1,
      easing: 'ease',
  });
}
}, []);

const [showVegFood, setShowVegFood] = useState(false);
const [showNonVegFood, setShowNonVegFood] = useState(false);
const [showPunFood, setShowPunFood] = useState(false);
const [showIndianFood, setShowIndianFood] = useState(false);
const [showChineseFood, setShowChineseFood] = useState(false);

  // Function to handle click on VegFood button
  const handleVegFoodClick = () => {
    setShowVegFood(true);
    setShowNonVegFood(false); 
    setShowPunFood(false); 
    setShowIndianFood(false); 
    setShowChineseFood(false); 
  };
  const handleNonVegFoodClick = () => {
    setShowVegFood(false);
    setShowNonVegFood(true);
    setShowPunFood(false); 
    setShowIndianFood(false); 
    setShowChineseFood(false); 
    // Set other button states to false as needed
  };
  const handlePunFoodClick = () => {
    setShowVegFood(false);
    setShowNonVegFood(false);
    setShowPunFood(true);
    setShowIndianFood(false); 
    setShowChineseFood(false); 
    // Set other button states to false as needed
  };

  const handleIndianFoodClick = () => {
    setShowVegFood(false);
    setShowNonVegFood(false);
    setShowPunFood(false);
    setShowIndianFood(true); 
    setShowChineseFood(false); 
    // Set other button states to false as needed
  };

  const handleChineseFoodClick = () => {
    setShowVegFood(false);
    setShowNonVegFood(false);
    setShowPunFood(false);
    setShowIndianFood(false); 
    setShowChineseFood(true); 
    // Set other button states to false as needed
  };





  return (
    <section className="popular section" id="popular">
      <span className="section__subtitle">The Best Food</span>
      <h2>Our Menu</h2>

      {showVegFood ? (
        <VegFood />
      ) : showNonVegFood ? (
        <NonVegFood />
      ) : showPunFood ? (
        <PunjabiFood />
      ) : showIndianFood ? (
        <IndianFood />
      ) : showChineseFood ? (
        <ChineseFood />
      ) :( 
        <div className="popular__container container grid">
          <article className="popular__card f" ref={menuRef1}>
            <img src={popularImage1} className="popular__img" alt="Popular Dish" />
            <h3>Chicken Tikka</h3>
            <span className="popular__description">Punjabi Dish</span>
            <button className="popular__button" onClick={handleVegFoodClick}>
              <i className="ri-shopping-bag-line">Vegetarian Food</i>
            </button>
          </article>
          <article className="popular__card" ref={menuRef2}>
          <img src={popularImage1} className="popular__img" alt="Popular Dish" />
          <h3>Chicken Tikka</h3>
          <span className="popular__description">Punjabi Dish</span>
          {/* <span className="popular__price">Rs 450</span> */}
          <button className="popular__button" onClick={handleNonVegFoodClick}>
            
            <i className="ri-shopping-bag-line">Non-Veg Food</i>
          </button>
        </article>

        <article className="popular__card" ref={menuRef3}>
          <img src={popularImage1} className="popular__img" alt="Popular Dish" />
          <h3>Chicken Tikka</h3>
          <span className="popular__description">Punjabi Dish</span>
          {/* <span className="popular__price">Rs 450</span> */}
          <button className="popular__button" onClick={handlePunFoodClick} >
            <i className="ri-shopping-bag-line"> Punjabi Food </i>
          </button>
        </article>

        {/* ... repeat for other articles */}

        <article className="popular__card" ref={menuRef4}>
          <img src={img40} className="popular__img" alt="Popular Dish" />
          <h3>Paneer Tikka</h3>
          <span className="popular__description">Indian Dish</span>
          {/* <span className="popular__price">Rs 250</span> */}
          <button className="popular__button" onClick={handleIndianFoodClick}>
            <i className="ri-shopping-bag-line">Indian Food </i>
          </button>
        </article>

        <article className="popular__card" ref={menuRef}>
          <img src={popular3} className="popular__img" alt="Popular Dish" />
          <h3>Tandoori Chicken</h3>
          <span className="popular__description">Japanese Dish</span>
          {/* <span className="popular__price">Rs 350</span> */}
          <button className="popular__button"  onClick={handleChineseFoodClick}>
            <i className="ri-shopping-bag-line">Chinease Food</i>
          </button>
        </article>
          {/* Repeat for other articles... */}
        </div>
      )}
    </section>
  );
};

 

export default Menu