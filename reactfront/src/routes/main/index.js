import React from 'react';

import Footer from 'components/footer'
import Header from 'components/header'
import Sitelinks from 'components/sitelinks'

class Main extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div>
          <img alt="Main background"></img>
          <h1>Example Product Main Page</h1>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit tincidunt turpis. Donec volutpat volutpat lorem nec consectetur. Quisque condimentum accumsan pellentesque. Nulla ligula erat, finibus eleifend nunc ut, lacinia placerat metus. Vestibulum quis feugiat lorem. Duis facilisis tellus sed mollis interdum. Ut viverra facilisis risus in condimentum. Phasellus tincidunt, lacus ac imperdiet congue, erat dui facilisis orci, vitae tristique ante lectus at risus. Nunc ut luctus orci.
          </div>
        </div>
        <div>
          <h2>Product Line Description</h2>
          <img alt="Small Icon 1"></img>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit tincidunt turpis.</div>
          <img alt="Small Icon 2"></img>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl nisi, eleifend vel nisl eu, scelerisque varius metus.</div>
          <img alt="Small Icon 3"></img>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac purus ultrices, ultrices velit nec, dictum metus.</div>
        </div>
        <div>
          <h3>Feature 1</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl nisi, eleifend vel nisl eu, scelerisque varius metus. Mauris fermentum dolor quis leo scelerisque varius in sed risus. In aliquet massa eget ipsum volutpat rhoncus. Ut vulputate non nisl ac varius. Etiam egestas, urna nec convallis rutrum, velit dui dictum felis, ut tempus dolor dui vitae mauris. Mauris posuere in eros nec rhoncus. Vivamus efficitur tempor tellus, in lacinia elit tincidunt volutpat. Phasellus porttitor turpis at tempus aliquam. Nullam aliquet sagittis nunc et blandit. Maecenas elementum elit id felis iaculis vehicula. Pellentesque mattis diam quis tincidunt pretium. Nunc at felis sem. In eu diam venenatis, aliquam massa eu, facilisis erat.</div>
          <img alt="Highlight 1"></img>
        </div>
        <div>
          <img alt="Highlight 2"></img>
          <h3>Feature 2</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac purus ultrices, ultrices velit nec, dictum metus. Donec semper sem in sapien laoreet, sed aliquam risus aliquet. Phasellus non arcu non est posuere suscipit in ac tellus. Aliquam nec lectus hendrerit, volutpat nisl sed, rhoncus neque. Mauris accumsan ipsum id leo molestie, at posuere ligula volutpat. Aliquam non purus a lectus efficitur congue a in diam. Duis id justo ut felis egestas pretium. Morbi dignissim neque sed velit porttitor pellentesque. Donec suscipit, sapien ac tristique dictum, velit ex eleifend odio, in ullamcorper justo dolor sed turpis. Sed sed pulvinar dui. Suspendisse scelerisque ante vel faucibus condimentum. Maecenas pulvinar neque lectus, vel elementum ligula venenatis in. Morbi bibendum ante et purus consequat dictum.</div>
        </div>
        <Sitelinks />
        <Footer />
      </div>
    )
  }
}

export default Main;