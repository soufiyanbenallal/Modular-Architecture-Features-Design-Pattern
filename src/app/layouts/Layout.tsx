import React from 'react'
import Footer from '@layouts/footer/Footer'
import Header from '@layouts/header/Header'

export default function Layout({children}: any) {
  return (
    <>
        <Header></Header>
        <div>{children}</div>
        <Footer></Footer>
    </>
  )
}
