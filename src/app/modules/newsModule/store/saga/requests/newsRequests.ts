
import axios from "@services/axiosService";
import { ApiNewsModuleEnum } from "@modules/newsModule/enums/apiEnum";

/**
 * fetch pokemon
 * @param limit - number of records to return
 * @param offset - number of records to skip
 * @returns Promise<Array<Object>>
 */
export function requestGetNews(): Promise<any> {
    return axios.get(ApiNewsModuleEnum.NEWS)
}
