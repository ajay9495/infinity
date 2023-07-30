import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Contact.module.css';
import { useState } from 'react';
import Header from '../../SharedComponents/Header/Header';
import Footer from '../../SharedComponents/Footer/Footer';
import ContactLogic from './ContactLogic';

export default function Contact() {

  const {sendMessage, setName, setPhone, setMessage} = ContactLogic();


  return (
    <Col  globalStyles={'bo '}  >
      <Header />
        <Col  globalStyles={'bo  '}  >
          <Col id={'topSection'} globalStyles={'bo w-12 g-5 cx-center pt-section pb-section'}  >
            <Col id={'title'}  globalStyles={'bo w-9 cx-center txt-title'} localStyles={styles.title} >
              Contact Us
            </Col>
            <Col id={'subtitle'}  globalStyles={'bo w-9 txt-m  cx-center'} localStyles={styles.subtitle} >
              We are here to help u and your business
            </Col>
            <Col  globalStyles={'bo w-5 w-9-s'}  >
              <Col id={'inputSection'} globalStyles={'bo w-12 py-3 g-4'}  >
                <Col  globalStyles={'bo '}  >
                  <input placeholder='Name' className={styles.inputField} onChange={(e)=>{ setName(e.target.value) }} />
                </Col>
                <Col  globalStyles={'bo '}  >
                  <input placeholder='Phone Number' className={styles.inputField} onChange={(e)=>{ setPhone(e.target.value) }} />
                </Col>
                <Col  globalStyles={'bo '}  >
                  <textarea placeholder='How can we help you ?' className={styles.inputField} onChange={(e)=>{ setMessage(e.target.value) }} />
                </Col>
                <Col  globalStyles={'bo cx-center'}  >
                  <Box  globalStyles={'bo btn-long'} onClick={sendMessage} >
                    Submit
                  </Box>
                </Col>
              </Col>              
            </Col>
          </Col>
          <Row id={'bottomSection'}  globalStyles={'bo w-12 '} localStyles={styles.sectionRight} >
            <Col id={'nagpurSection'}  globalStyles={'bo w-6 w-12-s   '} localStyles={styles.puneSection} >
              <Col  globalStyles={'bo w-12 cx-center cy-center pt-section pb-section'} localStyles={styles.overlayPune}  >
                <Col  globalStyles={'bo  g-4'}  >
                  <Col id={'rightTitleSection'} globalStyles={'bo w-12 cx-left'}  >
                      <Box id={'rightTitle'}  globalStyles={'bo  txt-l txt-white'}  >
                        <div className={styles.bottomSectionsTitle}>Nagpur</div>
                      </Box>
                  </Col>
                  <Col id={'rightInputSection'} globalStyles={'bo w-12 py-3 g-4'}  >
                    <Box  globalStyles={'bo txt-m txt-white'}  localStyles={styles.txtPune} >
                      34, Rajbhavan, First Floor,
                    </Box>
                    <Box  globalStyles={'bo txt-m txt-white'}  localStyles={styles.txtPune} >
                      Clarke Town Kadbi Chowk,
                    </Box>
                    <Box  globalStyles={'bo txt-m txt-white'}  localStyles={styles.txtPune} >
                      Nagpur - 440013
                    </Box>
                    <Box  globalStyles={'bo txt-m txt-white'}  localStyles={styles.txtPune} >
                      Phone : 9420377188
                    </Box>
                  </Col>
                </Col>
              </Col>
            </Col>
            <Col id={'puneSection'}  globalStyles={'bo w-6 w-12-s  '}  localStyles={styles.nagpurSection} >
              <Col  globalStyles={'bo w-12 cx-center cy-center pt-section pb-section'} localStyles={styles.overlayNagpur}  >  
                <Col  globalStyles={'bo  g-4'}  >
                  <Col id={'rightTitleSection'} globalStyles={'bo w-12 cx-left'}  >
                      <Box id={'rightTitle'}  globalStyles={'bo  txt-l txt-white'}  >
                        <div className={styles.bottomSectionsTitle}>Pune</div>
                      </Box>
                  </Col>
                  <Col id={'rightInputSection'} globalStyles={'bo w-12 py-3 g-4'}  >
                    <Box  globalStyles={'bo txt-m txt-white'}  >
                      Runwal Seagull,
                    </Box>
                    <Box  globalStyles={'bo txt-m txt-white'}  >
                      Handewadi RD, near Magarpatta,
                    </Box>
                    <Box  globalStyles={'bo txt-m txt-white'}  >
                      Hadapsar, Pune - 411028
                    </Box>
                    <Box  globalStyles={'bo txt-m txt-white'}  >
                      Phone : 9028546180
                    </Box>
                  </Col>
                </Col>
              </Col>
            </Col>
          </Row>
        </Col>
      <Footer />
    </Col>
  );
}