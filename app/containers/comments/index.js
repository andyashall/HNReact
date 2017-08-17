import React, { Component } from 'react'
import axios from 'axios'
import ta from 'time-ago'

import Comment from '../../components/comment'

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
  },
  link: {color: '#0070c9', marginTop: '5px', fontSize: '.8rem'}
}

const url_domain = (data) => {
  let    a      = document.createElement('a');
         a.href = data;
  return a.hostname.replace('www.', '');
}

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {a: 1}
  }
  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.location.pathname.replace('/p/', '')}.json`)
    .then((res) => {
      this.setState({post: res.data, fetched: true})
    })
    .catch((err) => {console.log(err)})
  }
  getTime(t) {
    return ta().ago(t)
  }
  render () {
    let p = {title: 'doot'},
        comments = <div style={{textAlign: 'center', padding: '2rem'}}>Loading...</div>
    if (this.state.fetched) {
      p = this.state.post
      comments = <span>
                    {p.kids.map((post, i) => {
                      return <Comment key={post} pid={post} i={i+1} />
                    })}
                  </span>
    }
    return(
      <div style={style.container}>
        <div style={{padding: '1rem', borderBottom: '1px solid rgba(0,0,0,.05)'}}>
          <div style={style.title}><a href={p.url}>{p.title}</a></div>
          <div style={style.link}>{url_domain(p.url)}</div>
          <div style={{color: '#888', fontSize: '.8rem', marginTop: '5px'}}>{p.score} points by <a href={`https://news.ycombinator.com/user?id=${p.by}`}>{p.by}</a> {this.getTime(p.time*1000)}</div>
        </div>
        {comments}
      </div>
    )
  }
} 