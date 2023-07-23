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

export default function ReactSlider() {


  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {

    console.log("hello slider prev");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {

    console.log("hello slider next");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slides = [
    {
      title: 'Development',
      description: 'This is slide 1 description.',
      image: ServiceBanner,
    },
    {
      title: 'UI/UX',
      description: 'This is slide 2 description.',
      image: heroBanner,
    },
    {
      title: 'BlockChain',
      description: 'This is slide 1 description.',
      image: ServiceBanner,
    },
    {
      title: 'Artifical Intelligence, Machine Learning, DeepLearning',
      description: 'This is slide 2 description.',
      image: heroBanner,
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
              <Image src={slide.image} alt={"slider image"} className={styles.slideImage} />
            </Box>

            <Col  globalStyles={'bo w-4 g-3'} localStyles={styles.titleSection} >
              <Box  globalStyles={'bo'} localStyles={styles.title}  >
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
    </div>

  );
}