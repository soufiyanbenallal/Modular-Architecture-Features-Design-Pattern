import React, { ReactElement, ReactNode } from 'react'
import Footer from '@layouts/footer/Footer'
import Header from '@layouts/header/Header'
import { BaseProps } from '@shared/interfaces'

export default function Layout({children}: BaseProps): ReactElement{
  return (
    <main className="dark:bg-gray-800 font-mono bg-white relative">
        <Header />
        <div>{children}</div>
        <Footer />
    </main>
  )
}