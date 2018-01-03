import React, { Component } from 'react'
import Head from 'next/head'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Spinner from './spinner'
import { getAccessToken } from '../../utils/api'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      status: ''
    }
    this.Login = this.Login.bind(this)
  }
  async Login() {
    const { submitLogin, value, auth} = this.props
    await submitLogin(value)
    // this.setState({ loading: true })
  }
  render() {
    const { handleSubmit, auth } = this.props
    return (
      <div className="wrapper">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <div className='login'>
          <p> Sale Login </p>
          <div className="fromLogin">
            <form onSubmit={handleSubmit(this.Login)}>
              <div className="fieldLogin">
                <label htmlFor="username">Username: </label>
                <Field name="username" component="input" type="text" />
              </div>
              <div className="fieldLogin">
                <label htmlFor="password">Password: </label>
                <Field name="password" component="input" type="password" />
              </div>
              <div style={{ margin: '10px 10px 10px 10px', color: '#b30000' }}> {auth.successMsg} </div>
              {auth.loading ? <button type="button"> {<Spinner />} </button> : <button className="submit" type="submit">Login</button>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage