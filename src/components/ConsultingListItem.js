import React, { PropTypes } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Media from 'react-bootstrap/Media';

const ConsultingListItem = ({onClick, ID, title, status }) => (
  <ListGroup.Item action key={ID}>
  <Media>
    <img
      width={100}
      height={100}
      className="mr-3"
      src="placeholder.png"
      alt="consultoria"
    />
    <Media.Body>
      <h3>{title}</h3>
      <ProgressBar now={60} label={'60%'}></ProgressBar>
    </Media.Body>
  </Media>            
            
</ListGroup.Item>  
)

/**
 * Faltan propTypes
 */

 export default ConsultingListItem