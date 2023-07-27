
import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Products.module.css';
import Head from 'next/head';
import Header from '../../SharedComponents/Header/Header';
import Items from './Items/Items';
import product1 from '../../../Assets/Images/product1.webp'
import product2 from '../../../Assets/Images/product2.webp'
import product3 from '../../../Assets/Images/product3.webp'
import product4 from '../../../Assets/Images/product4.webp'
import Footer from '@/Components/SharedComponents/Footer/Footer';

export default function Products() {

    var data = [
        {
            id: 1,
            title: "ECOMMERCE DEVELOPMENT",
            description: "Are you ready to establish a thriving online presence and tap into the immense potential of e-commerce? Look no further than Infinitify Technologies, your trusted partner in e-commerce platform development. With our expertise and cutting-edge solutions, we'll help you create a powerful, scalable, and user-friendly platform that drives sales, enhances customer experience, and fuels your business growth.",
            image: product1,
            price: 700000
            
        },
        {
            id: 2,
            title: "CRYPTO CURRENCY EXCHANGE TRADING PLATFORM",
            description: "Are you ready to launch your own crypto exchange platform and unlock new opportunities in the digital asset market? Look no further than Infinitify Technologies, your trusted partner in crypto exchange platform development. With our expertise and innovative solutions, we'll help you build a robust, secure, and user-friendly exchange that caters to the needs of traders and investors worldwide.",
            image: product2,
            price: 300000
        
        },
        {
            id: 3,
            title: "CRYPTO CURRENCY WALLET DEVELOPMENT",
            description: "Are you looking to establish your presence in the booming world of cryptocurrencies? Look no further than Infinitify Technologies, your trusted partner in crypto wallet development. With our expertise and cutting-edge solutions, we'll help you create a secure, user-friendly, and feature-rich crypto wallet that meets the demands of today's digital economy.",
            image: product3,
            price: 250000
        },
        {
            id: 4,
            title: "CRYPTO CURRENCY COIN DEVELOPMENT",
            description: "Technologies! We are leaders in crypto coin development, driving innovation and setting new industry standards. With our experience, expertise, and commitment to security, we'll create a customized crypto coin that reflects your brand and delivers exceptional results. Join us in shaping the future of finance. Contact Infinitify Technologies today. Let's redefine crypto together",
            image: product4,
            price: 400000
        }
    ]

  return (
    <Col  globalStyles={'bo  '}  >
        <Header />
        <Col  globalStyles={'bo  cx-center pt-section pb-section'}  >
          <Col  globalStyles={'bo  w-9 w-11-s  g-5'}  >
            <Box  globalStyles={'bo  txt-title'}  >
              Our Products
            </Box>
            <Box  globalStyles={'bo '} localStyles={styles.productsList} >
                {
                    data.map((item,index)=>{
                        return(
                            <Items key={"productsList"+index} data={item} />
                        )
                    })
                }
            </Box>
          </Col>
        </Col>
        <Footer />
    </Col>
  );
}
