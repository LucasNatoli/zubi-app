import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
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