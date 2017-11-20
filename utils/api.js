import { API_SERVER } from '../config'

const getJSON = url => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: 'TZLySo2xKxTFjoW04RpBF0IcUAJfPXsLSWWOF2zDAugzFzXomjZiqeVsdrJXPwZI',  
  },
})
  .then(response => response.json())
  .then((json) => {
    if (json.error) {
      throw Error(json.error.message)
    }
    return json
  })
  const postJSON = (url, jsonBody) => fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: 'TZLySo2xKxTFjoW04RpBF0IcUAJfPXsLSWWOF2zDAugzFzXomjZiqeVsdrJXPwZI', 
    },
    body: JSON.stringify(jsonBody),
  })
    .then(response => response.json())
    .then((json) => {
      if (json.error) {
        throw Error(json.error.message)
      }
      return json
    })

export { API_SERVER, getJSON, postJSON }