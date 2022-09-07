
import axios from "@services/axiosService";
import { ApiNewsModuleEnum } from "@modules/newsModule/enums/apiEnum";
import { IQueryParams } from "@modules/newsModule/interfaces/paramsInterface";
import { IEndpointCallNews } from "@modules/newsModule/interfaces/endpointInterface";

/**
 * fetch news by everthing and query search 
 * @param {IQueryParams} params - handle data size anf filters
 * @returns Promise<Array<Object>>
 */
export function requestGetNewsEverything(params: IQueryParams): Promise<IEndpointCallNews> {
    return axios.get(ApiNewsModuleEnum.EVERYTHING, {
        params
    })
}

/**
 * fetch pokemon
 * fetch news from top headlines
 * @param {IQueryParams} params - handle data size anf filters
 * @returns Promise<Array<Object>>
 */
export function requestGetNewsTopHeadlines(params: IQueryParams): Promise<IEndpointCallNews> {
    return axios.get(ApiNewsModuleEnum.TOP_HEADLINES, {
        params
    })
}

