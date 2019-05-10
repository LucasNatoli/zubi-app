import React from 'react'
import ConsultingList from './ConsultingList'

const data = [
  {
    id: 1, 
    post_title: 'Consultoria 1',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team"
  },
  {
    id: 2,
    post_title: 'Consultoria 2',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team"
  },
  {
    id: 3,
    post_title: 'Consultoria 3',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team"
  },
  {
    id: 4,
    post_title: 'Consultoria 4',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team"
  },
];

class Consulting extends React.Component {
  constructor(props) {
    super(props)
    this.onConsultancyClick = this.onConsultancyClick.bind(this)
  }
  onConsultancyClick(id) {
    console.log(id)
  }
  render() {
    return (
      <div>
        <h1>Consulting</h1>
        <ConsultingList consulting={data} onConsultancyClick={this.onConsultancyClick}></ConsultingList>
      </div>
    )}      
  }


export default Consulting

