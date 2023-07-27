import Image from 'next/image';

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Placeholder.module.css';
import logo from '../../../../Assets/Images/logo.webp'

export default function Placeholder() {
  return (
      <Box  globalStyles={'bo'} localStyles={styles.headerWrapper} >
        <Row  globalStyles={'bo w-10 ry-center '}  >
            <Box id={'logo'}  globalStyles={'bo'}  >
              <Image src={logo} alt={'logo'} className={styles.logo} />
            </Box>        
        </Row>
      </Box>
  );
}