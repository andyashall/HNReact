import React from 'react'
import { Route } from 'react-router'

import Header from './containers/header'
import Home from './containers/home'
import About from './containers/about'
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
        <Route exact path="/" render={()=><Home type="topstories" />} />
        <Route path="/new" render={()=><Home type="newstories" />} />
        <Route path="/best" render={()=><Home type="beststories" />} />
        <Route path="/about" component={About} />
        <Route path="/p/:id" component={Comments} />
      </div>
    )
  }
}
