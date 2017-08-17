import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ta from 'time-ago'

import PostLoad from '../postLoad'

// import Comment from '../comment'

// import css from './style.css'

const style = {
  container: {
    position: 'relative',
    borderBottom: '1px solid rgba(0,0,0,.05)'
  },
  link: {color: '#0070c9', marginTop: '5px', fontSize: '.8rem'},
  linkHov: {color: '#0070c9', marginTop: '5px', fontSize: '.8rem', textDecoration: 'underline'},
  post: {fontSize: '.9rem', borderLeft: '2rem solid #f9f9f9'},
  postHov: {padding: '1rem', backgroundColor: '#f9f9f9'},
  hideChildren: {
    cursor: 'pointer'
  },
  hide: {
    display: 'none'
  }
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
    let post = <PostLoad />,
        kids = ''
    if (this.state.fetched) {
      let p = this.state.post
      // if (p.kids) {
      //   return <div style={{borderLeft: '1rem solid #f9f9f9'}}>
      //     {p.kids.map((post, i) => {
      //       return <Comment key={post} pid={post} i={i+1} />
      //     })}
      // </div>
      // }
      post = <div style={style.post} onMouseEnter={()=>{this.setState({hov:true})}} onMouseLeave={()=>{this.setState({hov:false})}}>
              <div style={{padding:'1rem'}}>
                <div style={{color: '#888', fontSize: '.8rem', marginBottom: '10px'}}><span onClick={()=>{this.setState({hide: this.state.hide ? false : true})}} style={style.hideChildren}>[{this.state.hide ? `+${p.kids ? p.kids.length : '0'}` : '-'}]</span> <a style={{color: 'inherit'}} href={`https://news.ycombinator.com/user?id=${p.by}`}>{p.by}</a> {this.getTime(p.time*1000)}</div>
                <div style={this.state.hide ? style.hide : style.show} dangerouslySetInnerHTML={{__html: p.text}}></div>
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