
import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Products.module.css';
import Head from 'next/head';
import Header from '../../SharedComponents/Header/Header';
import Items from './Items/Items';
import product1 from '../../../Assets/Images/product1.webp'
import product2 from '../../../Assets/Images/product2.webp'
import product3 from '../../../Assets/Images/product3.webp'
import product4 from '../../../Assets/Images/product4.webp'
import Footer from '@/Components/SharedComponents/Footer/Footer';
import ProductListMobile from './ProductListMobile/ProductListMobile';
import ProductList from './ProductList/ProductList';

export default function Products() {


  return (
    <Col  globalStyles={'bo  '}  >
        <Header />
        <Col  globalStyles={'bo  cx-center pt-section pb-section'}  >
          <Col  globalStyles={'bo  w-9 w-11-s  g-5'}  >
            <Box  globalStyles={'bo  txt-title'}  >
              Our Products
            </Box>
            <ProductList />
            <ProductListMobile />
          </Col>
        </Col>
        <Footer />
    </Col>
  );
}
