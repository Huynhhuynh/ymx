import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
/**
 * Search page 
 */

export default function Search() {
  const router = useRouter()
  const { s } = router?.query
  const [ searchValue, setSearchValue ] = useState( '' )
  const [ posts, setPosts ] = useState( [] )

  useEffect( () => {
    setSearchValue( s )
  }, [ s ] )

  return (
    <>
      <Head>
        <title>YMX - Tìm kiếm với từ khóa: { searchValue }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="site-container">
        Tìm kiếm với từ khóa: <strong>{ searchValue }</strong>
      </div>
    </>
  )
}