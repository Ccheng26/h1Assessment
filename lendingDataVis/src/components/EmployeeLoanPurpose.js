import React from 'react'
import { Piechart } from './D3Components/Piechart'
import { Grid } from '@material-ui/core'

export default function EmployeeLoanPurpose(props) {
    let purposeList = []
    let compositeData = ''
    let individual = props.companyData
    let companyName = individual.companyData !== '' ? individual.companyData[0].emp_title : ''
    let totalLoanAmount = 0
    if (individual.amountOfEmployeesRequested === 1) {
        totalLoanAmount= individual.companyData[0].loan_amnt
        compositeData = [{ value: 100, label: individual.companyData[0].purpose.replace(/_/g, ' ') }]
    } else {
        compositeData = []
        for (let i = 0; i < individual.companyData.length; i++) {
            if (individual.companyData[i].hasOwnProperty('purpose')) {
                purposeList.push(individual.companyData[i].purpose)
                totalLoanAmount += individual.companyData[i].loan_amnt
            }
        }
        let simularPurposeCount = {};
        purposeList.forEach(function (x) { simularPurposeCount[x] = (simularPurposeCount[x] || 0) + 1; });
        for (let purpose in simularPurposeCount) {
            compositeData.push({ value: (simularPurposeCount[purpose] / purposeList.length), label: purpose.replace(/_/g, ' ') })
        }
    }
    
    const renderPie = typeof compositeData === 'string' ? (<div><h2>{compositeData}</h2></div>) : (<div><h3>Purpose for Loan</h3> <Piechart x={100} y={100} outerRadius={100} innerRadius={50} data={compositeData} /></div>)
    const company = (<div><h3>Employer: {companyName} </h3><h3>Total Employees Seeking Loans: {individual.amountOfEmployeesRequested} </h3><h3>Total Loan Amount: {totalLoanAmount}</h3></div>)
    const renderObj = totalLoanAmount !== 0 ? <Grid container spacing={16}><Grid item>{company}</Grid> <Grid item>{renderPie} </Grid></Grid>: (<div></div>)
    return (
        <div>
            
        {renderObj}
        </div>
    )
}