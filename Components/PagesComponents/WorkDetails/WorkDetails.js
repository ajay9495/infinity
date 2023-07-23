

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import Header from '../../SharedComponents/Header/Header';
import Footer from '../../SharedComponents/Footer/Footer';

import styles from './WorkDetails.module.css';
import Summary from './Summary/Summary';


export default function WorkDetails() {

  const INITIAL_WORKDATA = {
    title :"inital title",
    description:"initial description",
    tags: []
  }
  
  const router = useRouter(); 
  const [WorkData,setWorkData] = useState(INITIAL_WORKDATA);
  
  useEffect(()=>{

    var { data } = router.query;

    if(data){
      setWorkData(JSON.parse(data));
    }
    else{
      router.push('/works');
      
    }

  },[]);


  
  return (
    <Col  globalStyles={'bo '}  >
        <Header />
        <Summary data={WorkData} />
        <Col  globalStyles={'bo cx-center pt-section pb-section'}  >
            <Col  globalStyles={'bo w-9  w-11-s txt-m'}  >
                <Box  globalStyles={'bo txt-title'}  >
                  Overview
                </Box>
                <Box  globalStyles={'bo '}  >
                    {WorkData.description} 
                </Box>
            </Col>
        </Col>
        <Footer />
    </Col>
  );
}