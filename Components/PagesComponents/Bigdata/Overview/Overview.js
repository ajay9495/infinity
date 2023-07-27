import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Overview.module.css';

export default function Overview() {

  var data = "We offer a comprehensive suite of services related to Big Data. From data collection and storage to data processing and analysis, we guide you through every step of the data journey. Our team of skilled data scientists and engineers leverage state-of-the-art technologies and advanced algorithms to derive valuable insights from vast and complex datasets. Whether you're a small startup or an established enterprise, we tailor our services to your unique needs. Our customized Big Data solutions cater to a diverse range of industries, including finance, healthcare, e-commerce, and more. Data security and privacy are paramount to us. We employ robust security measures to safeguard your data throughout its lifecycle, ensuring compliance with industry regulations and standards. As your trusted technology partner, we prioritize collaboration and transparency. We work closely with you to understand your business goals and challenges, enabling us to deliver solutions that align seamlessly with your vision. From predictive analytics to real-time data processing, our Big Data services equip you with the tools to stay ahead in today's data-driven world. Together, we can turn your data into a strategic asset that fuels innovation and empowers your organization to make smarter, data-driven decisions. Embrace the power of Big Data with our expert digital services. Partner with us to harness the potential of your data and unleash new opportunities for growth and success. Let's embark on a transformative journey into the world of Big Data together.";

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