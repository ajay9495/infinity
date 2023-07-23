

import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import Header from '../../SharedComponents/Header/Header';
import Footer from '../../SharedComponents/Footer/Footer';

import styles from './AI.module.css';
import SuccessStories from './SuccessStories/SuccessStories';
import ContactUs from '../../SharedComponents/ContactUs/ContactUs';
import Title from './Title/Title';
import Overview from './Overview/Overview';

export default function AI() {
  return (
    <Col  globalStyles={'bo '}  >
        <Header />
        <Title />
        <Col id={'contentWrapper'} globalStyles={'bo w-12 cx-center pb-section'}  >
            <Col id={'contentInnerWrapper'} globalStyles={'bo w-9 w-10-s'}  >
              <Overview />
              <SuccessStories />
            </Col>
        </Col>
        <ContactUs />
        <Footer />
    </Col>
  );
}