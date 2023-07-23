import { useEffect, useState } from "react";


export default function InfiniteSliderLogic(){

  const [TestState, setTestState] =  useState({});

  var navLeft;
  var navRight;
  let slideIndex = 1;

  var slider;
  var slides;
  var slideWidth;
  var clonedFirstSlide;
  var clonedLastSlide;

  useEffect(()=>{

    slider = document.querySelector('[select="slider"]');
    slides = document.querySelectorAll('[select="slide"]');
    slideWidth = slides[0].clientWidth;
    clonedFirstSlide = slides[1].cloneNode(true);
    clonedLastSlide = slides[slides.length - 2].cloneNode(true);
    
    
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    slider.appendChild(clonedFirstSlide);
    slider.insertBefore(clonedLastSlide, slides[0]);

    // setInterval(() => {
    //   slideIndex++;
    //   showSlide();
    // }, 3000);



  },[TestState]);


  function showSlide(index) {
    if (index < 0) {
      slideIndex = slides.length - 2;
    } else if (index >= slides.length) {
      slideIndex = 1;
    }
  
    slider.style.transition = 'transform 0.3s ease-in-out';
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }
  
  function nextSlide() {
    slideIndex++;
    slider.style.transition = 'transform 0.3s ease-in-out';
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }
  
  function prevSlide() {
    slideIndex--;
    slider.style.transition = 'transform 0.3s ease-in-out';
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }
  
  
      
  return {nextSlide,prevSlide}


}


