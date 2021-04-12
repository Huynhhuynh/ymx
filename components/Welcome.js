import { motion } from 'framer-motion'
/**
 * Welcome
 */

const Welcome = ( { heading, imageUrl, buttonText, buttonLink, children } ) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={variants} 
      className="welcome">
      <div className="welcome__entry">
        <h1 className="text-heading">{ heading }</h1>
        <div className="text-entry">{ children }</div>
        <a className="button" href={ buttonLink }>{ buttonText }</a>
      </div>
      <div className="welcome__image">
        <img src={ imageUrl } alt={ heading } />
      </div>
    </motion.div>
  )
}

export default Welcome