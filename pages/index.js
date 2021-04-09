import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>YMX - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="site-container">
        <div className="articles-container">
          Articles...
        </div>
        <Sidebar />
      </div>
    </>
  )
}
