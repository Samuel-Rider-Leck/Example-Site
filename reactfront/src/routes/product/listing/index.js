import React from 'react'

import Footer from 'components/footer'
import Header from 'components/header'
import Sitelinks from 'components/sitelinks'

class Listing extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Product Name</h1>
        <div>
          <img alt="Product Header"></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum purus diam, placerat blandit sollicitudin quis, hendrerit vel est. Maecenas vitae magna tincidunt, tempus neque at, dignissim metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc maximus scelerisque massa, vel tincidunt ex cursus sed. Vestibulum.</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, mi nec egestas tristique, sapien nisi ultrices diam, et viverra orci quam sit amet metus. In finibus massa a nulla consequat malesuada. Duis at scelerisque dolor. Pellentesque varius at tellus vel pharetra. Nunc vitae magna odio. Fusce dictum imperdiet dapibus. Phasellus porta metus nec lobortis tempor. Morbi egestas, lectus nec tristique aliquam, lacus mauris ullamcorper libero, ut vulputate dolor diam ac sem.<br />
            Donec dolor nunc, semper non nisi sit amet, cursus vulputate mauris. Ut a massa ut eros luctus auctor. Nunc sed vehicula lectus. Aenean bibendum nunc nibh, ut tristique nulla sodales sit amet. Donec eget porttitor risus. Maecenas sit amet accumsan odio. Nulla egestas, leo et vehicula tristique, velit risus fermentum odio, in hendrerit augue mi ut lorem. Quisque pretium, mauris vel finibus elementum, felis nunc volutpat purus, blandit mollis magna nulla vel justo. Nulla vulputate metus laoreet arcu rhoncus euismod in eget erat. Cras volutpat turpis sed interdum volutpat.
          </p>
        </div>
        <div>
          <h2>Similar Products</h2>
          <img alt="Similar Product 1"></img>
          <img alt="Similar Product 2"></img>
          <img alt="Similar Product 3"></img>
        </div>
        <div>
          <h2>Details</h2>
          <p>Product Detail: Ipsum dolor sit amet, adipiscing elit.</p>
          <p>Product Detail: Lorem dolor sit, consectetur adipiscing elit.</p>
          <p>Product Detail: Lorem consectetur.</p>
          <p>Product Detail: Lorem dolor amet, consectetur elit.</p>
          <p>Product Detail: Ipsum dolor dipiscing elit.</p>
          <p>Product Detail: Lorem ipsum dolor sit amet, Adipiscing.</p>
          <p>Product Detail: Lorum amet, consectetur adipiscing.</p>
        </div>
        <Sitelinks />
        <Footer />
      </div>
    )
  }
}

export default Listing