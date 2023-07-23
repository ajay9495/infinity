
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';


import Image from 'next/image';
import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './InfiniteSlider.module.css';
import InfiniteSliderLogic from './InfiniteSliderLogic';



import ServiceBanner from '../../../../Assets/Images/serviceBanner1.webp'

export default function InfiniteSlider() {

    const {nextSlide,prevSlide} =   InfiniteSliderLogic();

  return (

  <div className={styles.sliderContainer}>
   
    <div id={'slider'} select="slider" className={styles.slider}>

      <div className={styles.slide} select="slide" >
        <Image src={ServiceBanner} priority={true} alt="Image 1" className={styles.img} />
        <div className={styles.slideTitleSection} >
          <div className={'bo txt-xl txt-bold-m '} >four Development</div>
          <div className={'btn-primary'} >Get In Touch</div>
        </div>
      </div>

      <div className={styles.slide}  select="slide" >
        <Image src={ServiceBanner} priority={true} alt="Image 1" className={styles.img} />
        <div className={styles.slideTitleSection} >
          <div className={'bo txt-xl txt-bold-m '} >one Development</div>
          <div className={'btn-primary'} >Get In Touch</div>
        </div>
      </div>
      <div className={styles.slide} select="slide" >
        <Image src={ServiceBanner} priority={true} alt="Image 1" className={styles.img} />
        <div className={styles.slideTitleSection} >
          <div className={'bo txt-xl txt-bold-m '} >two Development</div>
          <div className={'btn-primary'} >Get In Touch</div>
        </div>
      </div>
      <div className={styles.slide} select="slide" >
        <Image src={ServiceBanner} priority={true} alt="Image 1" className={styles.img} />
        <div className={styles.slideTitleSection} >
          <div className={'bo txt-xl txt-bold-m '} >three Development</div>
          <div className={'btn-primary'} >Get In Touch</div>
        </div>
      </div>

      <div className={styles.slide} select="slide" >
        <Image src={ServiceBanner} priority={true} alt="Image 1" className={styles.img} />
        <div className={styles.slideTitleSection} >
          <div className={'bo txt-xl txt-bold-m '} >four Development</div>
          <div className={'btn-primary'} >Get In Touch</div>
        </div>
      </div>

      <div className={styles.slide}  select="slide" >
        <Image src={ServiceBanner} priority={true} alt="Image 1" className={styles.img} />
        <div className={styles.slideTitleSection} >
          <div className={'bo txt-xl txt-bold-m '} >one Development</div>
          <div className={'btn-primary'} >Get In Touch</div>
        </div>
      </div>


    </div>

    <div id={'navLeft'} className={styles.navLeft} onClick={prevSlide}>
      <SlArrowLeft color='#000'/>
    </div>
    <div id={'navRight'} className={styles.navRight} onClick={nextSlide}>
      <SlArrowRight color='#000'/>
    </div> 

  </div>


  );
}