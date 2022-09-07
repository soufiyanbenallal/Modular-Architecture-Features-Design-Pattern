import { call, put } from "redux-saga/effects";
import { requestGetNewsEverything } from "@modules/newsModule/store/saga/requests/newsRequests";
import { getNewsFailure, getNewsSuccess } from "@modules/newsModule/store/slices/newsSlice";
import { IQueryParams } from "@modules/newsModule/interfaces/paramsInterface";
import { IEndpointCallNews } from "@modules/newsModule/interfaces/endpointInterface";
import { IErrorEvent } from "@shared/interfaces/errors/errorsInterface";
import { errorResponseTransformer } from "@shared/helpers/errors/errorResponseTransformer";

/**
 * handle news request saga
 */

export function* handleGetNewsList(params: IQueryParams= {} ) {
  try {
    const res: {data: IEndpointCallNews} = yield call(({payload}) => requestGetNewsEverything(payload), params);
    yield put(getNewsSuccess(res.data));
  } catch (error) {
    const errorParsed = errorResponseTransformer(error as unknown as IErrorEvent)
    yield put(getNewsFailure(errorParsed));
  }
}