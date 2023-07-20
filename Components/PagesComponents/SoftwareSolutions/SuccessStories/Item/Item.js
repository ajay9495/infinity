import Image from 'next/image';

import Row from '../../../../BaseComponents/Row/Row';
import Col from '../../../../BaseComponents/Col/Col';
import Box from '../../../../BaseComponents/Box/Box';

import styles from './Item.module.css';


export default function Item({data}) {

    return(

        <Box id={'successStoriesWrapper'} globalStyles={'bo '} localStyles={styles.Wrapper} >
            <Box id={'successStoriesimageWrapper'}  globalStyles={'bo '} localStyles={styles.ImageWrapper} >
                <Image src={data.image} className={styles.image} alt={"image"} />
            </Box>
            <Col  globalStyles={'bo p-4 g-3'} localStyles={styles.Overlay} >
                <Box  globalStyles={'bo txt-m txt-bold-m'}  >
                    {data.title}
                </Box>
                <Box  globalStyles={'bo txt-s'}  >
                    {data.description}
                </Box>
            </Col>
        </Box>

    )
}
