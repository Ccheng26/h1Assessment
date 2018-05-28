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
        let finalSet
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('GET', 'POST', 'OPTIONS');
        fetch('https://loan-dataset07-11.herokuapp.com/', {
            headers: headers,
            method: 'GET'
        }).then((data) => {
            return data.json()
        }).then((json) => {
            var result = []
            for (let i in json) { result.push(json[i]) }
            console.log(res)
            finalSet = mergeByEmp(result)
            this.props.loadData(finalSet)
        }).catch((err) => {
            console.log(err)
            let smallerJson = require('../../data/smallSample.json')
            let result = smallerJson.results
            finalSet = mergeByEmp(result)
            this.props.loadData(finalSet)
        })
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