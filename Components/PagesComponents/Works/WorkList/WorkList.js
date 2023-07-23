import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import Item from './Item/Item';

import styles from './WorkList.module.css';


export default function WorkList() {

    var data = [
        {   
            id: 1,
            title:"Test Title one",
            description: "description one",
            image:"test url",
            tags:["web development","UI/UX","Software Development"]
        },
        {   
            id: 2,
            title:"Test Title two",
            description: "description two",
            image:"test url",
            tags:["Blockchain","Crypto"]
        },
        {   
            id: 3,
            title:"Test Title three",
            description: "description three",
            image:"test url",
            tags:["Software Develpment"]
        }

    ];

  return (
    <Col  globalStyles={'bo cx-center'} localStyles={styles.mainWrapper} >
        <Box  globalStyles={'bo w-9 w-10-s'} localStyles={styles.innerWrapper}>
          {
            data.map((item)=>{
                return(<Item  key={item.id} data={item} />)
            })
          }
        </Box>
    </Col>
  );
}