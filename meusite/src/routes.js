import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Contato from './Contato'
import Home from './home'
import Sobre from './Sobre'
import Erro from './Error'
import Parametro from './parametro'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact component={Home} path="/"/>
                <Route exact component={Sobre} path="/Sobre"/>
                <Route exact component={Contato} path="/Contato"/>
                <Route exact component={Parametro} path="/Contato/:id"/>
                <Route component={Erro} path="*"/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes