import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './DesktopItem.module.css';
import Link from 'next/link';
import Image from 'next/image';
export default function DesktopItem({data}) {
  return (
    <Col  globalStyles={'bo  '} localStyles={styles.mainWrapper} >
      <Box  globalStyles={'bo '} localStyles={styles.imageWrapper}  >
        <Image src={data.image} alt={'product image'} className={styles.image} />
      </Box>        
      <Box  globalStyles={'bo '} localStyles={styles.overlay} >
        <Col  globalStyles={'bo '} localStyles={styles.contentWrapper}  >
          <Box  globalStyles={'bo '}  localStyles={styles.title}>
            {data.title}
          </Box>
          <Box  globalStyles={'bo '}  localStyles={styles.description}>
            {data.description}
          </Box>
          <Link href={'/contact'} className='txt-link' >
            <Box  globalStyles={'bo mt-3 btn-secondary'}  >
              Know More
            </Box>              
          </Link>        
        </Col>
      </Box>
    </Col>
  );
}