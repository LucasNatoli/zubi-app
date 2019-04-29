import React from 'react';
import PropTypes from 'prop-types';
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

 export default ConsultingListItem