import React, { Component } from 'react'
import axios from 'axios'
import ta from 'time-ago'

import Post from '../../components/post'

import css from './style.css'

const style = {
  container: {
    backgroundColor: '#fff',
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
    padding: '2rem',
    color: '#888',
    textAlign: 'center',
    cursor: 'pointer',
    // backgroundColor: '#f9f9f9'
  },
  table: {
    display: 'table',
    // padding: '1rem',
    // width: '100%'
  },
  cell: {
    display: 'table-cell',
    padding: '1rem'
  },
  cellg: {
    display: 'table-cell',
    padding: '1rem',
    color: '#888'
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {limit: 10}
  }
  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/user/${this.props.location.pathname.replace('/u/', '')}.json`)
    .then((res) => {
      console.log(res.data)
      this.setState({user: res.data, fetched: true})
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
    let u = {id: 'Loading...', created: 'Loading...', karma: 'Loading...', about: 'Loading...'},
        comments = <div style={{textAlign: 'center', padding: '2rem'}}>Loading...</div>,
        title = <div></div>,
        posts = <div style={{textAlign: 'center', paddingTop: '1rem'}}>Loading...</div>
    if (this.state.fetched) {
      u = this.state.user
      if (u.submitted) {
      posts = <span>
                {u.submitted.slice(0,this.state.limit).map((post, i) => {
                  return <Post key={post} pid={post} i={i+1} />
                })}
                <div onMouseEnter={()=>{this.setState({hov:true})}} onMouseLeave={()=>{this.setState({hov:false})}} onClick={()=>{store.dispatch(setLimit(this.props.limit+30))}} style={this.state.hov ? style.moreHov : style.more}>Load more</div>
              </span>
      }
    }
    return(
      <div clssName={css.cont} style={style.container}>
        <div style={{borderBottom: '1px solid rgba(0,0,0,.05)'}}>
          <div className={css.table} style={style.table}>
            <div style={{display: 'table-row'}}>
              <div style={style.cellg}>User:</div><div style={style.cell}>{u.id}</div>
            </div>
            <div style={{display: 'table-row'}}>
              <div style={style.cellg}>Created:</div><div style={style.cell}>{this.getTime(u.created*1000)}</div>
            </div>
            <div style={{display: 'table-row'}}>
              <div style={style.cellg}>Karma:</div><div style={style.cell}>{u.karma}</div>
            </div>
            <div style={{display: 'table-row'}}>
              <div style={style.cellg}>About:</div><div dangerouslySetInnerHTML={{__html: u.about}} style={style.cell}/>
            </div>
          </div>
        </div>
        {posts}
      </div>
    )
  }
} 