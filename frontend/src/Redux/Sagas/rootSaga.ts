import { all, fork } from "redux-saga/effects";
import postsSaga from "./PostsSaga/postsSaga";

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
