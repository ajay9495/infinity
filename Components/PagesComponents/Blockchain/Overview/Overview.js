import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Overview.module.css';

export default function Overview() {

  
  var data = "Our expertise spans the entire blockchain ecosystem, from crypto wallet creation to crypto exchange development, ensuring you have the tools to thrive in this dynamic digital landscape. As pioneers in the blockchain industry, we understand the critical importance of security and reliability. Our skilled team of developers and experts meticulously design and implement crypto wallets that offer robust protection for your digital assets. With a user-friendly interface and advanced encryption measures, our wallets provide a seamless and secure experience for users, regardless of their level of expertise. Our crypto exchange development services are tailored to meet your unique requirements. From conceptualization to deployment, we create custom exchanges that deliver exceptional performance, liquidity, and security. We integrate advanced trading features, real-time market data, and multi-currency support to ensure a seamless trading experience for your users. At our software firm, we value collaboration and transparency. We work closely with you to understand your business goals and vision, allowing us to deliver tailor-made solutions that exceed your expectations. Throughout the development process, we prioritize clear communication, timely delivery, and continuous support. Empower your blockchain and crypto ventures with our unparalleled software development services. Let us guide you through this revolutionary digital landscape, equipping you with the tools to embrace the future of finance. Partner with us, and together, we will redefine the way you engage with cryptocurrencies, paving the way for your success in this transformative industry. ";

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
    <Box id={'OverviewTitle'}  globalStyles={'bo txt-l'}  >
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