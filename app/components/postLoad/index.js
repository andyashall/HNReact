import React, { Component } from 'react'

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

export default class HeadButton extends Component {
  constructor(props) {
    super(props)
    this.state = {hov: false}
  }
  render() {
    return (
      <div style={style.post} onMouseEnter={()=>{this.setState({hov:true})}} onMouseLeave={()=>{this.setState({hov:false})}}>
        <div style={{color: '#888', width: '2rem', marginRight: '10px', textAlign: 'right', display: 'inline-block', verticalAlign: 'top'}}>0.</div>
        <div style={{display: 'inline-block'}}>
          <div><a href=''>Loading...</a></div>
          <div style={style.link}>loading.com</div>
          <div style={{color: '#888', fontSize: '.8rem', marginTop: '5px'}}>0 points by <a href={`https://news.ycombinator.com/user?id=`}>doot</a> 3 hours ago | 0 comments</div>
        </div>
      </div>
    )
  }
}