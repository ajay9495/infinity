import Image from 'next/image';

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './SuccessStories.module.css';

import Item from './Item/Item';
import successStoriesImage1 from '../../../../Assets/Images/caseStudies1.webp'

export default function SuccessStories() {

    var data = [
        {
            id: 1,
            title:"consolidate customer information and interactions",
            description: "The client was looking at building a solution that would offer all the features offered by the client/server application without a performance drop. This was important to live up the user experience expectation of the end customers.",
            image: successStoriesImage1
        },
        {
            id: 2,
            title:"Scalable Data Repository and Data Visualization",
            description: "The client was looking to show important information to their customers on the dashboard itself. However, it was expected to be presented in uncluttered and easy to understand format.",
            image: successStoriesImage1
        }
    ]

  return (

    <Col id={'successStoriesWrapper'} globalStyles={'bo g-4 pt-section'}  >
        <Box id={'successStoriesTitle'} globalStyles={'bo txt-l'}  >
            Success Stories
        </Box>
        <Box id={'successStoriesContent'}  globalStyles={'bo '} localStyles={styles.Content} >
            {
                data.map((item)=>{
                    return(
                        <Item key={item.id} data={item} />
                    )
                })
            }
        </Box>
    </Col>

  );
}




