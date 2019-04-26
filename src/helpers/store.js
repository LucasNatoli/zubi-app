import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
<<<<<<< HEAD
import reducers from '../reducers';
import { loadState, saveState } from './persistent-state'

const initialState  = loadState()
export const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
        thunkMiddleware
    )
);

store.subscribe ( () => {
    saveState(store.getState())
})
=======
//import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

//const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
  //      loggerMiddleware
    )
);
>>>>>>> master
