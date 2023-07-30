import { useEffect } from 'react';
import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Animation.module.css';

export default function Animation() {

  return (
    <Col  globalStyles={'b p-5'}  >
        <Box  globalStyles={'b'}  >
            hello Animation
        </Box>
        <Box  globalStyles={'b'}  >
          
        </Box>
    </Col>
  );
}