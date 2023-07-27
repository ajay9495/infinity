import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Overview.module.css';

export default function Overview() {

  
  var data = "As a leading provider of cutting-edge solutions, we take pride in offering UI/UX as a service, elevating your products and services to new heights. With a strong focus on user-centric design, our skilled team of UI/UX designers crafts captivating interfaces that resonate with your target audience. From wireframes to prototypes, we meticulously conceptualize and iterate to ensure the best user experience possible. Our UI/UX services cater to a diverse range of industries and platforms, including web applications, mobile apps, and software products. We prioritize responsiveness, accessibility, and aesthetics, ensuring that your digital offerings leave a lasting impression on users. Collaborating closely with you, we delve deep into your brand identity, goals, and user expectations to create intuitive and engaging interfaces that drive user satisfaction and loyalty. Whether you need a complete UI overhaul or a user-focused redesign, we tailor our services to meet your specific needs. At our software firm, client satisfaction is paramount. We prioritize clear communication, timely deliveries, and exceptional quality, ensuring that your UI/UX needs are met beyond expectations. Elevate your digital presence and stand out from the crowd with our UI/UX services. Let us empower your brand with visually striking, user-friendly interfaces that not only captivate your audience but also drive business growth. Partner with us, and together, we will redefine the way your users interact with your digital products and services.";

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