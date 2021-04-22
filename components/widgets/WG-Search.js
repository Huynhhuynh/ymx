import { useState, useEffect } from 'react' 
import { useRouter } from 'next/router'

/**
 * Widget Search
 */

export default function WG_Search( {} ) {
  const router = useRouter()
  const { s } = router?.query
  const [ value, setValue ] = useState( '' ) 

  useEffect( () => {
    if( s ) setValue( s )
  }, [ s ] )

  const onSubmit = ( e ) => {
    e.preventDefault()

    if( value.trim() )
      router.push( `/search?s=${ value }` )
  }

  return (
    <div className="widget wg-search">
      <form className="form" id="search-form" onSubmit={ onSubmit }>
        <input className="search-field" type="search" placeholder="Tìm bài viết..." value={ value } onChange={ e => {
          setValue( e.target.value )
        } } />
        <button className="button-submit" type="submit">Submit</button>
      </form>
    </div>
  )
}