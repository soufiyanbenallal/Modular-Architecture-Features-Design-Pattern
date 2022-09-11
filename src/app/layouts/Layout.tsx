import React from 'react'
import Footer from '@layouts/footer/Footer'
import Header from '@layouts/header/Header'

export default function Layout({children}: any) {
  return (
    <main className="dark:bg-gray-800 font-mono bg-white relative">
        <Header />
        <div>{children}</div>
        <Footer />
    </main>
  )
}
