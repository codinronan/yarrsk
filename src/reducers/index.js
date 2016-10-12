import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const LOGOUT = { COMPLETED: 'LOGOUT_COMPLETED' };
const moduleReducers = [];

const appReducers = combineReducers({
  routing: routerReducer,
  ...moduleReducers,
});

export default function rootReducer(state, action) {
  let appState = state;
  if (action.type === LOGOUT.COMPLETED) {
    const { routing } = appState;
    appState = { routing };
  }

  return appReducers(appState, action);
}
