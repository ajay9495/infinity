import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <Col  globalStyles={'bo g-5 cx-center cy-center'} localStyles={styles.mainWrapper} >
        <Box  globalStyles={'bo txt-l txt-white'}  >
          Want to know more ?
        </Box>
        <Box  globalStyles={'bo btn-primary'}  >
          Contact Us
        </Box>
    </Col>
  );
}