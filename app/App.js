import React from 'react'
import { Route } from 'react-router'

import Header from './containers/header'
import Home from './containers/home'
import About from './containers/about'
import New from './containers/new'
import Best from './containers/best'
import Comments from './containers/comments'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {a: 1}
  }
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/new" component={New} />
        <Route path="/best" component={Best} />
        <Route path="/about" component={About} />
        <Route path="/p/:id" component={Comments} />
      </div>
    )
  }
}
