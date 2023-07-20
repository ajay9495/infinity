import Image from 'next/image';
import Link from 'next/link';

import { Inter } from 'next/font/google'
import { AiFillCaretDown } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { BiCaretDown } from 'react-icons/bi';
import { FaCaretDown } from 'react-icons/fa';

import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';
 
import styles from './Header.module.css';
import logo from '../../../Assets/Images/logo.webp'
import TestImage from '../../../Assets/Images/clientLogo1.jpg'
import Placeholder from './Placeholder/Placeholder';
import ServiceExpand from './ServiceExpand/ServiceExpand';
import HeaderLogic from './HeaderLogic'
import MenuExpand from './MenuExpand/MenuExpand';

export default function Header() {

  const {ServiceExpandState, MenuExpandState, Events} = HeaderLogic();

  return (

    <Col>
      <Row id={'mainWrapper'} globalStyles={'bo p-3 rx-center'} localStyles={styles.headerWrapper}>
        <Row  globalStyles={'bo w-10 ry-center'}  >
            <Box id={'logo'}  globalStyles={'bo'}  >
              <Image src={logo} alt={'logo'} className={styles.logo} />
            </Box>
            <Row id={'navWrapper'}  globalStyles={'bo g-4'} localStyles={styles.navWrapper} >
              <Col  globalStyles={'bo '} localStyles={styles.navItem} >
                <div className={styles.highlight}></div>
                <div className={styles.navText} >
                  <Link href={'/'} className={'txt-link'} >
                    HOME
                  </Link>
                </div>
              </Col>
              <Col  globalStyles={'bo '} localStyles={styles.navItem} onClick={Events.toggleServiceExpand} >
                <div className={styles.highlight}></div>
                <Row globalStyles={'bo g-2 ry-center'} localStyles={styles.navText} >
                  <div  >SERVICES</div>
                  <Box  globalStyles={'bo '} localStyles={(ServiceExpandState.status == "active")&&styles.arrowUp} >
                    <FaCaretDown />
                  </Box>
                </Row>
              </Col>
              <Col  globalStyles={'bo '} localStyles={styles.navItem}  >
                <div className={styles.highlight}></div>
                <div className={styles.navText} >
                  <Link href={'/contact'} className={'txt-link'} >
                    CONTACT
                  </Link>
                </div>
              </Col>
            </Row>
            <Box id={'menu'} globalStyles={'bo pull-right'} localStyles={styles.menuWrapper} onClick={Events.toggleMenuExpand} >
              <Row id={'menuSubRow1'} localStyles={styles.menuSubRow1} >
                <div id={'menuSub1'} className={styles.menuSub1} >
                </div>
              </Row>
              <Row id={'menuSubRow2'} localStyles={styles.menuSubRow2} >
                <div id={'menuSub2'} className={styles.menuSub2} >
                </div>              
              </Row>
              <Row id={'menuSubRow3'} localStyles={styles.menuSubRow3} >
                <div id={'menuSub3'} className={styles.menuSub3} >
                </div>
              </Row>
            </Box>
        </Row>
      </Row>
      <Placeholder />
      {(ServiceExpandState.status == "active")&& <ServiceExpand />}
      {(MenuExpandState.status == "active")&& <MenuExpand events={Events} />}
    </Col>


  );
}




