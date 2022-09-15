import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../Models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess
} from "../../Actions/PostsActions/postsActions";
import { postTypes } from "../../ActionTypes/postsTypes";
import { FetchPostsSuccessResponse } from "../../Types/types";

const getPosts = () =>
  axios.get<IPost[]>("https://jsonplaceholder.typicode.com/todos");

function* fetchPostsSaga() {
  try {
    const response: FetchPostsSuccessResponse = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response.data
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
