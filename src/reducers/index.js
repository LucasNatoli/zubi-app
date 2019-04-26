import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
<<<<<<< HEAD
import { zubi } from  './zubi.reducer';
=======
>>>>>>> master

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
<<<<<<< HEAD
  alert,
  zubi
=======
  alert
>>>>>>> master
});

export default rootReducer;