import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Overview.module.css';

export default function Overview() {

  var data = "Welcome to Infinitify Technologies, where innovation meets excellence. We pride ourselves on delivering top-notch solutions to meet your diverse digital needs. With a strong focus on web development, we specialize in creating captivating websites, dynamic web applications, and seamless ecommerce platforms. Our team of skilled developers, designers, and strategists work diligently to understand your unique requirements and craft tailor-made solutions that drive results. For your online presence, our websites are not just visually stunning but also responsive and user-friendly, ensuring a delightful experience for your visitors across all devices. From small-scale projects to complex web applications, our expertise spans a wide range of industries and technologies, allowing us to create scalable and robust solutions that meet your business objectives. In the fast-paced world of digital commerce, we empower your growth with our ecommerce applications. With a focus on user experience, security, and performance, we help you create an online store that stands out from the competition and delivers a seamless shopping journey for your customers. At our software firm, client satisfaction is our top priority. We believe in building strong partnerships with our clients, ensuring transparent communication, and delivering projects on time and within budget. With a passion for innovation and a commitment to excellence, we take pride in being your trusted technology partner. Experience the power of our expertise and let us take your digital presence to new heights. Partner with us, and together, we will pave the way for your success in the digital realm.";

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


