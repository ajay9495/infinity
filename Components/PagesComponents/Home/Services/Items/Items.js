
import Image from 'next/image';

import Row from '../../../../BaseComponents/Row/Row';
import Col from '../../../../BaseComponents/Col/Col';
import Box from '../../../../BaseComponents/Box/Box';

import styles from './Item.module.css';

export default function Item({data}) {
  return (
    <Col  globalStyles={'bo g-3 p-4'} localStyles={styles.mainWrapper} >
        <Box  globalStyles={'bo '}  >
          <Image src={data.icon} alt={'icon'} className={styles.icon} />
        </Box>
        <Box  globalStyles={'bo  txt-m txt-bold-m'}  >
          {data.title}
        </Box>
        <Box  globalStyles={'bo  txt-s '}  >
          {data.description}
        </Box>
        <Box  globalStyles={'bo  btn-secondary'}  >
          Learn More
        </Box>
    </Col>
  );
}