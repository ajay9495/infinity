import Link from 'next/link';

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './MenuExpand.module.css';
import MenuLeftItem from './MenuLeftItem/MenuLeftItem';

import {BsChevronRight} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'


export default function MenuExpand({events}) {

  var data = [
    {
      id: 1,
      title: "Lorem ipsum adipisicing elit. Quas, perferendis dolor sit amet consectetur",
      image: 'sdf'
    },
    {
      id: 2,
      title: "Lorem ipsum adipisicing elit. Quas, perferendis dolor sit amet consectetur",
      image: 'sdf'
    },
    {
      id: 3,
      title: "Lorem ipsum adipisicing elit. Quas, perferendis dolor sit amet consectetur",
      image: 'sdf'
    }
  ]

  return (
    <Col  globalStyles={'bo '} localStyles={styles.mainWrapper} >
        <Col id={'closeButton'} globalStyles={'bo '} localStyles={styles.closeButton} onClick={events.toggleMenuExpand} >
          <AiOutlineClose color={'#fff'} fontSize={'2rem'} />
        </Col>
        <Row id={'sectionWrapper'} globalStyles={'bo f-nowrap'}  >
          <Col id={'menuLeftSection'} globalStyles={'bo w-6 w-1-s  p-3 g-3'} localStyles={styles.leftSection}  >
            {
              data.map((item)=>{
                return(
                  <MenuLeftItem key={item.id} data={item} />
                )
              })
            }
          </Col>
          <Col id={'menuRightSection'} globalStyles={'bo w-6 w-12-s  p-3 g-3 g-5-s '} localStyles={styles.rightSection}  >
            <Link href={'/development'} className={styles.link}>
              <Row  globalStyles={'bo  g-3 ry-center f-nowrap'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '} localStyles={styles.menuText} >
                  Development
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>
            </Link>
            <Link href={'/ui'} className={styles.link}>
              <Row  globalStyles={'bo  g-3 ry-center f-nowrap'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '} localStyles={styles.menuText}  >
                  UI/UX Design
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>
            </Link>
            <Link href={'/blockchain'} className={styles.link}>
              <Row  globalStyles={'bo  g-3 ry-center f-nowrap'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '} localStyles={styles.menuText}  >
                  Blockchain, Crypto
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>
            </Link>
            <Link href={'/ai'} className={styles.link}>
              <Row  globalStyles={'bo  g-3 ry-center f-nowrap'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '} localStyles={styles.menuText}  >
                  Artificial Intelligence, Machine Learning, Deep Learning, Metaverse
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>  
            </Link>
            <Link href={'/bigdata'} className={styles.link}>
              <Row  globalStyles={'bo  g-3 ry-center f-nowrap'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '} localStyles={styles.menuText}  >
                  Big Data, Cloud Computing
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>  
            </Link>        
          </Col>
        </Row>
    </Col>
  );

}
