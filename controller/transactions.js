const Transaction = require('../models/Transaction');


// @desc Get all the Transactions
//@route GET /api/v1/transactions
//@access Public

exports.getTransactions = async (req,res,next) => {
    try {

        const transactions = await Transaction.find();
        //Send a JSON DATA BACK 
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}


// @desc Add a Transaction
//@route POST /api/v1/transactions
//@access Public

exports.addTransaction = async (req,res,next) => {

    try {
        const {text, amount} = req.body;

    const transaction = await Transaction.create(req.body)

    return res.status(201).json({
        success: true,
        data: transaction
    })
    } catch (err) {
        if(err.name === 'ValidationError' ) {
            const messages = Object.values(err.errors).map(value => value.message);
            res.status(400).json({
                success: false,
                error: messages
            });
        
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
        
    }
    
}


// @desc Delete a Transaction
//@route DELETE /api/v1/transactions:id
//@access Public

exports.deleteTransaction = async (req,res,next) => {
    try {

        //Check if the transaction exists in the DB
        const id = req.params.id;
        const transaction = await Transaction.findById(id);

        if(!transaction) {
            //No Transaction found

            res.status(404).json({
                succes: false,
                error: 'No Transaction Found'
            })
        } 
        
        await transaction.remove();

        res.status(200).json({
            success: true,
            data: {}
        });
        



    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }   
}