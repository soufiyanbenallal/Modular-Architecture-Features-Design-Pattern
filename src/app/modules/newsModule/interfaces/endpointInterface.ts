import { IArticle } from "./newsInterface";

export interface IEndpointCallNews {
    status: string,
    totalResults: number,
    articles: IArticle[]
}