

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

    if (router.query && router.query.data) {

      setWorkData(JSON.parse(router.query.data));
    }
    else{
      router.push('/works');
    }
    

  },[router.query.data]);


  var stringArray = [];
  var pargraph = "";
  var pargraphArray = [];
  function convertStringToParagraphs(string){
      
      pargraphArray = [];
      stringArray = [];

      stringArray = string.split('.');
      
      stringArray.map((item,index)=>{

          pargraph = pargraph + item;

          if((index % 2 === 0)&&(index != 0)){

              pargraphArray.push(pargraph);
              pargraph = "";

          }
          else if(index == (stringArray.length - 1)){

              pargraphArray.push(pargraph);
              pargraph = "";

          }
          
              
      });

      return pargraphArray;

  }


  
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
                    {
                      convertStringToParagraphs(WorkData.description).map((item,index)=>{
                        return(<p key={"workDetailsParagraph"+index}>{item}</p>)
                      })
                    }
                </Box>
            </Col>
        </Col>
        <Footer />
    </Col>
  );
}