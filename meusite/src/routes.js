import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'


import Header from './components/header'
import Home from './pages/home'
import Sobre from './pages/sobre'

function RoutesApp() {
    return (
        <BrowserRouter>  
            <Header /> 
            <Switch>
                <Route path="/" component={ Home } exact/>
                <Route path="/sobre" component={ Sobre } exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesApp