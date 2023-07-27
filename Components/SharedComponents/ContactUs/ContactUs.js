import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './ContactUs.module.css';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <Col  globalStyles={'bo '} localStyles={styles.mainWrapper} >
      <Col globalStyles={'bo g-5 cx-center cy-center'} localStyles={styles.overlay} >  
        <Box  globalStyles={'bo txt-l txt-white'}  >
          Want to know more ?
        </Box>
        <Link href={'/contact'} className='txt-link'>
          <Box  globalStyles={'bo btn-primary '}  >
            Contact Us
          </Box>
        </Link>
      </Col>
    </Col>
  );
}