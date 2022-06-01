import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'


import Header from './components/header'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Produto from './pages/produto'
import Error from './pages/error'


function RoutesApp() {
    return (
        <BrowserRouter>  
            <Header /> 
            <Switch>
                <Route path="/" component={ Home } exact/>
                <Route path="/sobre" component={ Sobre } exact/>
                <Route path="/produto/:id" component={ Produto } />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesApp