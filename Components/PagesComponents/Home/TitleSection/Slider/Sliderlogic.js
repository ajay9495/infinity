import { useEffect, useState } from "react";


export default function SliderLogic(){

  const [TestState, setTestState] =  useState({});

  var slider;
  var navLeft;
  var navRight;

  useEffect(()=>{

    slider = document.getElementById('slider');
    navLeft = document.getElementById('navLeft');
    navRight = document.getElementById('navRight');

    setInterval(() => {
      
      if(slideIndex < (slider.children.length - 1)){
        nextSlide();
      }
      

    }, 3000);

  },[TestState]);


  let slideIndex = 0;
  
  function showSlide(index) {

    console.log(index)

    if (index < 0) {
      
      // slideIndex = slider.children.length - 1;

      console.log("left end");

      navLeft.style.display = "none";
      navRight.style.display = "flex";

    } else if (index >= slider.children.length) {

      console.log("right  end");
      
      navLeft.style.display = "flex";
      navRight.style.display = "none";

      // slideIndex = 0;
    }
    else{
      navLeft.style.display = "flex";
      navRight.style.display = "flex";
    }
  
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  
  function nextSlide() {

    if(slideIndex == (slider.children.length - 2)) {

      navLeft.style.display = "flex";
      navRight.style.display = "none";

    }
    else{
      
      navLeft.style.display = "flex";
      navRight.style.display = "flex";
    }

    slideIndex++;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    
  }
  
  function prevSlide() {

    if(slideIndex == (1)) {

      navLeft.style.display = "none";
      navRight.style.display = "flex";

    }
    else{
      
      navLeft.style.display = "flex";
      navRight.style.display = "flex";
    }

    slideIndex--;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

  }
      
  return {nextSlide,prevSlide}


}


