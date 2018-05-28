import React, { Component } from 'react';
import { connect } from 'react-redux'
import DefaultContainer from './DefaultContainer'
import OverallDefaults from './OverallDefaults'
import EmployeeCompanyDefaults from './EmployeeCompanyDefaults'
import EmployeeLoanPurpose from './EmployeeLoanPurpose'
import { Grid } from '@material-ui/core'

class _ContentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyData: '',
            amountOfEmployeesRequested: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.selectedCompany !== nextProps.selectedCompany) {
            this.setState({
                companyData: nextProps.loanData[nextProps.selectedCompany],
                amountOfEmployeesRequested: nextProps.loanData[nextProps.selectedCompany].length
            }, () => { console.log(this.state) })
        }
    }
    render() {
        return (
            <Grid container>
                {/* 
                <OverallDefaults /> */}
                <Grid item >
                <EmployeeLoanPurpose companyData={this.state} />
                </Grid>
                <Grid item >
                <DefaultContainer companyData={this.state} />
                </Grid>
                
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        loanData: state.loanData,
        selectedCompany: state.selectedCompany
    }
}

const ContentContainer = connect(mapStateToProps, null)(_ContentContainer)
export { ContentContainer }