import React from 'react'
import { Piechart } from './D3Components/Piechart'

export default function EmployeeLoanPurpose(props) {
    let purposeList = []
    let compositeData = ''
    let individual = props.companyData
    if (individual.amountOfEmployeesRequested === 1) {
        compositeData = [{ value: 100, label: individual.companyData[0].purpose.replace(/_/g, " ") }]
    } else {
        compositeData = []
        for (let i = 0; i < individual.companyData.length; i++) {
            if (individual.companyData[i].hasOwnProperty('purpose')) {
                purposeList.push(individual.companyData[i].purpose)
            }
        }
        let simularPurposeCount = {};
        purposeList.forEach(function (x) { simularPurposeCount[x] = (simularPurposeCount[x] || 0) + 1; });
        console.log(simularPurposeCount)
        for (let purpose in simularPurposeCount) {
            compositeData.push({ value: (simularPurposeCount[purpose] / purposeList.length), label: purpose.replace(/_/g, "") })
        }
    }
    const renderPie = typeof compositeData === 'string' ? (<div><h1>{compositeData}</h1></div>) : (<div><h1>Purpose for Loan</h1> <Piechart x={100} y={100} outerRadius={100} innerRadius={50} data={compositeData} /></div>)
    return (
        renderPie
    )
}