import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Contato from './Contato'
import Home from './home'
import Sobre from './Sobre'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact component={Home} path="/"/>
                <Route exact component={Sobre} path="/Sobre"/>
                <Route exact component={Contato} path="/Contato"/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes