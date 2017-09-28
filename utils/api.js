import { API_SERVER } from '../config'

const getJSON = url => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: 'TnMlEBsrURnpWAWmS7ZwLqmCaTk30tZdaiiN9UFGCQZs5lIyCsqYK8sCKnpZdcTc',  
  },
})
  .then(response => response.json())
  .then((json) => {
    if (json.error) {
      throw Error(json.error.message)
    }
    return json
  })

export { API_SERVER, getJSON }