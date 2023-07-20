import Image from 'next/image';

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './OurClients.module.css';
import clientLogo1 from '../../../../Assets/Images/clientLogo1.jpg'
import clientLogo2 from '../../../../Assets/Images/clientLogo2.jpg'
import clientLogo3 from '../../../../Assets/Images/clientLogo3.jpg'
import clientLogo4 from '../../../../Assets/Images/clientLogo4.jpg'
import clientLogo5 from '../../../../Assets/Images/clientLogo5.jpg'
import clientLogo6 from '../../../../Assets/Images/clientLogo6.jpg'
import clientLogo7 from '../../../../Assets/Images/clientLogo7.jpg'
import clientLogo8 from '../../../../Assets/Images/clientLogo8.jpg'
import clientLogo9 from '../../../../Assets/Images/clientLogo9.jpg'
import clientLogo10 from '../../../../Assets/Images/clientLogo10.jpg'

export default function OurClients() {
  return (
    <Row  globalStyles={'bo rx-center pt-section pb-section'}  >
        <Row  globalStyles={'bo  w-9 w-10-s ry-center'} localStyles={styles.innerWrapper} >
          <Col id={'iconItems'}  globalStyles={'bo w-6 w-12-s'} localStyles={styles.sections} >
            <Box  globalStyles={'bo'} localStyles={styles.clientsGrid} >
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo1} alt={'logo1'} className={styles.logo} />   
              </Box>
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo2} alt={'logo1'} className={styles.logo} />   
              </Box>
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo10} alt={'logo1'} className={styles.logo} />   
              </Box>
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo4} alt={'logo1'} className={styles.logo} />   
              </Box>
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo5} alt={'logo1'} className={styles.logo} />   
              </Box>
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo6} alt={'logo1'} className={styles.logo} />   
              </Box>
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo7} alt={'logo1'} className={styles.logo} />   
              </Box>
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo8} alt={'logo1'} className={styles.logo} />   
              </Box>
              <Box  globalStyles={'bo '} localStyles={styles.clientsItem} >
                <Image src={clientLogo9} alt={'logo1'} className={styles.logo} />   
              </Box>              
            </Box>
          </Col>
          <Col id={'title'} globalStyles={'bo w-6 w-12-s  g-3 f-nowrap cx-center cy-center'} localStyles={styles.sections} >
            <Box  globalStyles={'bo txt-l'}  >
              Our Clients
            </Box>
            <Box  globalStyles={'bo txt-m'}  >
              Meet out past clients 
            </Box>
          </Col>
        </Row>
    </Row>
  );
}



