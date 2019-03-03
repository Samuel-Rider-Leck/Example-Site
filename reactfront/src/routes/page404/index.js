import React from 'react';

import Footer from 'components/footer'
import Header from 'components/header'
import Sitelinks from 'components/sitelinks'

class Page404 extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div>
          Whoops, we couldn't find that page on Example Site!
        </div>
        <Sitelinks />
        <Footer />
      </div>
    )
  }
}

export default Page404;