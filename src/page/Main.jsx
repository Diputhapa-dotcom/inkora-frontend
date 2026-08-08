import React from 'react'
import Layout from '../component/Layout'
import Blog from './Blog'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <Layout>

        <Link to="/blog/id">
            <Blog/>
            <Blog/>
            <Blog/>
        </Link>

    </Layout>
    </>
  )
}

export default Main