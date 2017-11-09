const path = require('path')
const express = require('express')
const app = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const PORT = process.env.PORT || 8080

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public'))
  })

  // error handling end-ware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
}

createApp()
startListening()
