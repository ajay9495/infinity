import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './TitleSection.module.css';

export default function TitleSection() {
  return (
    <Col  globalStyles={'bo cy-center cy-start-s cx-center-s'} localStyles={styles.mainWrapper} >
        <Col  globalStyles={'bo w-3  w-10-s g-4'}  >
          <Box  globalStyles={'bo txt-xl txt-bold-m txt-white'}  >
            Digital Solutions
          </Box>
          <Box  globalStyles={'bo txt-m txt-white'}  >
            Tailor made digital Solutions to take your business to the next level
          </Box>
          <Box  globalStyles={'bo btn-primary'}  >
            Contact Us
          </Box>
        </Col>
    </Col>
  );
}