import { combineReducers } from 'redux';
import { loanData, selectedCompany } from './loanData';

const allReducers = combineReducers({
    loanData: loanData,
    selectedCompany: selectedCompany
})

export default allReducers;