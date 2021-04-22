import Link from 'next/link'

/* 
 * Widget Category
 */

export default function WG_Category ( { value } ) {
  const categories = [...value]
  
  return (
    <div className="widget wg-categories">
      <h2 className="widget__title">Categories</h2>
      <div className="widget__entry wg-categories-content">
        {
          categories && 
          categories.map( ( cat ) => {
            let thumbnail = cat?.node?.image?.url || 'http://sog.ueh.edu.vn/wp-content/themes/namtech.io2/assets/images/default/noimage.png'
            let postCount = cat.node.posts.length ? `<sup>${ cat.node.posts.length }</sup>` : ''
            return (
              <div className="cat-item" key={ cat.node.id } >
                <div className="cat-item__thumbnail" style={ { '--cat-color': cat?.node?.color?.hex } }>
                  <img src={ thumbnail } alt={ cat.node.title }/>
                </div>
                <div className="cat-item__entry">
                  <h4>
                    <Link href={ `/category/${ cat.node.slug }` } >
                      <a style={ { '--cat-color': cat?.node?.color?.hex } } dangerouslySetInnerHTML={{__html: `${ cat.node.title } ${ postCount }`}} ></a>
                    </Link>
                  </h4>
                </div>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}