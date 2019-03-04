import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Main from 'routes/main'
import About from 'routes/about'
import Contact from 'routes/contact'
import FAQ from 'routes/faq'
import Testimonials from 'routes/testimonials'
import Blog from 'routes/blog'
import Product from 'routes/product'
import Page404 from 'routes/page404'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route path="/blog" component={Blog} />
        <Route path="/product" component={Product} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default App;
