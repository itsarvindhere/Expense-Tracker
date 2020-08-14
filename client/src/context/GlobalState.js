import React, { useReducer, createContext} from "react";
import {AppReducer} from './AppReducer'
import axios from "axios";
//Create a global context

export const GlobalContext = createContext();



//Provider Component

export const GlobalProvider = ({children}) => {
    //Here, state is an object that has the 'transactions' array
    //So, state = { transactions: []}
    //To access 'transactions' array we say - state.transactions

    const [state, dispatch] = useReducer(AppReducer,  {
        transactions: [],
        error: null,
        loading: true
    });

    //ACTIONS 

    const deleteTransaction =  async (id) => {

        try {

            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch ({
                type: 'DELETE_TRANSACTION',
                payload: id
            });

        } catch(err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }



        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }


    const addTransaction =  async (transaction) => {

        try {
            //Axios will automatically convert the data into JSON
            //Here, the data is 'transaction' that is passed to the function as an object
            //This object is converted by Axios to JSON & then sent to the sever
            const res = await axios.post('/api/v1/transactions',transaction);

            const transactionArray = res.data.data;

            dispatch ({
                type: 'ADD_TRANSACTION',
                payload: transactionArray
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
        
    }

    const getTransactions = async() => {
        try {
            const res = await axios.get('/api/v1/transactions');
            const arrayOfTransactions = res.data.data;

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: arrayOfTransactions
            });
            

        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={
        //We provide a value to all the children and this value is an object containing the transactions array & other 
        //actions
        
        {transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction, getTransactions}
    }>
        {children}
    </GlobalContext.Provider>)
}
