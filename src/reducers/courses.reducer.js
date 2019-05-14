import { coursesConstants } from '../constants'

export function courses(state={
    isFetching: false,
    didInvalidate: false, 
    items: []
  }, action) {
    switch (action.type) {
      case coursesConstants.ZUBI_GETALL_COURSES_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case coursesConstants.ZUBI_GETALL_COURSES_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          items: action.courses,
          lastUpdated: action.receivedAt
        })
      case coursesConstants.ZUBI_GETALL_COURSES_FAILURE:
        return Object.assign({}, state, {
          error: action.error
        })
      default:
        return state      
    }
  }