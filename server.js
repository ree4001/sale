const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// sale = saleSevice 
app.prepare()
.then(() => {
  const server = express()

  server.get('/sale/filter/:id', (req, res) => {
    const actualPage = '/sale'
    const queryParams = { title: req.params.id }
    console.log('test', queryParams) 
    app.render(req, res, actualPage, queryParams)
  })


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8081, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})