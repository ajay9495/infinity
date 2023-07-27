import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    
    <Col  globalStyles={'bo cx-center p-3'} localStyles={styles.mainWrapper} >
      <Row  globalStyles={'bo w-11 p-4 g-3-s'} localStyles={styles.topSection} >
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
        <Row  globalStyles={'bo ml-5 ml-0-s g-3'}  >
          <Box  globalStyles={'bo'}  >
            <Link href={''} className={'txt-link'}>
              <FaFacebookF fontSize={'1rem'} color='#fff' />
            </Link>
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={''} className={'txt-link'}>
              <FaTwitter fontSize={'1rem'} color='#fff' />
            </Link>
          </Box>
          <Box  globalStyles={'bo'}  >
            <Link href={''} className={'txt-link'}>
              <FaInstagramSquare fontSize={'1rem'} color='#fff' />
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
            
              <Box  globalStyles={'bo txt-s txt-white'}  >
                Pune
              </Box>
            
          </Box>
          <Box  globalStyles={'bo'}  >
            
              <Box  globalStyles={'bo txt-s txt-white'}  >
                Nagpur
              </Box>
           
          </Box>
        </Row>
      </Row>
    </Col>


  );
}