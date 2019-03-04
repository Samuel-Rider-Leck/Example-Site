import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <nav>
        <img alt="Example Site"></img>
        <Link to="/">Link 1</Link>
        <Link to="/">Link 2</Link>
        <Link to="/">Link 3</Link>
        <Link to="/">Link 4</Link>
        <Link to="/">Action Button</Link>
      </nav>
    )
  }
}

export default Header;