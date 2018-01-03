import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Field, reduxForm } from 'redux-form'


class OtpLoginPage extends Component {
  render() {
    const { handleSubmit, submitLogin, otpAuth, submitGetotp } = this.props
    return (
      <div className="wrapper">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <div className='login'>
          <p> เข้าสู่ระบบ </p>
          <div className="fromLogin">
            <form onSubmit={handleSubmit(submitGetotp)}>
              <div className="fieldLogin">
                <label htmlFor="citizenId">เลขประจำตัวประชาชน: </label>
                <Field name="citizenId" component="input" type="text" />
              </div>
              <div className="fieldLogin">
                <label htmlFor="mobileNo">เบอร์โทรศัพท์เพื่อรับ OTP: </label>
                <Field name="mobileNo" component="input" type="text" />
              </div>
              <div style={{ margin: '10px 10px 10px 10px', color: '#b30000' }}> {otpAuth.successMsg} </div>
              <button className="submit" type="submit">ส่งรหัส OTP</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default OtpLoginPage