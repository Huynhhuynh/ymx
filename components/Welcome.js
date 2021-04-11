/**
 * Welcome
 */

const Welcome = ( { heading, imageUrl, buttonText, buttonLink, children } ) => {

  return (
    <div className="welcome">
      <div className="welcome__entry">
        <h1 className="text-heading">{ heading }</h1>
        <div className="text-entry">{ children }</div>
        <a className="button" href={ buttonLink }>{ buttonText }</a>
      </div>
      <div className="welcome__image">
        <img src={ imageUrl } alt={ heading } />
      </div>
    </div>
  )
}

export default Welcome