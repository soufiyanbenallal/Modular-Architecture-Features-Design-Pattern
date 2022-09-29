import { IBasicState } from "@shared/interfaces/store/reducersInterface"
import { IEndpointCallNews } from "./endpointInterface"

export interface IArticle {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url:string,
    urlToImage:string,
    publishedAt:string,
    content:string
}

export interface INewsState extends IBasicState {
    data: IEndpointCallNews | Record<string, unknown>
}