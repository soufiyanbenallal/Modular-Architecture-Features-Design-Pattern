import { call, put } from "redux-saga/effects";
import { requestGetNews } from "../requests/newsRequests";
import { getNewsFailure, getNewsSuccess } from "../../slices/newsSlice";

/**
 * handle news request saga
 */

export function* handleGetNewsList(): Generator<any, any, unknown> {
  try {
    const res = yield call(requestGetNews);
    yield put(getNewsSuccess(res));
  } catch (error) {
    yield put(getNewsFailure(error));
  }
}