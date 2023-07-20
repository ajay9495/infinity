import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Row globalStyles={'bo  rx-center'} localStyles={styles.mainWrapper} >
      <Row  globalStyles={'bo w-10 g-5'} localStyles={styles.innerWrapper} >
        <Col id={'footerMenuSection'} globalStyles={'bo  pl-5 g-4'}  >
          <Box  globalStyles={'bo txt-s  txt-bold-m'}  localStyles={styles.head}>
            FOOTER MENU
          </Box>
          <Box  globalStyles={'bo txt-s '}  localStyles={styles.labels}>
            About Us
          </Box>
          <Box  globalStyles={'bo txt-s '}  localStyles={styles.labels}>
            Terms Of Services
          </Box>
          <Box  globalStyles={'bo txt-s '}  localStyles={styles.labels}>
            Privacy Policy
          </Box>
        </Col>
        <Col id={'addressSection'}  globalStyles={'bo  pl-5 g-4'}  >
          <Box  globalStyles={'bo txt-s  txt-bold-m'}  localStyles={styles.head}>
            ADDRESS
          </Box>
          <Box  globalStyles={'bo txt-s '}  localStyles={styles.addressLabels}>
            C-7/38, Surya Hospital Road,
          </Box>
          <Box  globalStyles={'bo txt-s '}  localStyles={styles.addressLabels}>
            Near Indian Oil Petrol Pump,
          </Box>
          <Box  globalStyles={'bo txt-s '}  localStyles={styles.addressLabels}>
            Gunjan - Vapi 396195
          </Box>          
          <Box  globalStyles={'bo txt-s '}  localStyles={styles.addressLabels}>
            Phone : 9495873393
          </Box> 
          <Box  globalStyles={'bo txt-s '}  localStyles={styles.addressLabels}>
            Email : junaidalatoor@gmail.com
          </Box> 
        </Col>
      </Row> 
    </Row>
  );
}