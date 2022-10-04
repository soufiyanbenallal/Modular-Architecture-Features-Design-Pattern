import React from 'react'
import Layout from '@layouts/Layout'
import LatestNewsComponent from './components/latestNewsComponent/LatestNewsComponent'
import HeroComponent from './components/heroComponent/heroComponent'
export default function Index() {
  return (
    <Layout>
        <HeroComponent />
        <LatestNewsComponent />
    </Layout>       
  )
}
