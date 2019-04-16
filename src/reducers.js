import { combineReducers } from 'redux';
import { ADD_CONSULTING, SET_CONSULTING_FILTER, ConsultingFilters } from './actions'
const { SHOW_ALL_CONSULTING } = ConsultingFilters

function consultingFilter(state = SHOW_ALL_CONSULTING, action) {
  switch (action.type) {
    case SET_CONSULTING_FILTER:
      return action.ConsultingFilter
    default:
      return state
  }
}

function consulting(state= [], action) {
  switch (action.type) {
    case ADD_CONSULTING:
      return [
        ...state,
        {
          title: action.title,
          status: 'draft'
        }
      ]
    default:
      return state
  }
}

const zubiInstructoApp = combineReducers({
  consultingFilter,
  consulting
})

export default zubiInstructoApp