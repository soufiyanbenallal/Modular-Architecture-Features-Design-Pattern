import React from 'react'
import { IErrorResponse } from '@shared/interfaces/errors/errorsInterface'

export default function ErrorStateComponent({code, message, status, statusCode}:IErrorResponse) {
  return (
    <section className="max-w-lg px-4 py-20 mx-auto space-y-1 text-center">
        <h2 className="text-lg font-medium text-gray-800">{code}</h2>
        <p className="text-gray-600">
        {message}
        </p>
    </section>
  )
}
