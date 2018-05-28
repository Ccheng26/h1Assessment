export const loanData =(state ={}, action)=>{
    let newState;
    switch(action.type){
        case 'LOAD_DATA':
            newState = {...state}
            newState =  action.payload
            return newState
    }
    return state
}

export const selectedCompany=(state ={}, action)=>{
    let newState;
    switch(action.type){
        case 'SELECT_COMPANY':
            newState = {...state}
            newState =  action.payload
            return newState
    }
    return state
}