import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Summary.module.css';

export default function Summary({data}) {
  return (
    <Row  globalStyles={'bo'} localStyles={styles.mainWrapper} >
        <Row  globalStyles={'bo w-12 rx-center'} localStyles={styles.overlay}  >
            <Col  globalStyles={'bo g-3 w-9 w-11-s cy-center'}  >
                <Col id={'title'} globalStyles={'bo w-9 w-12-s '} localStyles={styles.title} >
                    <Box  globalStyles={'bo '} localStyles={styles.summaryItems}  >
                        {data.title}
                    </Box>
                </Col>
                <Row id={'stats'}  globalStyles={'bo w-9 w-12-s g-3'}  >
                  {
                    data.tags.map((item,index)=>{
                      return(
                        <Box key={`workDetailsSummaryTag${index}`}  globalStyles={'bo'}  localStyles={styles.tag}>
                          Web Development
                        </Box>  
                      )
                    })
                  }
                </Row>
            </Col>
        </Row>
    </Row>



  );
}