import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: any = {
  loading: false,
  error: null,
  news: {} as any,
}

// A slice for news with our 3 reducers
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // start loading and trigger saga to get news
    getNews: (state, { payload }) => {
      state.loading = true
    },

    // successed fetching news
    getNewsSuccess: (state, { payload }: PayloadAction<any>) => {
      state.news = payload
      state.loading = false
      state.error = null
    },

    // i use any because i dont know the type of error will return from the request
    getNewsFailure: (state, { payload }: PayloadAction<any>) => {
      state.loading = false
      state.error = payload
    }
  },

})

// Three actions generated from the slice
export const { getNews, getNewsSuccess, getNewsFailure } = newsSlice.actions

// the selectore 
export const newsSelector = (state : any) => state.news

// The reducer 
export default newsSlice.reducer