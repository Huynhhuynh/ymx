import Link from 'next/link'
import { useState, useEffect } from 'react' 
import { GetCategories } from '../../lib/api'

/* 
 * Widget Category
 */

export default function WG_Category () {
  const [ categories, setCategories ] = useState( null )

  useEffect( async () => {
    const Cats = await GetCategories()
    setCategories( {
      edges: Cats?.page?.edges
    } )
  } )

  return (
    <div className="widget wg-categories">
      <h2 className="widget__title">Categories</h2>
      {
        categories && categories.edges &&
        categories.edges.map( ( cat ) => {
          return (
            <div className="" key={ cat.node.id } >
              <h4>
                <Link href={ `/category/${ cat.node.slug }` } >{ cat.node.title }</Link>
              </h4>
            </div>
          )
        } )
      }
    </div>
  )
}