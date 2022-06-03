import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Filme from './pages/filme'


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/filme/:id" component={Filme} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesApp