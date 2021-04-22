import { useAppContext } from '../context/state'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import Welcome from '../components/Welcome'
import { GetPosts, GetCategories } from '../lib/api'

export default function Home( { posts, sidebarData } ) {

  return (
    <>
      <Head>
        <title>YMX - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="site-container">
        <Welcome heading="Yêu Màu Xanh Blog" imageUrl="https://i.pinimg.com/564x/d2/7e/4f/d27e4f883feca68b449fa9b2b311071d.jpg" buttonText="Xem Thêm" buttonLink="#">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Welcome>
        <div className="site-main-summary">
          <div className="articles-container">
            {
              posts &&
              <Posts posts={ posts } />
            }
          </div>
          <Sidebar value={ sidebarData } />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const Posts = await GetPosts( { first: 25, skip: 0, stage: "DRAFT", where : { "AND": [] }, orderBy: null, locales: null } )
  const Cats = await GetCategories()

  return {
    props: {
      posts: Posts.page,
      sidebarData: {
        categories: Cats?.page?.edges
      }
    }
  }
}