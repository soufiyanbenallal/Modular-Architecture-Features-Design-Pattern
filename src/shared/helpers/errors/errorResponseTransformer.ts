import { IErrorEvent, IErrorResponse } from "@shared/interfaces/errors/errorsInterface";

export function errorResponseTransformer(err: IErrorEvent): IErrorResponse{
    return {
        statusCode: err.response.status,
        code: err.response.data.code,
        message: err.response.data.message,
        status: err.response.data.status
    }
}