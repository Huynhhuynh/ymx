import Head from 'next/head'
import Link from 'next/link'
import { GetAllPostsSlug, GetPost } from '../../lib/api'

/**
 * Single blog 
 */

export default function SingleBlog( { post } ) {

  return (
    <>
      <Head>
        <title>{ `${ post.title } | YMX Blog` }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="site-container">
        <Link href="/">
          <a className="back-to-url">🏠 — Back to home</a>
        </Link>
        <article className="post-single-entry">
          <div className="heading">
            <div className="post-thumb">
              <img src={ post.coverImage.url } alt={ post.title } />
            </div>
            <div className="post-meta">
              <div className="create-date">Post date: { post.date }</div>
              <div className="post-tags">Tags: { post.tags.join( ', ' ) }</div>
              <div className="post-author">Author: { post.author.name }</div>
            </div>
            <h1 className="post-title">{ post.title }</h1>
          </div>
          <div class="post-content" dangerouslySetInnerHTML={ { __html: post.content.html } }></div>
        </article>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const { posts } = await GetAllPostsSlug()
  return {
    paths: posts.map( p => `/blog/${ p.slug }` ) || [],
    fallback: true,
  }
}

export async function getStaticProps( { params } ) {
  const { values } = await GetPost( params.slug )
  return {
    props: {
      post: values
    }
  }
}