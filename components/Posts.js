import Link from 'next/link'
/**
 *Posts
 */

const Posts = ( { posts } ) => {

  const { edges, aggregate } = posts
  
  return (
    <div className="posts-loop">
      {
        edges.length && 
        edges.map( post => {
          return (
            <div className={ [ 'post-item' ].join( ' ' ) } key={ post.node.id }>
              <div className="post-item__thumb">
                <Link href={ `/blog/${ post.node.slug }` }>
                  <a><img src={ post.node.coverImage.url } alt={ post.node.title } /></a>
                </Link>
              </div>
              <div className="post-item__entry">
                <div className="post-tags">{
                  post.node.tags && 
                  post.node.tags.map( tag => <div className="tag-item" key={ tag }>{ tag }</div> ) }</div>
                <h2 className="post-title">
                  <Link as={ `/blog/${ post.node.slug }` } href={ `/blog/[slug]` }>
                    <a>{ post.node.title }</a>
                  </Link>
                </h2>
                <div className="short-desc">{ post.node.excerpt }</div>
              </div>
            </div>
          )
        } )
      }
    </div>
  )
}

export default Posts