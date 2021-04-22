import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import WG_Search from './widgets/WG-Search'

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

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return <motion.header 
    id="header" 
    className="header-top">
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
                menu.map( (item, index) => (
                  <motion.li 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ delay: index * .1 }}
                    className={ [ 'menu-item', (router.pathname == item.link ? 'menu-item__active' : '') ].join( ' ' ) } key={ item.name }>
                    <Link href={ item.link }>
                      <a>{ item.name }</a>
                    </Link>
                  </motion.li>
                ) )
              }
            </ul>
          </nav>
        </div>
        <div className="header-summary__site-tools">
          <WG_Search />
        </div>
      </div>
    </div>
  </motion.header>
}

export default Header