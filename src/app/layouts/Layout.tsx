import React, { ReactElement, ReactNode } from 'react'
import Footer from '@layouts/footer/Footer'
import Header from '@layouts/header/Header'
import { BaseProps } from '@shared/interfaces'

export default function Layout({children}: BaseProps): ReactElement{
  return (
    <main className="bg-primary-3 font-mono relative">
        <Header />
        <div>{children}</div>
        <Footer />
    </main>
  )
}