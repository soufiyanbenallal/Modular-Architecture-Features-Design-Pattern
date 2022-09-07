import { IErrorResponse } from "../errors/errorsInterface";

export interface IBasicState{
    loading: boolean;
    error: IErrorResponse | null;
}
