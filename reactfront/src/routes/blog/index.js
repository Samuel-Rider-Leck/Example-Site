import React from 'react'
import {Switch, Route} from 'react-router'

import Page404 from 'routes/page404'

import Category from './category'
import Post from './post'

class Product extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/blog/categories" component={Category} />
        <Route exact path="/blog/post/:id" component={Post} />
        <Route component={Page404} />
      </Switch>
    )
  }
}

export default Product