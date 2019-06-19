import React from 'react'
import CoursesList from './CoursesList'

class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.onCourseClick = this.onCourseClick.bind(this)
  }
  onCourseClick(id) {
    console.log('course', id)
  }
  render() {
    const { courses } = this.props
    return (
      <div>
        <h1>Borradores</h1>
        <CoursesList courses={courses.items} onCourseClick={this.onCourseClick}></CoursesList>
      </div>
    )}      
  }


export default Courses

