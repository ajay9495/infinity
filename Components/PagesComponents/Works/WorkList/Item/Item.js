import Row from '../../../../BaseComponents/Row/Row';
import Col from '../../../../BaseComponents/Col/Col';
import Box from '../../../../BaseComponents/Box/Box';

import styles from './Item.module.css';
import Link from 'next/link';
import ItemLogic from './ItemLogic';

export default function Item({data}) {

  const {goToWorkDetails} = ItemLogic();

  return (
    <Col  globalStyles={'bo '} localStyles={styles.mainWrapper} onClick={()=>{ goToWorkDetails(data) }}>
        
          <Box  globalStyles={'bo '} localStyles={styles.image} >
            
          </Box>
          <Col  globalStyles={'bo p-5 g-3'}   >
            <Box  globalStyles={'bo txt-l txt-bold-m'}  >
              {data.title}
            </Box>
            <Box  globalStyles={'bo txt-m'} localStyles={styles.title} >
              {data.description}
            </Box>          
          </Col>
        
    </Col>
  );

  
}