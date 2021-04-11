import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * Header JS
 */

const Header = ( props, content ) => {
  const router = useRouter();
  const [ menu, setMemu ] = useState( [
    {
      name: 'Trang Chủ',
      link: '/'
    },
    {
      name: 'Bài Viết',
      link: '/blog'
    },
    {
      name: 'Giới Thiệu',
      link: '/about-us'
    },
    {
      name: 'Liên Hệ',
      link: '/contact'
    }
  ] )

  return <header id="header" className="header-top">
    <div className="site-container-full">
      <div className="header-summary">
        <div className="header-summary__site-brand">
          <a href="/">YMX...</a>
        </div>
        <div className="header-summary__site-nav">
          <nav>
            <ul className="menu">
              {
                menu.length && 
                menu.map( item => (
                  <li className={ [ 'menu-item', (router.pathname == item.link ? 'menu-item__active' : '') ].join( ' ' ) } key={ item.name }>
                    <Link href={ item.link }>
                      <a>{ item.name }</a>
                    </Link>
                  </li>
                ) )
              }
            </ul>
          </nav>
        </div>
        <div className="header-summary__site-tools">
          Search
        </div>
      </div>
    </div>
  </header>
}

export default Header