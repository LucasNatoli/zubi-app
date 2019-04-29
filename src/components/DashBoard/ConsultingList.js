import React from 'react'
import { Layout, Menu, Icon } from 'antd';
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