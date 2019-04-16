import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ConsultingListItem from './ConsultingListItem'

const ConsultingList = ({consulting, onConsultingClick}) => (
  <ListGroup>
    {consulting.map(consultancy => 
      <ConsultingListItem
        key={consultancy.ID}
        {...consultancy}
        onClick={()=> onConsultingClick(consultancy.ID)}
      />
    )}
  </ListGroup>
)