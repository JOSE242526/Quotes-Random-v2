const router = require('express').Router()

const quoteServices = require('./quotes.services')


router.get('/quotes', quoteServices.getAllQuotes)
router.post('/quotes', quoteServices.postQuote)

router.get('/quotes/:id', quoteServices.getQuoteById)
router.patch('/quotes/:id', quoteServices.patchQuote)
router.delete('/quotes/:id', quoteServices.deleteQuote)


module.exports = router