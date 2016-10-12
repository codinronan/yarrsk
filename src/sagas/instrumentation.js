import { take, select } from 'redux-saga/effects';

export default function* watchAll() {
  while(true) { //eslint-disable-line no-constant-condition
    const action = yield take('*');
    // Let the take execute and restart the loop, but don't do anything with it if testing or in production.
    if (process.env.NODE_ENV === 'development') {
      console.log('action', action); //eslint-disable-line no-console
      const state = yield select((state) => state);
      console.log('state after', state); //eslint-disable-line no-console
    }
  }
}
