import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <nav>
        <Link to="/"><img alt="Example Site"></img></Link>
        <Link to="/product/category">Products</Link>
        <Link to="/blog/category">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/">Action Button</Link>
      </nav>
    )
  }
}

export default Header;