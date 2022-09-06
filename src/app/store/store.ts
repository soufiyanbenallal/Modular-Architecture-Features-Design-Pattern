import { combineReducers, configureStore } from '@reduxjs/toolkit'
import newsReducers from '@modules/newsModule/store'
import { workerSaga } from '@modules/newsModule/store/saga/root';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware: any )=>(getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware));
const reducer = combineReducers({
    ...newsReducers
});

export const store = configureStore({
    reducer,
    middleware
});

sagaMiddleware.run(workerSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch