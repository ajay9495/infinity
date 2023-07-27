import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';
 
import styles from './ReactSliderMobile.module.css';
import ServiceBanner from '../../../../Assets/Images/serviceBanner1.webp'
import heroBanner from '../../../../Assets/Images/heroBanner.webp'
import bitcoinBackgroundMobile from '../../../../Assets/Images/bitcoinBackgroundMobile.webp'
import developmentBackgroundMobile from '../../../../Assets/Images/developmentBackgroundMobile.webp'
import uiuxBackgroundMobile from '../../../../Assets/Images/uiuxBackgroundMobile.webp'
import aiBackgroundMobile from '../../../../Assets/Images/aiBackgroundMobile.webp'
import bigDataBackgroundMobile from '../../../../Assets/Images/bigDataBackgroundMobile.webp'

export default function ReactSliderMobile() {


  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {

    
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {

    
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slides = [
    {
      title: 'Web Development',
      description: 'This is slide 1 description.',
      image: developmentBackgroundMobile,
    },
    {
      title: 'UI/UX',
      description: 'This is slide 2 description.',
      image: uiuxBackgroundMobile,
    },
    {
      title: 'Blockchain, Crypto',
      description: 'This is slide 1 description.',
      image: bitcoinBackgroundMobile,
    },
    {
      title: 'Artifical Intelligence, Machine Learning, DeepLearning',
      description: 'This is slide 2 description.',
      image: aiBackgroundMobile,
    },
    {
      title: 'BigData, Cloud',
      description: 'This is slide 2 description.',
      image: bigDataBackgroundMobile,
    }

  ];


  return (

    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={styles.slide}
          initial={{ opacity: index === currentSlide ? 1 : 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <Box id={'contentWrapper'}  globalStyles={'bo'} localStyles={styles.contentWrapper}  >
            
            <Box  globalStyles={'bo'}  localStyles={styles.imageWrapper}>
              <Image src={slide.image} priority={true} alt={"slider image"} className={styles.slideImage} />
            </Box>

            <Col  globalStyles={'bo  g-3'} localStyles={styles.titleSection} >
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