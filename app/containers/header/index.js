import React, { Component } from 'react'

import HeadButton from '../../components/headButton'

const style = {
  container: {
    position: 'fixed',
    zIndex: 99,
    top: 0,
    height: '2.75rem',
    backgroundColor: '#fff',
    color: '#ff6600',
    width: '100%',
    fontSize: '.8rem',
    borderBottom: '1px solid rgba(0,0,0,.06)'
  },
  left: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '20px'
  },
  middle: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    left: '50%'
  },
  right: {
    color: '#333',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '20px'
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {a: 1}
  }
  render () {
    return(
      <div style={style.container}>
        <div style={style.left}>
          <HeadButton text='Home' link='/' />
          <HeadButton text='New' link='/new' />
          <HeadButton text='Best' link='/best' />
        </div>
        <div style={style.middle}>HN React</div>
        <div style={style.right}>ashall &#x25be;</div>
      </div>
    )
  }
} 