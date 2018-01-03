import { connect } from 'react-redux'
import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'universal-cookie'
import MenuTab from '../leader/components/menuTab'
import { CHECKSTATUS } from '../../status'
import { submitLogout } from '../../reduxModules/auth'

class TitleBarLeader extends Component {
  render() {
    let username = ''
    const cookies = new Cookies()
    username = cookies.get('username')
    const { title, status, submitLogout, tabmenu} = this.props
    return (
      <div className="topbar">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Link href="/login">
          <img className="position" src="/static/ITTP-201707.png" />
        </Link>
        <MenuTab tabmenu={tabmenu}/>
        <Link href="/login">
          <div className="logout">
            <button onClick={submitLogout}> Logout </button>
          </div>
        </Link>
        <p className="user"> {username} </p>
      </div>
    )
  }
}

export default connect(null, { submitLogout })(TitleBarLeader)

