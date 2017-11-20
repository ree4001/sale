import Head from 'next/head'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginPage = (props) => {
  // console.log(props.submitLogin)
  const { handleSubmit, submitLogin } = props
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage