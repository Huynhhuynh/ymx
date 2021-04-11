import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import Welcome from '../components/Welcome'

import { Request } from '../lib/api'

export default function Home( { posts } ) {
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
            <Posts posts={ posts } />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const query = `query content_view_10e288b277ac4150890da279d16ae8ff($first: Int, $skip: Int, $stage: Stage!, $where: PostWhereInput, $orderBy: PostOrderByInput) {
    page: postsConnection(first: $first, skip: $skip, stage: $stage, where: $where, orderBy: $orderBy) {
      edges {
        node {
          id
          stage
          updatedAt
          author {
            entryId: id
            name
          }
          coverImage {
            id
            handle
            fileName
            mimeType
            url
          }
          createdAt
          date
          id
          publishedAt
          publishedBy {
            entryId: id
            name
          }
          seo {
            entryId: id
            title
          }
          slug
          tags
          title
          updatedAt
          createdBy {
            entryId: id
            name
            picture
            kind
          }
          updatedBy {
            entryId: id
            name
            picture
            kind
          }
          documentInStages(includeCurrent: true) {
            id
            stage
            updatedAt
            publishedAt
          }
          content {
            html
          }
          excerpt
        }
      }
      aggregate {
        count
      }
    }
  }
  ` 

  const variables = {
    first: 25,
    skip: 0,
    stage: "DRAFT",
    where : { "AND": [] },
    orderBy: null,
    locales: null
  }
  
  const { page } = await Request( query, variables )

  return {
    props: {
      posts: page
    }
  }
}