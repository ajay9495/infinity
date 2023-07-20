import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import Header from '../../SharedComponents/Header/Header';
import Footer from '../../SharedComponents/Footer/Footer';

import styles from './Works.module.css';
import Summary from './Summary/Summary';
import WorkList from './WorkList/WorkList';


export default function Works() {
  return (
    <Col  globalStyles={'bo '}  >
        <Header />
        <Summary />
        <WorkList />
        <Footer />
    </Col>
  );
}