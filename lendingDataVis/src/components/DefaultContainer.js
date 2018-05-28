import React from 'react'
import EmployeeCompanyDefaults from './EmployeeCompanyDefaults'
import { Grid } from '@material-ui/core'

export default function DefaultContainer(props) {
    let defaultList = []
    let compositeData = ''
    let individual = props.companyData
    let defaultStatusCount
    if (individual.amountOfEmployeesRequested === 1) {
        if(individual.companyData[0].loan_status === 'Fully Paid'){
            defaultStatusCount = {'Fully Paid': 1, 'Charged Off': 0, total: 1}
        } else if (individual.companyData[0].loan_status === 'Charged Off'){
            defaultStatusCount = {'Fully Paid': 0, 'Charged Off': 1, total: 1}
        }
    } else {
        compositeData = []
        for (let i = 0; i < individual.companyData.length; i++) {
            if (individual.companyData[i].hasOwnProperty('loan_status')) {
                defaultList.push(individual.companyData[i].loan_status)
            }
        }
        defaultStatusCount = {};
        defaultList.forEach(function (x) { defaultStatusCount[x] = (defaultStatusCount[x] || 0) + 1; });
        defaultStatusCount.total = defaultList.length
    }
    const renderEmployeeCompanyDefaults = defaultStatusCount.total !==0 ? (<div> <h2>Rate of Default</h2><EmployeeCompanyDefaults defaultData={defaultStatusCount}/> </div>): <div></div>
    return (
        <div>

        {renderEmployeeCompanyDefaults}
        </div>
    )
}