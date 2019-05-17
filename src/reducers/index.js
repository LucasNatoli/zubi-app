import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { capacitaciones, consulting } from  './zubi.reducer';
import { courses } from './courses.reducer';
import { agenda } from './agenda.reducers'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  capacitaciones, 
  consulting,
  courses,
  agenda
});

export default rootReducer;