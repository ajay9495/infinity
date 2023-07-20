import Row from '../../../../BaseComponents/Row/Row';
import Col from '../../../../BaseComponents/Col/Col';
import Box from '../../../../BaseComponents/Box/Box';

import styles from './Item.module.css';

export default function Item({data}) {
  return (
    <Col  globalStyles={'bo '} localStyles={styles.mainWrapper} >
        <Box  globalStyles={'bo '} localStyles={styles.image} >
          
        </Box>
        <Col  globalStyles={'bo p-5 g-3'}  >
          <Box  globalStyles={'bo txt-l txt-bold-m'}  >
            {data.title}
          </Box>
          <Box  globalStyles={'bo txt-m'}  >
            {data.description}
          </Box>          
        </Col>
    </Col>
  );
}