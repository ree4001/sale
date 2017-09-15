import { API_SERVER } from '../config'

const getJSON = url => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: '2TaXbrSxjgLKRFH9cNigdWEoMzq4tmQeIfw5H26XLO2SwVYxDL2FjiXgqgoBsNYo',  
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