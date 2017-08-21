import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ta from 'time-ago'

import PostLoad from '../postLoad'

// import Comment5 from '../comment5'

// import css from './style.css'

const style = {
  container: {
    position: 'relative',
  },
  link: {color: '#0070c9', marginTop: '5px', fontSize: '.8rem'},
  linkHov: {color: '#0070c9', marginTop: '5px', fontSize: '.8rem', textDecoration: 'underline'},
  post: {backgroundColor: '#fff', fontSize: '.9rem', lineHeight: '1.3', borderBottom: '1px solid rgba(0,0,0,.05)', borderLeft: '1px solid rgba(0,0,0,.05)', marginLeft: '5rem'},
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
    this.state = {limit: 3}
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
      //   kids = <span style={this.state.hide ? style.hide : style.show}>{p.kids.slice(0,this.state.limit).map((po, i) => {
      //       return <Comment4 key={po} pid={po} i={i+1} />
      //     })}</span>
      // }
      post = <span><div style={p.deleted ? style.hide : style.post}>
              <div style={{padding:'1rem'}}>
                <div style={{color: '#888', fontSize: '.8rem', marginBottom: '10px'}}><span onClick={()=>{this.setState({hide: this.state.hide ? false : true})}} style={style.hideChildren}>[{this.state.hide ? `+${p.kids ? p.kids.length : '0'}` : '-'}]</span> <Link style={{color: 'inherit'}} to={`/u/${p.by}`}>{p.by}</Link> {this.getTime(p.time*1000)}</div>
                <div style={this.state.hide ? style.hide : style.show} dangerouslySetInnerHTML={{__html: p.text}}></div>
              </div>
            </div>
            {kids}</span>
    }
    return(
      <div style={style.container}>
        {post}
      </div>
    )
  }
} 