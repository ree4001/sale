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
        <form onSubmit={handleSubmit(submitLogin)}>
          <div>
            <label htmlFor="username">Username</label>
            <Field name="username" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" />
          </div>
          <div style={{ margin: '20px 10px 10px 10px',color: '#b30000' }}> {auth.successMsg} </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    )
  }
}

export default LoginPage