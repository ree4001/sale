import React, { Component } from 'react'
import Router from 'next/router'
import Cookies from 'universal-cookie'

export const requireAuthSale = (Component) => {
  return class extends Component {
    render() {
      return <Component {...this.props} />
    }
    static async getInitialProps({ req, res }) {
      let cookies, token, rank
      // Render from server
      if (req) {
        cookies = new Cookies(req.headers.cookie)
        token = cookies.get('token')
        rank = cookies.get('rank')       
        if (token === undefined) {
          res.redirect('/login')
        }
      }
      // Render from browser
      else {
        cookies = new Cookies()
        token = cookies.get('token')
        rank = cookies.get('rank')
        if (token === undefined) {
          Router.push('/login')          
        }
      }
    }
  }
}

export const requireAuthLeader = (Component) => {
  return class extends Component {
    render() {
      return <Component {...this.props} />
    }
    static async getInitialProps({ req, res }) {
      let cookies, token, rank
      // Render from server
      if (req) {
        cookies = new Cookies(req.headers.cookie)
        rank = cookies.get('rank')
        token = cookies.get('token')
        if (token === undefined || rank !== 'leader') {
          res.redirect('/login')
        }
      }
      // Render from browser
      else {
        cookies = new Cookies()
        token = cookies.get('token')
        rank = cookies.get('rank')
        if (token === undefined || rank !== 'leader') {
          Router.push('/login')          
        }
      }
    }
  }
}

