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

  const {ServiceExpandState, MenuExpandState, Events, toggleMenuExpand} = HeaderLogic();

  return (

    <Col>
      <Row id={'mainWrapper'} globalStyles={'bo rx-center'} localStyles={styles.headerWrapper}>
        <Row  globalStyles={'bo w-11 ry-center'}  >
            <Link href={'/'} >
              <Box id={'logo'}  globalStyles={'bo'}  >
                <Image src={logo} alt={'logo'} className={styles.logo} />
              </Box>
            </Link>
            <Row id={'navWrapper'}  globalStyles={'bo g-3 pull-right'} localStyles={styles.navWrapper} >
              <Col  globalStyles={'bo '} localStyles={styles.navItem} >
                <div className={styles.highlight}></div>
                <div className={styles.navText} >
                  <Link href={'/'} className={'txt-link'} >
                    <span className={styles.text}>HOME</span>
                  </Link>
                </div>
              </Col>
              <Col  globalStyles={'bo '} localStyles={styles.navItem}  >
                <div className={styles.highlight}></div>
                <div className={styles.navText} >
                  <Link href={'/about'} className={'txt-link'} >
                    <span className={styles.text}>ABOUT US</span>
                  </Link>
                </div>
              </Col>
              <Col  globalStyles={'bo '} localStyles={styles.navItem} onClick={Events.toggleServiceExpand} >
                <div className={styles.highlight}></div>
                <Row globalStyles={'bo g-2 ry-center'} localStyles={styles.navText} >
                  <span className={styles.text}>SERVICES</span>
                  <Box  globalStyles={'bo '} localStyles={(ServiceExpandState.status == "active")&&styles.arrowUp} >
                    <FaCaretDown className={styles.text} />
                  </Box>
                </Row>
              </Col>
              <Col  globalStyles={'bo '} localStyles={styles.navItem}  >
                <div className={styles.highlight}></div>
                <div className={styles.navText} >
                  <Link href={'/products'} className={'txt-link'} >
                    <span className={styles.text}>PRODUCTS</span>
                  </Link>
                </div>
              </Col>
              <Col  globalStyles={'bo '} localStyles={styles.navItem}  >
                <div className={styles.highlight}></div>
                <div className={styles.navText} >
                  <Link href={'/works'} className={'txt-link'} >
                    <span className={styles.text}>OUR WORKS</span>
                  </Link>
                </div>
              </Col>
              <Col  globalStyles={'bo '} localStyles={styles.navItem}  >
                <div className={styles.highlight}></div>
                <div className={styles.navText} >
                  <Link href={'/contact'} className={'txt-link'} >
                    <span className={styles.text}>CONTACT</span>
                  </Link>
                </div>
              </Col>              
            </Row>
            <Box id={'menu'} globalStyles={'bo '} localStyles={styles.menuWrapper} onClick={Events.toggleMenuExpand} >
              <div id={'menuSub1'} className={styles.menuSub1} >
                <div className={styles.menuSubInnerOrange} ></div>
                <div className={styles.menuSubInnerWhite} ></div>
              </div>
              <div id={'menuSub2'} className={styles.menuSub2} >
                <div className={styles.menuSubInnerOrange} ></div>
                <div className={styles.menuSubInnerWhite} ></div>
              </div>              
              <div id={'menuSub3'} className={styles.menuSub3} >
                <div className={styles.menuSubInnerOrange} ></div>
                <div className={styles.menuSubInnerWhite} ></div>
              </div>
            </Box>
        </Row>
      </Row>
      <Placeholder />
      {(ServiceExpandState.status == "active")&& <ServiceExpand />}
      {(MenuExpandState.status == "active")&& <MenuExpand toggleMenuExpand={toggleMenuExpand} events={Events} />}
    </Col>


  );
}




