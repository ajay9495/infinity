import Image from 'next/image';
import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Highlights.module.css';
import Link from 'next/link';
import homeDevelopmentIcon from '../../../../Assets/Images/homeDevelopmentIcon.webp'
import homeUIIcon from '../../../../Assets/Images/homeUIIcon.webp'
import homeBlockchainIcon from '../../../../Assets/Images/homeBlockchainIcon.webp'
import homeBigDataIcon from '../../../../Assets/Images/homeBigDataIcon.webp'
import homeAIIcon from '../../../../Assets/Images/homeAIIcon.webp'


export default function Highlights() {
  return (
    <Row  globalStyles={'bo w-12 p-3-s g-3-s '}  localStyles={styles.mainWrapper}>
        
        <Col  globalStyles={'bo cy-center '} localStyles={styles.subWrapper}  >
            <Link href={'/development'} className={styles.links} >
                <Col  globalStyles={'bo g-3 p-5 w-12 cx-center'}  >
                    <Box  globalStyles={'bo'} localStyles={styles.iconWrapper} >
                        <Image src={homeDevelopmentIcon} alt='highlightIcon' className={styles.icon} />
                    </Box>
                    <Box  globalStyles={'bo '}  >
                        Development
                    </Box>
                </Col>
            </Link>
        </Col>
        
        <Col  globalStyles={'bo cy-center '} localStyles={styles.subWrapper}  >
            <Link href={'/ui'} className={styles.links} >
                <Col  globalStyles={'bo g-3 p-5 w-12 cx-center'}  >
                    <Box  globalStyles={'bo'} localStyles={styles.iconWrapper} >
                        <Image src={homeUIIcon} alt='highlightIcon' className={styles.icon} />
                    </Box>
                    <Box  globalStyles={'bo '}  >
                        UI/UX
                    </Box>
                </Col>
            </Link>
        </Col>

        <Col  globalStyles={'bo cy-center '} localStyles={styles.subWrapper}  >
            <Link href={'/blockchain'} className={styles.links} >
                <Col  globalStyles={'bo g-3 p-5 w-12 cx-center'}  >
                    <Box  globalStyles={'bo'} localStyles={styles.iconWrapper} >
                        <Image src={homeBlockchainIcon} alt='highlightIcon' className={styles.icon} />
                    </Box>
                    <Box  globalStyles={'bo '}  >
                        Blockchain
                    </Box>
                </Col>
            </Link>
        </Col>

        <Col  globalStyles={'bo cy-center '} localStyles={styles.subWrapper}  >
            <Link href={'/ai'} className={styles.links} >
                <Col  globalStyles={'bo g-3 p-5  w-12 cx-center'}  >
                    <Box  globalStyles={'bo'} localStyles={styles.iconWrapper} >
                        <Image src={homeAIIcon} alt='highlightIcon' className={styles.icon} />
                    </Box>
                    <Box  globalStyles={'bo '}  >
                        Artificial Intelligence
                    </Box>
                </Col>
            </Link>
        </Col>

        <Col  globalStyles={'bo cy-center '} localStyles={styles.subWrapper}  >
            <Link href={'/bigdata'} className={styles.links} >
                <Col  globalStyles={'bo g-3 p-5 w-12 cx-center'}  >
                    <Box  globalStyles={'bo'} localStyles={styles.iconWrapper} >
                        <Image src={homeBigDataIcon} alt='highlightIcon' className={styles.icon} />
                    </Box>
                    <Box  globalStyles={'bo '}  >
                        Big Data
                    </Box>
                </Col>
            </Link>
        </Col>

    </Row>
  );
}