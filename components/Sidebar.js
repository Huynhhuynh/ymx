import WG_Category from '../components/widgets/WG-Category'

/**
 * Sidebar 
 */

const Sidebar = ( props, content ) => {
  const { categories } = props.value
  
  return <div className="sidebar">
    <div className="widget-container">
      <WG_Category value={ categories } />
    </div>
  </div>
}

export default Sidebar