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
import Slider from './TitleSection/Slider/Slider';
import InfiniteSlider from './InfiniteSlider/InfiniteSlider';
import Highlights from './Highlights/Highlights';
import ReactSlider from './ReactSlider/ReactSlider';


export default function Home() {
  return (
    <Col  globalStyles={'bo '}  >
        <Header />
        <ReactSlider />
        <Services />
        <OurClients />
        <Highlights />
        <Footer />
    </Col>
  );
}