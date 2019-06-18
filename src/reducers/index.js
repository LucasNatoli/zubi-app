import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { capacitaciones, consulting, postConsulting, chatApp, drafts } from  './zubi.reducer';
import { courses } from './courses.reducer';
import { agenda } from './agenda.reducers'


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  capacitaciones, 
  consulting,
  postConsulting,
  courses,
  agenda, 
  chatApp,
  drafts
});

export default rootReducer;