import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './About.module.css';
import Header from '../../SharedComponents/Header/Header';
import Footer from '../../SharedComponents/Footer/Footer';
import ContactUs from '../../SharedComponents/ContactUs/ContactUs';

export default function About() {
  return (
    <Col  globalStyles={'bo '} >
        <Header />
        <Col globalStyles={'bo cx-center pt-section pb-section'} localStyles={styles.mainWrapper} >
            <Col  globalStyles={'bo w-9 cx-center'}  >
              <Box  globalStyles={'bo txt-title'}  >
                About Us
              </Box>
              <Box  globalStyles={'bo txt-m'}  >
                <p>
                  Welcome to Infinitify Technologies, your one-stop destination for cutting-edge digital solutions. We are a dynamic and innovative digital solution company with a passion for crafting exceptional experiences. Our diverse range of services is tailored to meet the ever-evolving needs of businesses in the digital landscape.                 
                </p>
                <p>
                  At Infinitify Technologies, we excel in web development, creating interactive and visually stunning websites that leave a lasting impression. Our skilled team of developers leverages the latest technologies and best practices to deliver websites that not only look remarkable but also perform seamlessly across all devices.
                </p>
                <p>
                  When it comes to UI/UX development, we believe that design is not just about aesthetics but also about enhancing user satisfaction. Our designers craft intuitive and delightful user interfaces that strike the perfect balance between beauty and functionality, ensuring your users have an unforgettable experience.
                </p>
                <p>
                  Embracing the future, we also offer cutting-edge AI-related services. Our AI solutions empower businesses to automate processes, gain valuable insights from data, and enhance decision-making, driving growth and efficiency.
                </p>
                <p>
                  Moreover, our big data services are designed to unlock the true potential of data. From data collection and storage to analysis and visualization, we help you derive meaningful insights and make data-driven decisions that shape your success.
                </p>
                <p>
                  At Infinitify Technologies, we are dedicated to excellence, innovation, and client satisfaction. Our team of experts collaborates closely with you to understand your unique requirements and deliver customized solutions that propel your business forward.
                </p>
                <p>
                  Join us on this exciting digital journey, and create a future of limitless possibilities together. Contact us today and witness the power of transformative digital solutions.
                </p>
              </Box>
            </Col>
        </Col>
        <ContactUs />
        <Footer />
    </Col>
  );
}