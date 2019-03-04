import React from 'react'

import Footer from 'components/footer'
import Header from 'components/header'
import Sitelinks from 'components/sitelinks'

class Category extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>Product Type</h1>
          <img alt="Product Header"></img>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <button type="checkbox"></button>
                <p>Product Subtype 1</p>
              </li>
              <li>
                <button type="checkbox"></button>
                <p>Product Subtype 2</p>
              </li>
              <li>
                <button type="checkbox"></button>
                <p>Product Subtype 3</p>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <img alt="Product 1"></img>
              <h3>Product 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img alt="Product 2"></img>
              <h3>Product 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img alt="Product 3"></img>
              <h3>Product 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img alt="Product 4"></img>
              <h3>Product 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img alt="Product 5"></img>
              <h3>Product 5</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img alt="Product 6"></img>
              <h3>Product 6</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img alt="Product 7"></img>
              <h3>Product 7</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <Sitelinks />
        <Footer />
      </div>
    )
  }
}

export default Category