import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Overview.module.css';

export default function Overview() {

  var data = "With a focus on AI, we create applications that can perceive, reason, and learn, empowering your business with intelligent decision-making capabilities. From natural language processing to computer vision, we harness the potential of AI to deliver human-like interactions and automation that streamline your operations. Our Machine Learning services unlock the potential of data-driven insights. Through sophisticated algorithms and predictive models, we enable your applications to learn and improve from experience, enhancing performance and accuracy across a myriad of tasks. Deep Learning, the frontier of AI, is at the heart of our development expertise. We design applications that can automatically discover intricate patterns in data, revolutionizing industries with its capabilities in speech recognition, image analysis, and more. Throughout the development process, we emphasize transparency, clear communication, and timely delivery. With our expert guidance, you can harness the power of AI-driven applications to stay ahead in an increasingly competitive digital landscape. Embrace the potential of AI, Machine Learning, and Deep Learning with our bespoke software development services. Partner with us to unlock new possibilities and transform your business into an intelligent, data-driven force that shapes the future of technology. Together, let's embark on a transformative journey into the world of AI-driven applications.";

  var stringArray = [];
  var pargraph = "";
  var pargraphArray = [];

  function convertStringToParagraphs(string){
      
      pargraphArray = [];
      stringArray = [];

      stringArray = string.split('.');
      
      stringArray.map((item,index)=>{

          pargraph = pargraph + item+". ";

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

    <Col id={'overviewWrapper'} globalStyles={'bo g-4 pt-section'}  >
    <Box id={'OverviewTitle'}  globalStyles={'bo txt-title'}  >
        Overview
    </Box>
    <Box id={'OverviewDescription'} globalStyles={'bo txt-m'}  >
      {
        convertStringToParagraphs(data).map((item,index)=>{
          return(<p key={"developmentService"+index}>{item}</p>)
        })
      }
    </Box>
    </Col>

  );
}