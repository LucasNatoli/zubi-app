import React from 'react'
import { Link } from 'react-router-dom'
import { List, Icon, Progress } from 'antd'
import './Courses.css'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const CoursesList = ({ courses, onCourseClick }) => (

  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={courses}
    renderItem={course => (
      <List.Item key={course.id}
        actions={[
          <Link href="/editar-consultoria" to="editar-consultoria" onClick={() => onCourseClick(course.id)} {...course}>
            <IconText type="star-o" text="156" /></Link>, 
          <IconText type="like-o" text="156" />, 
          <IconText type="message" text="2" />]}
        extra={
          <div>
            <div class="image-placeholder">
              <h4>Upload an Image</h4>
            </div>
          </div>
        }
      >

        <List.Item.Meta
          title={course.course_title + " (" + course.course_type + ")"}
          description={course.course_content}
        />
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#fc6a42',
          }}
          percent={course.course_progress}
        />
      </List.Item>
    )}
  />
)
/* 
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
} */

export default CoursesList