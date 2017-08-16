import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ta from 'time-ago'

import PostLoad from '../postLoad'

import css from './style.css'

const style = {
  container: {
    position: 'relative',
    borderBottom: '1px solid rgba(0,0,0,.05)'
  },
  link: {color: '#0070c9', marginTop: '5px', fontSize: '.8rem'},
  linkHov: {color: '#0070c9', marginTop: '5px', fontSize: '.8rem', textDecoration: 'underline'},
  post: {padding: '1rem'},
  postHov: {padding: '1rem', backgroundColor: '#f9f9f9'}
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
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.pid}.json`)
    .then((res) => { this.setState({post: res.data, fetched: true}) })
    .catch((err) => {console.log(err)})
  }
  getTime(t) {
    return ta().ago(t)
  }
  render () {
    let post = <PostLoad />
    if (this.state.fetched) {
      let p = this.state.post
      post =  
            <div style={style.post} onMouseEnter={()=>{this.setState({hov:true})}} onMouseLeave={()=>{this.setState({hov:false})}}>
              <div style={{color: '#888', width: '2rem', marginRight: '10px', textAlign: 'right', display: 'inline-block', verticalAlign: 'top'}}>{this.props.i}.</div>
              <div style={{display: 'inline-block'}}>
                <div><a href={p.url}>{this.state.post.title}</a></div>
                <div style={style.link}>{url_domain(p.url)}</div>
                <div className={css.info} style={{color: '#888', fontSize: '.8rem', marginTop: '5px'}}>{p.score} points by <a href={`https://news.ycombinator.com/user?id=${p.by}`}>{p.by}</a> {this.getTime(p.time*1000)} | <Link to={`/p/${p.id}`}>{p.descendants} comments</Link></div>
              </div>
            </div>
    }
    return(
      <div style={style.container}>
        {post}
      </div>
    )
  }
} 