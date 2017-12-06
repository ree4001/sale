import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'next/router'

class SubmitOTP extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { otpAuth, sendOtp } = this.props
    sendOtp(otpAuth.citizenID)
  }
  render() {
    const { handleSubmit, otpAuth, router, submitLogin} = this.props
    let numberPhone = 'XXXX'
    if (otpAuth.mobileNo !== undefined) {
      numberPhone = otpAuth.mobileNo.substring(6,10)
    }
    if (otpAuth.mobileNo === undefined) {
      router.push(`/loginByOtp`)
    }
    const { mobileNo } = otpAuth
    return (
      <div className="wrapper">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <div className='submitOtp'>
          <p> เข้าสู่ระบบ </p>
          <div style={{'height': '65%'}} className="fromLogin">
            <div className="fieldLogin">
              รหัส OTP ส่งไปที่ : XXX-XXX-{numberPhone}
            </div>
            <form onSubmit={handleSubmit(submitLogin)}>
              <div className="fieldLogin">
                <label htmlFor="OTP">หากคุณไม่ได้รับ OTP กรุณากดปุ่ม REQUEST </label>
              </div>
              <div className="fieldLogin">
                <Field name="OTP" component="input" type="text" placeholder="กรอกรหัส OTP"/>
                <button className="btnRq" onClick={this.handleClick} type="button">REQUEST</button>
              </div>
              <div style={{ margin: '10px 10px 10px 10px', color: '#b30000' }}> {otpAuth.successMsg} </div>
              <button className="btnSubmit" type="submit">เข้าสู่ระบบ</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SubmitOTP)