/**
 * Header JS
 */

const Header = ( props, content ) => {

  return <header id="header" className="header-top">
    <div className="site-container">
      <div className="header-summary">
        <div className="header-summary__site-brand">
          <a href="/">Brand...</a>
        </div>
        <div className="header-summary__site-nav">
          <nav>
            <ul>
              <li>Hello...</li>
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