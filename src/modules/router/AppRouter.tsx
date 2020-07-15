import React, { Component } from 'react'
import { Route, HashRouter, } from 'react-router-dom'
import App from '../../App'
class AppRouter extends Component {

    render(){
        return(
            <HashRouter>
                <Route exact path='/' component={App}></Route>
                
            </HashRouter>
        )
    }
}

export default AppRouter