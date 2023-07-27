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
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.                  
                </p>
                <p>
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. 
                  Nam, rem.                  
                </p>
              </Box>
            </Col>
        </Col>
        <ContactUs />
        <Footer />
    </Col>
  );
}