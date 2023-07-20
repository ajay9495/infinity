import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Home.module.css';

import Header from '../../SharedComponents/Header/Header';
import Footer from '../../SharedComponents/Footer/Footer';
import TitleSection from './TitleSection/TitleSection';
import Services from './Services/Services';
import ContactUs from '@/Components/SharedComponents/ContactUs/ContactUs';
import OurClients from './OurClients/OurClients';


export default function Home() {
  return (
    <Col  globalStyles={'bo '}  >
        <Header />
        <TitleSection />
        <Services />
        <OurClients />
        <ContactUs />
        <Footer />
    </Col>
  );
}