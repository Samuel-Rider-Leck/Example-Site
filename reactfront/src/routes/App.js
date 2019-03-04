import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Main from 'routes/main'
import About from 'routes/about'
import Contact from 'routes/contact'
import Product from 'routes/product'
import FAQ from 'routes/faq'
import Blog from 'routes/blog'
import Page404 from 'routes/page404'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={FAQ} />
        <Route path="/blog" component={Blog} />
        <Route path="/product" component={Product} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default App;
