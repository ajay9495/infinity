import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    
    <Col  globalStyles={'bo cx-center p-3'} localStyles={styles.mainWrapper} >
      <Row  globalStyles={'bo w-11 p-4 g-4-s ry-center'} localStyles={styles.topSection} >
        <Row  globalStyles={'bo g-3'}  >
          <Box  globalStyles={'bo'}  >
            <Link href={'/'} className={'txt-link'}>
              <Box  globalStyles={'bo txt-s txt-white'}  >
                Home
              </Box>
            </Link>
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={'/works'} className={'txt-link'}>
              <Box  globalStyles={'bo txt-s txt-white'}  >
                Our Works
              </Box>
            </Link>
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={'/about'} className={'txt-link'}>
              <Box  globalStyles={'bo txt-s txt-white'}  >
                About Us
              </Box>
            </Link>
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={'/contact'} className={'txt-link'}>
              <Box  globalStyles={'bo txt-s txt-white'}  >
                Contact Us
              </Box>
            </Link>
          </Box>
        </Row>
        <Row  globalStyles={'bo ml-5 ml-0-s g-3 g-4-s '}  >
          <Box  globalStyles={'bo'}  >
            <Link href={'https://www.facebook.com/profile.php?id=100092721050256&mibextid=ZbWKwL/'} className={'txt-link'}>
              <FaFacebookF fontSize={'1.5rem'} color='#fff' />
            </Link>
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={'https://www.linkedin.com/company/infinitifytechnologies/'} className={'txt-link'}>
              <FaLinkedinIn fontSize={'1.5rem'} color='#fff' />
            </Link>
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={'https://www.instagram.com/infinitifytechnologies/'} className={'txt-link'}>
              <FaInstagram fontSize={'1.5rem'} color='#fff' />
            </Link>          
          </Box>
        </Row>
      </Row>
      <Row  globalStyles={'bo w-11 p-4'}  >
        <Row  globalStyles={'bo g-3'}  >
        <Box  globalStyles={'bo'}  >
            
              <Box  globalStyles={'bo txt-s txt-bold-m txt-white'}  >
                Our Locations
              </Box>
            
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={'/contact#puneSection'} className='txt-Link'>
              <Box  globalStyles={'bo txt-s txt-white'}  >
                Pune
              </Box>
            </Link>
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={'/contact#puneSection'} className='txt-Link'>
              <Box  globalStyles={'bo txt-s txt-white'}  >
                Nagpur
              </Box>
            </Link>
          </Box>
        </Row>
      </Row>
    </Col>


  );
}