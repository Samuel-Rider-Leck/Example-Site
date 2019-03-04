import React from 'react'
import {Switch, Route} from 'react-router'

import Page404 from 'routes/page404'

import Category from './category'
import Listing from './listing'
import Showcase from './showcase'

class Product extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/product/category" component={Category}/>
        <Route exact path="/product/listing" component={Listing}/>
        <Route exact path="/product/showcase" component={Showcase}/>
        <Route component={Page404}/>
      </Switch>
    )
  }
}

export default Product