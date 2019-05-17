import React from 'react'
import CoursesList from './CoursesList'

const data = [
  {
    id: 1,
    course_title: 'Capacitacion 1',
    course_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    course_type: 'Capacitacion',
    course_status: "pending",
    course_progress: "100"
  },
  {
    id: 2,
    course_title: 'Capacitacion 1',
    course_content: "Ant Design, a design language for background applications, is refined by Ant UED Team", 
    course_type: 'Consultoria',
    course_status: "approved",
    course_progress: "80"
  },
  {
    id: 3,
    course_title: 'Consultoria 3',
    course_content: "Ant Design, a design language for background applications, is refined by Ant UED Team", 
    course_type: 'Consultoria',
    course_status: "draft",
    course_progress: "10"
  },
  {
    id: 4,
    course_title: 'Capacitacion 4',
    course_content: "Ant Design, a design language for background applications, is refined by Ant UED Team", 
    course_type: 'Consultoria',
    course_status: "published",
    course_progress: "70"
  },
  {
    id: 5,
    course_title: 'Capacitacion 5',
    course_content: "Ant Design, a design language for background applications, is refined by Ant UED Team", 
    course_type: 'Consultoria',
    course_status: "published",
    course_progress: "100"
  },
  {
    id: 6,
    course_title: 'Capacitacion 4',
    course_content: "Ant Design, a design language for background applications, is refined by Ant UED Team", 
    course_type: 'Consultoria',
    course_status: "published",
    course_progress: "0"
  },
  {
    id: 7,
    course_title: 'Capacitacion 4',
    course_content: "Ant Design, a design language for background applications, is refined by Ant UED Team", 
    course_type: 'Consultoria',
    course_status: "published",
    course_progress: "0"
  }
];

class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.onCourseClick = this.onCourseClick.bind(this)
  }
  onCourseClick(id) {
    console.log(id)
  }
  render() {
    const { courses } = this.props
    return (
      <div>
        <h1>Cursos</h1>
        <CoursesList courses={courses.items} onCourseClick={this.onCourseClick}></CoursesList>
      </div>
    )}      
  }


export default Courses

