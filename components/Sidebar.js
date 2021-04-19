import WG_Category from '../components/widgets/WG-Category'

/**
 * Sidebar 
 */

const Sidebar = ( props, content ) => {

  return <div className="sidebar">
    <div className="widget-container">
      <WG_Category />
    </div>
  </div>
}

export default Sidebar