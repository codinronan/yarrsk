import { fork } from 'redux-saga/effects';
import instrumentation from './instrumentation';

export default function* root() {
  yield [
    fork(instrumentation),
  ];
}
