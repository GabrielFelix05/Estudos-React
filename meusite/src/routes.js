import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Filme from './pages/filme'
import Error from './pages/error'
import Favoritos from './pages/Favoritos'


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/filme/:id" component={Filme} exact/>
                <Route path="/favoritos" component={Favoritos} exact/>
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesApp