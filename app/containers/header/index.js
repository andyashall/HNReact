import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import HeadButton from '../../components/headButton'

import css from './style.css'

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
    left: '1rem'
  },
  middle: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    left: '50%'
  },
  right: {
    // display: 'none',
    // color: '#333',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '1rem',
    fontSize: '1rem'
  },
  mobButton: {
    padding: '1rem',
    borderBottom: '1px solid rgba(0,0,0,.06)'
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {menu: false}
  }
  toggle = () => {
    this.setState({menu: this.state.menu ? false : true})
  }
  render () {
    return(
      <div>
        <div style={style.container}>
          <div className={css.left} style={style.left}>
            <div className={css.webMenu}>
              <HeadButton text='Home' link='/' />
              <HeadButton text='New' link='/new' />
              <HeadButton text='Best' link='/best' />
            </div>
            <div onClick={this.toggle} className={css.mobMenu}><i style={{verticalAlign: 'middle'}} className="material-icons">menu</i></div>
          </div>
          <div style={style.middle}>HN</div>
          <div style={style.right}><a className={css.icon} href='https://github.com/andyashall/HNReact'>&#xf09b;</a></div>
        </div>
        <div className={css.mMenu}>
          <div className={this.state.menu ? css.menu : css.menu + ' ' + css.hide}>
            <Link onClick={this.toggle} to='/'><div style={style.mobButton}>Home</div></Link>
            <Link onClick={this.toggle} to='/new'><div style={style.mobButton}>New</div></Link>
            <Link onClick={this.toggle} to='/best'><div style={style.mobButton}>Best</div></Link>
          </div>
          <div onClick={this.toggle} className={this.state.menu ? css.overlay : css.overlay + ' ' + css.hide} />
        </div>
      </div>
    )
  }
} 