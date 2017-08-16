import React from 'react'
import { Route } from 'react-router'

import Header from './containers/header'
import Home from './containers/home'
import About from './containers/about'

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
        <Route path="/about" component={About} />
      </div>
    )
  }
}
