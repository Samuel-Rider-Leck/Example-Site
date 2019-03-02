import React from 'react';

import Footer from 'components/footer'

class Main extends React.Component {
  render() {
    return(
      <div>
        <nav>
          <img alt="Example Site"></img>
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
          <a href="/">Link 3</a>
          <a href="/">Link 4</a>
          <a href="/">Action Button</a>
        </nav>
        <div>
          Lorum ipsum
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;