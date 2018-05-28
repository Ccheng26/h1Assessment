import React, { Component } from 'react';
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadData } from 'actions'
import SidebarContent from './SidebarContent'
import Sidebar from 'react-sidebar';
import store from 'state/store'
import 'fetch';
import { mergeByEmp } from '../utils';
import { ContentContainer } from './ContentContainer';


class _MainPage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        // headers.append('GET', 'POST', 'OPTIONS');
        // fetch('https://loan-dataset07-11.herokuapp.com/', {
        //     headers: headers,
        //     method: 'GET'
        // }).then((data) => {
        //     return data.json()
        // }).then((json) => {
        //     var result = []
        //     for (let i in json) { result.push(json[i]) }
        let json = require('../../data/smallSample.json')
        let result = json.results
        let res = JSON.stringify(result)
        // console.log(res)
        let finalSet = mergeByEmp(result)
        this.props.loadData(finalSet)
        // }).catch((err) => {
        //     console.log(err)
        // })
    }
    render() {
        return (
            <Sidebar sidebar={<SidebarContent />}
                open={true} docked={true}
            >
                <b><ContentContainer /></b>
            </Sidebar>
        )
    }
}

const mapDispatchToProps = dispatch => {
    const mapped = bindActionCreators({ loadData }, dispatch)
    return mapped
}

const MainPage = connect(null, mapDispatchToProps)(_MainPage)
export { MainPage }