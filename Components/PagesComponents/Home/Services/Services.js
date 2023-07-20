import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Services.module.css';
import Item from './Items/Items';
import IconWebDev from '../../../../Assets/Images/iconWebdesign.svg'

export default function Services() {

    var data =  [
        {
            id:1,
            title:"Web Development",
            description:"Effective digital transformation for organizations today requires the modernization of their data strategy Building innovative products requires an agile minds",
            url:'http://localhost:3000/',
            icon: IconWebDev
        },
        {
            id:2,
            title:"UI/UX Design",
            description:"Building innovative products requires an agile mindset and leveraging of emerging technologies. We work with our clients beginning with design",
            url:'http://localhost:3000/',
            icon: IconWebDev
        },
        {
            id:3,
            title:"Software Development",
            description:"We are specialized in providing DevOps as a managed service to various development teams and businesses who wish to run applications on the cloud",
            url:'http://localhost:3000/',
            icon: IconWebDev
        },
        {
            id:4,
            title:"ERP, ERM, CMS",
            description:"We help our clients in implementing e-commerce platforms, re-architecting their solutions to go headless and integrating their solutions with legacy systems.",
            url:'http://localhost:3000/',
            icon: IconWebDev
        },
        {
            id:5,
            title:"Data Science, AI, Machine Learning, Deep Learning",
            description:"Having worked on multiple projects, our team has gathered a vast experience across various technology landscapes. ",
            url:'http://localhost:3000/',
            icon: IconWebDev
        }
    ]

  return (
    <Col  globalStyles={'bo pt-section  cx-center'}  >
        <Col  globalStyles={'bo w-9  w-10-s g-3'} localStyles={styles.innerWrapper} >
            <Col  globalStyles={'bo p-5 g-3 cx-center cy-center'}  >
              <Box  globalStyles={'bo txt-l'}  >
                Our Services
              </Box>
              <Box  globalStyles={'bo txt-m'}  >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, optio!
              </Box>
            </Col>
            {
                data.map((item)=>{
                    return(
                        <Item key={item.id} data={item} />
                    )
                })
            }
        </Col>
    </Col>
  );
}