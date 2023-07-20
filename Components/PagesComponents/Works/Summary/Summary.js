import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Summary.module.css';

export default function Summary() {
  return (
    <Row  globalStyles={'bo'} localStyles={styles.mainWrapper} >
        <Row  globalStyles={'bo w-12 rx-center'} localStyles={styles.overlay}  >
            <Col  globalStyles={'bo g-5 w-9 cy-center'}  >
                <Col id={'title'} globalStyles={'bo '} localStyles={styles.title} >
                    Our Works
                </Col>
                <Row id={'stats'}  globalStyles={'bo g-5'}  >
                    <Col id={'projects'} globalStyles={'bo g-3'}  >
                        <Box  globalStyles={'bo '} localStyles={styles.summaryItems}  >
                            1000+
                        </Box>
                        <Box  globalStyles={'bo '} localStyles={styles.summaryItems} >
                            Projects
                        </Box>
                    </Col>
                    <Col id={'clients'} globalStyles={'bo g-3'}  >
                        <Box  globalStyles={'bo '} localStyles={styles.summaryItems}  >
                            150+ 
                        </Box>
                        <Box  globalStyles={'bo '} localStyles={styles.summaryItems} >
                            Clients
                        </Box>
                    </Col>
                    <Col id={'awards'} globalStyles={'bo g-3'}  >
                        <Box  globalStyles={'bo '} localStyles={styles.summaryItems}  >
                            15
                        </Box>
                        <Box  globalStyles={'bo '} localStyles={styles.summaryItems} >
                            Awards
                        </Box>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Row>



  );
}