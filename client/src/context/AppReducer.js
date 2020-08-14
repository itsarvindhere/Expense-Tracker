export const AppReducer = (state, action) => {
    
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                //...state means we destructure the state object to get -> transactions : [<array of transactions>]
                ...state,
                transactions: state.transactions.filter((transaction) => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                loading: false,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                errpr: action.payload
            }
           
        default: 
            return state
    }
}