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
        <Col  globalStyles={'bo  '}  >
          <Col id={'topSection'} globalStyles={'bo w-12 g-5 cx-center pt-section pb-section'}  >
            <Col id={'title'}  globalStyles={'bo w-9 txt-bold-m cx-center'} localStyles={styles.leftTitle} >
              We are here to help u and your business
            </Col>
            <Col  globalStyles={'bo w-6 w-9'}  >
              <Col id={'inputSection'} globalStyles={'bo w-12 py-3 g-4'}  >
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
          </Col>
          <Row id={'bottomSection'}  globalStyles={'bo w-12 pt-section pb-section'} localStyles={styles.sectionRight} >
            <Col  globalStyles={'bo w-6 w-12-s mt-5-s cx-center cy-center'}  >
              <Col  globalStyles={'bo  g-4'}  >
                <Col id={'rightTitleSection'} globalStyles={'bo w-12 cx-left'}  >
                    <Box id={'rightTitle'}  globalStyles={'bo  txt-l'}  >
                      Pune
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
            <Col  globalStyles={'bo w-6 w-12-s mt-5-s cx-center cy-center'}  >
              <Col  globalStyles={'bo  g-4'}  >
                <Col id={'rightTitleSection'} globalStyles={'bo w-12 cx-left'}  >
                    <Box id={'rightTitle'}  globalStyles={'bo  txt-l'}  >
                      Nagpur
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
        </Col>
      <Footer />
    </Col>
  );
}