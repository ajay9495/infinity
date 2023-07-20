
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
          <Link href={'/contact'} className={'txt-link'} >
            Web Development
          </Link>
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/contact'} className={'txt-link'} >
            UI/UX Design
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/contact'} className={'txt-link'} >
            Software Development
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/contact'} className={'txt-link'} >
            ERP, ERM, CMS
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/contact'} className={'txt-link'} >
            Data Science, AI, Machine learning, Deep Learning
          </Link>        
        </div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >
          <Link href={'/contact'} className={'txt-link'} >
            Blockchain Technology
          </Link>        
        </div>
      </Box>
    </Col>
  );
}