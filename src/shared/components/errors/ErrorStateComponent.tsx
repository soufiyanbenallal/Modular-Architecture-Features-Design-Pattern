import React from 'react'
import { IErrorResponse } from '@shared/interfaces/errors/errorsInterface'

export default function ErrorStateComponent({code, message, status, statusCode}:IErrorResponse) {
  return (
    <div>
        <h1>{code}</h1>
        <p>{message}</p>
    </div>
  )
}
