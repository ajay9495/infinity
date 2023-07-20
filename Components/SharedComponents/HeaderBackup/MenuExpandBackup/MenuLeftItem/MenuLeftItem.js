import Row from '../../../../BaseComponents/Row/Row';
import Col from '../../../../BaseComponents/Col/Col';
import Box from '../../../../BaseComponents/Box/Box';

import styles from './MenuLeftItem.module.css';

export default function MenuLeftItem({data}) {
  return (

    <Row  globalStyles={'bo  g-4 ry-start f-nowrap'} localStyles={styles.leftSub}  >
        <Col  globalStyles={'bo w-4'} localStyles={styles.workImageWrapper}  >
            
        </Col>
        <Col  globalStyles={'bo  w-8 g-4'}  >
            <Box  globalStyles={'bo txt-m txt-white'}  >
                {data.title}
            </Box>
            <Box  globalStyles={'bo '} localStyles={styles.btn} >
                Learn More
            </Box>
        </Col>
    </Row>

  );
}