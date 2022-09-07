export interface IErrorEvent {
    response: {
      data: {
        status: string,
        code: string,
        message: string
      },
      status: number
    }
}
export interface IErrorResponse{
    status: string,
    code: string,
    message: string,
    statusCode: number
}