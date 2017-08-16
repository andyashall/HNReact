import React, { Component } from 'react'
import axios from 'axios'

import Post from '../../components/post'

const style = {
  container: {
    backgroundColor: '#fff',
    minHeight: 'calc(100vh - 2.75rem)',
    position: 'relative',
    marginTop: '2.75rem',
    left: '50%',
    width: '800px',
    transform: 'translateX(-50%)',
    borderLeft: '1px solid rgba(0,0,0,.05)',
    borderRight: '1px solid rgba(0,0,0,.05)'
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {a: 1}
  }
  componentDidMount() {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then((res) => { this.setState({posts: res.data, fetched: true}) })
    .catch((err) => {console.log(err)})
  }
  render () {
    let posts = <div style={{textAlign: 'center', paddingTop: '1rem'}}>Loading...</div>
    if (this.state.fetched) {
      posts = <span>
                {this.state.posts.map((post, i) => {
                  return <Post key={post} pid={post} i={i+1} />
                })}
              </span>
    }
    return(
      <div style={style.container}>
        {posts}
      </div>
    )
  }
} 