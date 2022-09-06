import { takeLatest } from "redux-saga/effects";
import { handleGetNewsList } from "./handlers/newsHandler";
import { getNews } from "../slices/newsSlice";

export function* workerSaga() {
  yield takeLatest(getNews.type as any , handleGetNewsList);
}