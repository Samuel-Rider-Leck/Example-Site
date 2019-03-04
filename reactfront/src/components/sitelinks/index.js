import React from 'react'
import { Link } from 'react-router-dom'

class SiteLinks extends React.Component {
  render() {
    return(
      <div>
        <h2>Site Links</h2>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Link 4</Link>
      </div>
    )
  }
}

export default SiteLinks;