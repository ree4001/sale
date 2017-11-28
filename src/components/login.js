import React, { Component } from 'react'
import Head from 'next/head'
import { Field, reduxForm } from 'redux-form'


class LoginPage extends Component {
  render() {
    const { handleSubmit, submitLogin, auth } = this.props
    return (
      <div className="wrapper">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <div className='login'>
        <p> Sale Login </p>
          <div className ="fromLogin">
            <form onSubmit={handleSubmit(submitLogin)}>
              <div className="fieldLogin">
                <label htmlFor="username">Username: </label>
                <Field name="username" component="input" type="text" />
              </div>
              <div className="fieldLogin">
                <label htmlFor="password">Password: </label>
                <Field name="password" component="input" type="password" />
              </div>
              <div style={{ margin: '10px 10px 10px 10px', color: '#b30000' }}> {auth.successMsg} </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage