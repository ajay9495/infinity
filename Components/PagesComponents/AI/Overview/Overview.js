import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Overview.module.css';

export default function Overview() {
  return (

    <Col id={'overviewWrapper'} globalStyles={'bo g-4 pt-section'}  >
    <Box id={'OverviewTitle'}  globalStyles={'bo txt-l'}  >
        Overview
    </Box>
    <Box id={'OverviewDescription'} globalStyles={'bo txt-m'}  >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Tempora incidunt maxime nostrum perferendis, aliquam animi aspernatur 
        modi deserunt! Expedita saepe ea repellendus laborum illum, corrupti qui 
        error iusto ad ration
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Tempora incidunt maxime nostrum perferendis, aliquam animi aspernatur 
        modi deserunt! Expedita saepe ea repellendus laborum illum, corrupti qui 
        error iusto ad ration
    </Box>
    </Col>

  );
}