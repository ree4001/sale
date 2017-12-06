import Head from 'next/head'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Link from 'next/link'
import { CHECKSTATUS } from '../../status'
import { submitLogout }  from '../../reduxModules/otpAuth'

class titleBarCustomer extends Component {
  render() {
    const { title, status, submitLogout } = this.props
    return (
      <div className="topbar">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Link href="/login">
          <img className="position" src="/static/ITTP-201707.png" />
        </Link>
        <div className='customerHead'>
          <p> ตรวจสอบสถานะใบสมัคร </p>
        </div>
        <Link href="/loginByOtp">
          <div className="logout">
            <button onClick={submitLogout}> Logout </button>
          </div>
        </Link>
      </div>
    )
  }
}

// const titleBarCustomer = ({ title, status }) => (
//   <div className="topbar">
//     <Head>
//       <link href="/static/styles.css" rel="stylesheet" />
//       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//     </Head>
//     <Link href="/login">
//       <img className="position" src="/static/ITTP-201707.png" />
//     </Link>
//     <div className='customerHead'>
//       <p> ตรวจสอบสถานะใบสมัคร </p>
//     </div>
//     <Link href="/login">
//       <div className="logout">
//         <button> Logout </button>
//       </div>
//     </Link>
//   </div>
// )

export default connect(null, { submitLogout })(titleBarCustomer)
// export default titleBarCustomer 