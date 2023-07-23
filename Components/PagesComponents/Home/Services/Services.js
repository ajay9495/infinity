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
            description:"Digital transformation for organizations today requires the modernization of their data strategy Building innovative products requires an agile minds",
            url:'/development',
            icon: IconWebDev
        },
        {
            id:2,
            title:"UI/UX Design",
            description:"Building innovative products requires an agile mindset and leveraging of emerging technologies. We work with our clients beginning with design",
            url:'/ui',
            icon: IconWebDev
        },
        {
            id:3,
            title:"Blockchain, Crypto",
            description:"We are specialized in providing DevOps as a managed service to various development teams and businesses who wish to run applications on the cloud",
            url:'/blockchain',
            icon: IconWebDev
        },
        {
            id:4,
            title:"Big Data, Cloud Computing",
            description:"We help our clients in implementing e-commerce platforms, re-architecting their solutions to go headless and integrating their solutions with legacy systems.",
            url:'/bigdata',
            icon: IconWebDev
        },
        {
            id:5,
            title:"Artifical Intelligence, Machine Learning, Deep Learning, Metaverse",
            description:"Having worked on multiple projects, our team has gathered a vast experience across various technology landscapes. ",
            url:'/ai',
            icon: IconWebDev
        }
    ]

  return (
    <Col  globalStyles={'bo pt-section  cx-center'}  >
        <Col  globalStyles={'bo w-9  w-10-s g-5 cx-center'}  >
            <Col id={'titleSection'} globalStyles={'bo g-3 cx-center'}  >
              <Box  globalStyles={'bo txt-title'}  >
                Our Services
              </Box>
            </Col>
            <Row  globalStyles={'bo w-12 g-4 f-nowrap f-wrap-s'}  >
              <Col  globalStyles={'bo w-6 w-12-s'}  >
                <Item data={data[0]} />
              </Col>
              <Col  globalStyles={'bo w-6 w-12-s'}  >
                <Item data={data[1]} />
              </Col>
            </Row>
            <Row  globalStyles={'bo w-12 g-4 f-nowrap f-wrap-s'}  >
              <Col  globalStyles={'bo w-6 w-12-s'}  >
                <Item data={data[2]} />
              </Col>
              <Col  globalStyles={'bo w-6 w-12-s'}  >
                <Item data={data[3]} />
              </Col>
            </Row>
            <Row  globalStyles={'bo w-12 g-4 f-nowrap'}  >
                <Item data={data[4]} />
            </Row>
        </Col>
    </Col>
  );
}