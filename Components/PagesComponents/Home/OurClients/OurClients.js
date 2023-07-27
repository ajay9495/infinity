import Image from 'next/image';

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './OurClients.module.css';
import ourClients3 from '../../../../Assets/Images/ourClients3.webp'
import ourClients2 from '../../../../Assets/Images/ourClients2.webp'
import ourClients1 from '../../../../Assets/Images/ourClients1.webp'

export default function OurClients() {
  return (
    <Col  globalStyles={'bo pt-section pb-section  cx-center'}  >
        <Col  globalStyles={'bo w-9  w-11-s g-5 cx-center'}  >
            <Col id={'titleSection'} globalStyles={'bo g-3 cx-center'}  >
              <Box  globalStyles={'bo txt-title'}  >
                Our Clients
              </Box>
            </Col>
            <Col  globalStyles={'bo w-12   f-nowrap f-wrap-s'}  >
              <Box  globalStyles={'bo w-12'}  >
                <Image src={ourClients1} alt={"our clients"} className={styles.clientListImage} />
              </Box>
              <Box  globalStyles={'bo w-12'}  >
                <Image src={ourClients2} alt={"our clients"} className={styles.clientListImage} />
              </Box>
              {/* <Box  globalStyles={'bo w-12'}  >
                <Image src={ourClients3} alt={"our clients"} className={styles.clientListImage} />
              </Box> */}
            </Col>
        </Col>
    </Col>
  );
}



