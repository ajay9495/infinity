import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './ReactSlider.module.css';
import ServiceBanner from '../../../../Assets/Images/serviceBanner1.webp'
import heroBanner from '../../../../Assets/Images/heroBanner.webp'
import bitcoinBackground from '../../../../Assets/Images/bitcoinBackground.webp'
import developmentBackground from '../../../../Assets/Images/developmentBackground.webp'
import uiuxBackground from '../../../../Assets/Images/uiuxBackground.webp'
import aiBackground from '../../../../Assets/Images/aiBackground.webp'
import bigDataBackground from '../../../../Assets/Images/bigDataBackground.webp'

export default function ReactSlider() {


 
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {

    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {

    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slides = [
    {
      title: 'WEB DEVELOPMENT',
      description: 'This is slide 1 description.',
      image: developmentBackground,
    },
    {
      title: 'UI/UX',
      description: 'This is slide 2 description.',
      image: uiuxBackground,
    },
    {
      title: 'BLOCKCHAIN, CRYPTO',
      description: 'This is slide 1 description.',
      image: bitcoinBackground,
    },
    {
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'This is slide 2 description.',
      image: aiBackground,
    },
    {
      title: 'BIG DATA',
      description: 'This is slide 2 description.',
      image: bigDataBackground,
    }

  ];



  return (

    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <motion.div
          key={'slider'+index}
          className={styles.slide}
          initial={{ opacity: index === currentSlide ? 1 : 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <Box id={'contentWrapper'}  globalStyles={'bo'} localStyles={styles.contentWrapper}  >
            
            <Box  globalStyles={'bo'}  localStyles={styles.imageWrapper}>
              <Image src={slide.image} alt={"slider image"} priority={true} className={styles.slideImage} />
            </Box>

            <Col  globalStyles={'bo w-4 g-3'} localStyles={styles.titleSection} >
              <Box  globalStyles={'bo'} localStyles={(slide.title.length < 20)?styles.title:styles.titleSmall}  >
                {slide.title}
              </Box>
            </Col>

          </Box>
        </motion.div>
      ))}
      <div className={styles.btnLeft} onClick={prevSlide}>
        <BsChevronLeft className={styles.icon} />
      </div>
      <div className={styles.btnRight} onClick={nextSlide}>
        <BsChevronRight className={styles.icon} />
      </div>
      <div className={styles.sliderStatus} >
        {
          slides.map((slide,index)=>{
            return(
              <div key={'sliderStatus'+index} className={(index == currentSlide)? styles.statusItem : styles.statusItemActive} ></div>
            )
          })
        }
      </div>
    </div>

  );
} 