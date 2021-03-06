'use-strict'

const router = require('express').Router()
module.exports = router

const makeApiCall = require('../../helpers/personality-insights')

router.post('/', (req, res, next) => {
  makeApiCall(req.body)
    .then(response => res.json(response))
})
