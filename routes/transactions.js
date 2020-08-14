const express = require("express");
const router = express.Router();
const {getTransactions, addTransaction, deleteTransaction} = require("../controller/transactions");


router
// Here, '/' = '/api/v1/transactions'
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);
module.exports = router;