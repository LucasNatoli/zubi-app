/*
 * tipos de acciones
 */

export const ADD_CONSULTING = 'ADD_CONSULTING'
export const ADD_COURSE = 'ADD_COURSE'
export const SET_CONSULTING_FILTER = 'SET_CONSULTING_FILTER'
export const SET_COURSES_FILTER = 'SET_COURSES_FILTER'

/*
 * otras constantes
 */

export const ConsultingFilters = {
  SHOW_ALL_CONSULTING: 'SHOW_ALL_CONSULTING',
  SHOW_PENDING_CONSULTING: 'SHOW_PENDING_CONSULTING',
  SHOW_PUBLISHED_CONSULTING: 'SHOW_PUBLISHED_CONSULTING'
}

export const CoursesFilters = {
  SHOW_ALL_COURSES: 'SHOW_ALL_COURSES',
  SHOW_PENDING_COURSES: 'SHOW_PENDING_COURSES',
  SHOW_PUBLISHED_COURSES: 'SHOW_PUBLISHED_COURSES'
}

/*
 * creadores de acciones
 */

export function addConsulting(title) {
  return {type: ADD_CONSULTING, title}
}

export function addCourse(title) {
  return {type: ADD_COURSE, title}
}

export function setConsultingFilter(filter) {
  return { type: SET_CONSULTING_FILTER, filter }
}

export function setCourseFilter(filter) {
  return { type: SET_COURSES_FILTER, filter }
}