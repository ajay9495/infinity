
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
            <span className={styles.text} >Development</span>
          </Link>
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/ui'} className={'txt-link'} >
            <span className={styles.text} >UI/UX Design</span>
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/blockchain'} className={'txt-link'} >
            <span className={styles.text} >Blockchain, Crypto</span>
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/ai'} className={'txt-link'} >
            <span className={styles.text} >Artificial Intelligence</span>
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/bigdata'} className={'txt-link'} >
            <span className={styles.text} >Big Data</span>
          </Link>        
        </div>
      </Box>
    </Col>
  );
}