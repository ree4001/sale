import React from 'react'

export const getCookie = (c_name) => {
  let i = document.cookie.split(";")
  let x = document.cookie.split(";")
  let y = document.cookie.split(";")
  let ARRcookies = document.cookie.split(";")
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="))
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1)
    x = x.replace(/^\s+|\s+$/g, "")
    if (x == c_name) {
      return unescape(y)
    }
  }
}
