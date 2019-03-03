import React from 'react'

class Header extends React.Component {
  render() {
    return(
      <nav>
        <img alt="Example Site"></img>
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
        <a href="/">Link 4</a>
        <a href="/">Action Button</a>
      </nav>
    )
  }
}

export default Header;