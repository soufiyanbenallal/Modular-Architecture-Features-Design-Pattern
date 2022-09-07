import { IEndpointCallNews } from '@modules/newsModule/interfaces/endpointInterface'
import { INewsState } from '@modules/newsModule/interfaces/newsInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IErrorResponse } from '@shared/interfaces/errors/errorsInterface'


export const initialState: INewsState = {
  loading: false,
  error: null,
  data: {},
}

// A slice for news with our 3 reducers
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // start loading and trigger saga to get news
    getNews: (state, action) => {
      state.loading = true
    },

    // successed fetching news
    getNewsSuccess: (state, { payload }: PayloadAction<IEndpointCallNews>) => {
      state.data = payload
      state.loading = false
      state.error = null
    },

    // i use any because i dont know the type of error will return from the request
    getNewsFailure: (state, { payload }: PayloadAction<IErrorResponse>) => {
      state.loading = false
      state.error = payload
    }
  },

})

// Three actions generated from the slice
export const { getNews, getNewsSuccess, getNewsFailure } = newsSlice.actions

// the selectore 
export const newsSelector = ({news}: {news: INewsState}) => news

// The reducer 
export default newsSlice.reducer