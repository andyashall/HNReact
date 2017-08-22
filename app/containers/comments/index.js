import React, { Component } from 'react'
import axios from 'axios'
import ta from 'time-ago'
import {Link} from 'react-router-dom'

import Comment from '../../components/comment'

import css from './style.css'

const style = {
  container: {
    backgroundColor: '#f9f9f9',
    minHeight: 'calc(100vh - 2.75rem)',
    position: 'relative',
    marginTop: '2.75rem',
    left: '50%',
    // width: '800px',
    transform: 'translateX(-50%)'
  },
  link: {
    color: '#0070c9',
    marginTop: '5px',
    fontSize: '.8rem'
  },
  more: {
    display: 'none'
  },
  moreHov: {
    padding: '1rem',
    color: '#888',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#fff'
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {limit: 10}
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
  url_domain(data) {
    let    a      = document.createElement('a')
           a.href = data
    return a.hostname.replace('www.', '')
  }
  render () {
    let p = {title: 'doot'},
        comments = <div style={{textAlign: 'center', padding: '2rem', color: '#888'}}>Loading...</div>,
        title = <div></div>
    if (this.state.fetched) {
      p = this.state.post
      comments = <span>
                    {p.kids.slice(0,this.state.limit).map((post, i) => {
                      return <Comment key={post} pid={post} i={i+1} />
                    })}
                    <div onClick={()=>{this.setState({limit: this.state.limit+10})}} style={p.kids.length > this.state.limit ? style.moreHov : style.more}>Load more</div>
                  </span>
      if (p.url) {
        title = <div style={style.title}><a href={p.url}>{this.state.post.title}</a></div>
      } else {
        title = <div style={style.title}><Link to={`/p/${p.id}`}>{this.state.post.title}</Link></div>
      }
    }
    return(
      <div className={css.cont} style={style.container}>
        <div style={{padding: '1rem', borderBottom: '1px solid rgba(0,0,0,.05)', backgroundColor: '#fff'}}>
          {title}
          <div style={style.link}>{this.url_domain(p.url)}</div>
          <div style={{color: '#888', fontSize: '.8rem', marginTop: '5px'}}>{p.score} points by <Link to={`/u/${p.by}`}>{p.by}</Link> {this.getTime(p.time*1000)}</div>
        </div>
        {comments}
      </div>
    )
  }
} 