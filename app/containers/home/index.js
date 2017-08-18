import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import store from '../../store'
const state = store.getState()

import { savePosts, setLimit, postsType } from '../../actions'

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
  },
  more: {
    padding: '1rem',
    color: '#888',
    textAlign: 'center',
    cursor: 'pointer'
  },
  moreHov: {
    padding: '1rem',
    color: '#888',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#f9f9f9'
  }
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {limit: 30}
  }
  componentDidMount() {
    if (this.props.posts.length >= 1 && this.props.postsType == this.props.type) {
      this.setState({fetched: true})
      console.log('gotem')
    } else {
      console.log('fetching')
      axios.get(`https://hacker-news.firebaseio.com/v0/${this.props.type}.json`)
      .then((res) => {
        store.dispatch(savePosts(res.data))
        store.dispatch(postsType(this.props.type))
        this.setState({fetched: true})
      })
      .catch((err) => {console.log(err)})
    }
  }
  render () {
    let posts = <div style={{textAlign: 'center', paddingTop: '1rem', color: '#888'}}>Loading...</div>
    if (this.state.fetched) {
      posts = <span>
                {this.props.posts.slice(0,this.props.limit).map((post, i) => {
                  return <Post key={post} pid={post} i={i+1} />
                })}
                <div onMouseEnter={()=>{this.setState({hov:true})}} onMouseLeave={()=>{this.setState({hov:false})}} onClick={()=>{store.dispatch(setLimit(this.props.limit+30))}} style={this.state.hov ? style.moreHov : style.more}>Load more</div>
              </span>
    }
    return(
      <div style={style.container}>
        {posts}
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    postsType: state.postsType,
    limit: state.limit
  }
}

module.exports = connect(mapStateToProps)(Home)