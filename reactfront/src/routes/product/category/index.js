import React from 'react'

import Footer from 'components/footer'
import Header from 'components/header'
import Sitelinks from 'components/sitelinks'

const category_array = [
  {id:1,name:"Product Subtype 1"},
  {id:2,name:"Product Subtype 2"},
  {id:3,name:"Product Subtype 3"},
  {id:4,name:"Product Subtype 4"}
]

const product_array = [
  {id:1,name:"Product 1",dscr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:2,name:"Product 2",dscr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:3,name:"Product 3",dscr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:4,name:"Product 4",dscr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:5,name:"Product 5",dscr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:6,name:"Product 6",dscr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:7,name:"Product 7",dscr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:8,name:"Product 8",dscr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
]

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
              {category_array.map(
                ({id, name}) =>
                (<li id={id}>
                  <input type="radio" radioGroup="product"></input>
                  <p>{name}</p>
                </li>)
              )}
            </ul>
          </div>
          <div>
            {product_array.map(
              ({id, name, dscr}) => 
              (<div>
                <img alt={id}></img>
                <h3>{name}</h3>
                <p>{dscr}</p>
              </div>)
            )}
          </div>
        </div>
        <Sitelinks />
        <Footer />
      </div>
    )
  }
}

export default Category