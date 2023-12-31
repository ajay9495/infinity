
import Image from 'next/image';

import Row from '../../../../BaseComponents/Row/Row';
import Col from '../../../../BaseComponents/Col/Col';
import Box from '../../../../BaseComponents/Box/Box';

import styles from './Item.module.css';
import Link from 'next/link';

export default function Item({data}) {
  return (
    <Col  globalStyles={'bo g-4 p-4'} localStyles={styles.mainWrapper} >
        <Box  globalStyles={'bo '}  >
          <Image src={data.icon} alt={'icon'} className={styles.icon} />
        </Box>
        <Box  globalStyles={'bo  txt-m txt-bold-m'} localStyles={styles.title} >
          {data.title}
        </Box>
        <Box  globalStyles={'bo  txt-s '} localStyles={styles.description} >
          {data.description}
        </Box>
        <Link href={data.url} className={'txt-link'}>
          <Box  globalStyles={'bo  btn-secondary'} localStyles={styles.btn} >
            Learn More
          </Box>
        </Link>
    </Col>
  );
}