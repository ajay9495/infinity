import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './ServiceExpand.module.css';

export default function ServiceExpand() {
  return (
    <Col  globalStyles={'bo g-3'}  localStyles={styles.mainWrapper}>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >Web Development</div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >UI/UX Design</div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >Software Development</div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >ERP, ERM, CMS</div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >Data Science, AI, Machine learning, Deep Learning</div>
      </Box>
      <Box  globalStyles={'bo '} localStyles={styles.navItem} >
        <div className={styles.highlight}></div>
        <div className={styles.navText} >Blockchain Technology</div>
      </Box>
    </Col>
  );
}