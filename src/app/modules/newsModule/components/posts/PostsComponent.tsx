import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { getNews, newsSelector } from '@modules/newsModule/store/slices/newsSlice'
import { IQueryParams } from '@modules/newsModule/interfaces/paramsInterface'
import ErrorStateComponent from '@shared/components/errors/ErrorStateComponent'
import SpinnerComponent from '@shared/components/loading/SpinnerComponent'

export default function PostsComponent() {
    const dispatch = useAppDispatch()
    const {data, error, loading} = useAppSelector(newsSelector)

    useEffect(() => {
        const payload: IQueryParams = {
            pageSize: 10,
            q: "crypto",
        }
      dispatch(getNews(payload))
      console.log({data, error, loading});
    }, [])
    
    if (loading) {
        return <SpinnerComponent />
    }
    if (error) {
        return <ErrorStateComponent {...error} />
    }
    return (
        <div>postsComponent</div>
    )
}
