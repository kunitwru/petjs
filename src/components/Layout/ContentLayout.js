import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home'
import Videos from "../Videos";
import Images from "../Images";
import Contact from "../Contact";

export default class ContentLayout extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={Home} />
          <Route path="/video" component={Videos} />
          <Route path="/image" component={Images} />
          <Route path="/contact" component={Contact} />
      </div>
    )
  }
}
