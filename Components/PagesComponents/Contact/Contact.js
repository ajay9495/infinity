import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Contact.module.css';
import { useState } from 'react';
import Header from '../../SharedComponents/Header/Header';
import Footer from '../../SharedComponents/Footer/Footer';

export default function Contact() {

    const [message,setMessage] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsa nesciunt quisquam ab ea eligendi in aliquam, eius repudiandae dolorem repellendus alias velit saepe maxime fugiat aliquid, ullam, at odio?");

  return (
    <Col  globalStyles={'bo '}  >
      <Header />
        <Row  globalStyles={'bo  '}  >
          <Col id={'leftSection'} globalStyles={'bo w-6 w-12-s g-4 cx-center pt-section pb-section'}  >
            <Col id={'titleSection'} globalStyles={'bo w-8 cx-center'}  >
                <Box id={'title'}  globalStyles={'bo  txt-l'}  >
                  Contact Us
                </Box>
            </Col>
            <Col id={'inputSection'} globalStyles={'bo w-8 py-3 g-4'}  >
              <Col  globalStyles={'bo '}  >
                <input placeholder='Name' className={styles.inputField} />
              </Col>
              <Col  globalStyles={'bo '}  >
                <input placeholder='Phone Number' className={styles.inputField} />
              </Col>
              <Col  globalStyles={'bo '}  >
                <textarea placeholder='How can we help you ?' className={styles.inputField} />
              </Col>
              <Col  globalStyles={'bo cx-center'}  >
                <Box  globalStyles={'bo btn-long'}  >
                  Submit
                </Box>
              </Col>
            </Col>
          </Col>
          <Col id={'rightSection'}  globalStyles={'bo w-6 w-12-s  cx-center pt-section pb-section'} localStyles={styles.sectionRight} >
            <Col  globalStyles={'bo w-6 g-4'}  >
              <Col id={'rightTitleSection'} globalStyles={'bo w-12 cx-left'}  >
                  <Box id={'rightTitle'}  globalStyles={'bo  txt-l'}  >
                    Reach us
                  </Box>
              </Col>
              <Col id={'rightInputSection'} globalStyles={'bo w-12 py-3 g-4'}  >
                <Box  globalStyles={'bo txt-m txt-grey'}  >
                  C-7/38, Surya Hospital Road,
                </Box>
                <Box  globalStyles={'bo txt-m txt-grey'}  >
                  Near Indian Oil Petrol Pump,
                </Box>
                <Box  globalStyles={'bo txt-m txt-grey'}  >
                  Gunjan - Vapi 396195
                </Box>
                <Box  globalStyles={'bo txt-m txt-grey'}  >
                  Phone : 9495873393
                </Box>
                <Box  globalStyles={'bo txt-m txt-grey'}  >
                  Gunjan - Vapi 396195
                </Box>
              </Col>
            </Col>
          </Col>
        </Row>
      <Footer />
    </Col>
  );
}