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
      title: "Lorem ipsum adipisicing elit. Quas, perferendis dolor sit amet consectetur",
      image: 'sdf'
    },
    {
      title: "Lorem ipsum adipisicing elit. Quas, perferendis dolor sit amet consectetur",
      image: 'sdf'
    },
    {
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
                return(<MenuLeftItem  data={item} />)
              })
            }
          </Col>
          <Col id={'menuRightSection'} globalStyles={'bo w-6 w-12-s  p-3 g-3 g-5-s '} localStyles={styles.rightSection}  >
            <Link href={'/'} className={styles.link}>
              <Row  globalStyles={'bo g-3 ry-center'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '} localStyles={styles.menuText} >
                  Web Development
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>
            </Link>
            <Link href={'/contact'} className={styles.link}>
              <Row  globalStyles={'bo g-3 ry-center'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '}  >
                UI/UX Design
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>
            </Link>
            <Link href={'/'} className={styles.link}>
              <Row  globalStyles={'bo g-3 ry-center'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '}  >
                  Software Development
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>
            </Link>
            <Link href={'/'} className={styles.link}>
              <Row  globalStyles={'bo g-3 ry-center'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '}  >
                  ERP, ERM, CMS
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>  
            </Link>
            <Link href={'/'} className={styles.link}>
              <Row  globalStyles={'bo g-3 ry-center'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '}  >
                  Data Science, AI, Machine Learning, Deep Learning
                </Col>
                <Col  globalStyles={'bo '}  localStyles={styles.menuIcon}>
                  <BsChevronRight fontSize={'1.3rem'}/>
                </Col>
              </Row>  
            </Link>
            <Link href={'/'} className={styles.link}>
              <Row  globalStyles={'bo g-3 ry-center'} localStyles={styles.rightSub}  >
                <Col  globalStyles={'bo '}  >
                  Blockchain Technology
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

