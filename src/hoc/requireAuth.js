import React, { Component } from 'react'
import Router from 'next/router'
import Cookies from 'universal-cookie'

export const requireAuthSale = (Component) => {
  return class extends Component {
    render() {
      return <Component {...this.props} />
    }
    static async getInitialProps({ req, res }) {
      let cookies, token, rank, username
      // Render from server
      if (req) {
        cookies = new Cookies(req.headers.cookie)
        token = cookies.get('token')
        rank = cookies.get('rank')
        username = cookies.get('username')
        if ((!token || !username) || rank !== 'sale') {
          res.redirect('/login')
        }
      }
      // Render from browser
      else {
        cookies = new Cookies()
        token = cookies.get('token')
        rank = cookies.get('rank')
        username = cookies.get('username')
        if ((!token || !username) || rank !== 'sale') {
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
      let cookies, token, rank, username
      // Render from server
      if (req) {
        cookies = new Cookies(req.headers.cookie)
        rank = cookies.get('rank')
        token = cookies.get('token')
        username = cookies.get('username')
        if ((!token || !username) || rank !== 'leader') {
          res.redirect('/login')
        }
      }
      // Render from browser
      else {
        cookies = new Cookies()
        token = cookies.get('token')
        rank = cookies.get('rank')
        username = cookies.get('username')
        if ((!token || !username) || rank !== 'leader') {
          Router.push('/login')
        }
      }
    }
  }
}

export const requireAuthCustomer = (Component) => {
  return class extends Component {
    render() {
      return <Component {...this.props} />
    }
    static async getInitialProps({ req, res }) {
      let token, cookies, citizenId
      // Render from server
      if (req) {
        cookies = new Cookies(req.headers.cookie)
        token = cookies.get('token')
        citizenId = cookies.get('citizenId')
        if (token === undefined || citizenId === undefined) {
          res.redirect('/loginByOtp')
        }
      }
      // Render from browser
      else {
        cookies = new Cookies()
        token = cookies.get('token')
        citizenId = cookies.get('citizenId')
        if (token === undefined || citizenId === undefined) {
          Router.push('/loginByOtp')
        }
      }
    }
  }
}