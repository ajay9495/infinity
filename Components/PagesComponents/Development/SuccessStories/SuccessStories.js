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
            title:"Crafting a Cutting-Edge Web Portal for Real Estate",
            description: "client wanted a web portal for buying selling and renting of real estate properties so  we've crafted a sophisticated web portal that revolutionizes the way you buy, sell, and rent real estate properties. Our comprehensive solution brings together buyers, sellers, and renters, creating a seamless platform for all your property needs.",
            image: successStoriesImage1
        },
        {
            id: 2,
            title:"Crafting Ticket Booking Platform for Water Park",
            description: "client wanted a portal for booking of tickets for a waterpark it was one of the biggest water park so we developed most thrilling waterpark ticket booking platform as well as this helped business to dominate the online presence.",
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




