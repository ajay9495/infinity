
import Row from '../..//../BaseComponents/Row/Row';
import Col from '../..//../BaseComponents/Col/Col';
import Box from '../..//../BaseComponents/Box/Box';

import styles from './Items.module.css';
import Image from 'next/image';
import ItemLogic from './ItemLogic';
import Link from 'next/link';

export default function Items({data}) {
  
    const {Description, readMore} = ItemLogic(data);

    
    return (
    <Col  globalStyles={'bo  '} localStyles={styles.mainWrapper} >
        <Box  globalStyles={'bo '} localStyles={styles.imageWrapper} >
            <Image src={data.image} priority={true} alt='image' className={styles.image} />
        </Box>
        <Col  globalStyles={'bo  p-4 g-3'} localStyles={styles.innerWrapper} >
            <Box  globalStyles={'bo '} localStyles={styles.title}  >
                {data.title}
            </Box>
            <Box  globalStyles={'bo '}  localStyles={styles.desciption}>
                {Description}
                {
                    (Description.length < 104)&&<span className={styles.readMore} onClick={readMore} > read more</span>
                }
            </Box>  
            <Link href={'/contact'}  className='txt-link' >
                <Box  globalStyles={'bo btn-secondary'}  >
                Learn More
                </Box>      
            </Link>
        </Col>
    </Col>
  );
}











