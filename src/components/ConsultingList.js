import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ConsultingListItem from './ConsultingListItem'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
const ConsultingList = ({consulting, onConsultingClick}) => (
  <ListGroup>
    {consulting.map(consultancy => 
      <ListGroupItem
        key={consultancy.ID}
        {...consultancy}
        onClick={()=> onConsultingClick(consultancy.ID)}
      />
    )}
  </ListGroup>
)