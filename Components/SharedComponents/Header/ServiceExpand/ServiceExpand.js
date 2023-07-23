
import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './ServiceExpand.module.css';
import Link from 'next/link';

export default function ServiceExpand() {
  return (
    <Col  globalStyles={'bo g-3'}  localStyles={styles.mainWrapper}>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/development'} className={'txt-link'} >
            Development
          </Link>
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/ui'} className={'txt-link'} >
            UI/UX Design
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/blockchain'} className={'txt-link'} >
            Blockchain, Crypto
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/ai'} className={'txt-link'} >
            Artificial Intelligence, Machine Learning, Deep Learning, Metaverse
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/bigdata'} className={'txt-link'} >
            Big Data, Cloud Computing
          </Link>        
        </div>
      </Box>
    </Col>
  );
}