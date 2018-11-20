const express = require('express')
const router = express.Router()
const testIban = require('../public/javascripts/testIban')

router.get('/', function (req, res, next) {
  res.render('iban', { result: '' })
})
router.post('/', function (req, res, next) {
  let number = req.body.number
  let result
  if (testIban(number)) { result = 'VALID' } else { result = 'INVALID' }
  res.redirect('/iban/display/?valid=' + result)
})
router.get('/display', function (req, res, next) {
  res.render('display', { result: req.query.valid })
})

module.exports = router
