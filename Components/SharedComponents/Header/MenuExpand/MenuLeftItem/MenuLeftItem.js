import Row from '../../../../BaseComponents/Row/Row';
import Col from '../../../../BaseComponents/Col/Col';
import Box from '../../../../BaseComponents/Box/Box';

import styles from './MenuLeftItem.module.css';
import Image from 'next/image';
import MenuLeftItemLogic from './MenuLeftItemLogic';

export default function MenuLeftItem({data,toggleMenuExpand}) {

  const {goToWorkDetails} = MenuLeftItemLogic(toggleMenuExpand);

  return (

    <Row  globalStyles={'bo  g-4 ry-start f-nowrap'} localStyles={styles.leftSub}  >
        <Col  globalStyles={'bo w-4'} localStyles={styles.workImageWrapper}  >
            <Image src={data.image} alt={'works image'} className={styles.image} />
        </Col>
        <Col  globalStyles={'bo  w-8 g-4'}  >
            <Box  globalStyles={'bo txt-m txt-white'}  >
                {data.title}
            </Box>
            <Box  globalStyles={'bo '} localStyles={styles.btn} onClick={(e)=>{ goToWorkDetails(data) }} >
                Learn More
            </Box>
        </Col>
    </Row>

  );
}