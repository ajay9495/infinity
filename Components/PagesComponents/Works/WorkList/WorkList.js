import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import Item from './Item/Item';

import styles from './WorkList.module.css';
import WorkListLogic from './WorkListLogic';

export default function WorkList() {



  const {data} = WorkListLogic();

  return (
    <Col  globalStyles={'bo cx-center'} localStyles={styles.mainWrapper} >
        <Box  globalStyles={'bo w-9 w-11-s'} localStyles={styles.innerWrapper}>
          {
            data.map((item)=>{
                return(<Item  key={item.id} data={item} />)
            })
          }
        </Box>
    </Col>
  );
}